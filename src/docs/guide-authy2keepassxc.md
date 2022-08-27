# Authy to KeepassXC 

This is a guide on importing TOTP from [Authy](https://authy.com/) to [KeepassXC](https://keepassxc.org/).

This guide is based off a guide from gboudreau which can be found [Here](https://gist.github.com/gboudreau/94bb0c11a6209c82418d01a59d958c93).


## Step 1: Installing Authy Desktop

You are going to need the Authy desktop app, instructions to installing it can be found [Here](https://authy.com/download/).

You will also need a Chromium based browser. I could not get this to work in anything else.


## Step 2: Open Authy and Login

Open Authy and log in, so you can see the codes being generated for you.

!!! note
    Authy has a backup password feature that is enabled on some accounts; I think it's ones that have a padlock icon next to them. For those accounts, you might need to enter the backup password to be able to export them.


## Step 3: Restart Authy With Remote Debugging

Restart the Authy desktop app with the command-line parameters for your system:

### Windows: 
Right-click the Authy desktop shortcut, hit `Properties`, and in the Target field add`--remote-debugging-port=5858` at the end. 

Then click OK. You can now launch Authy with this shortcut.
    
### Mac: 
From Terminal.app: `open -a "Authy Desktop" --args --remote-debugging-port=5858`

### Linux: 
From a terminal: `authy --remote-debugging-port=5858`


## Step 4: Localhost:5858

In a Chromium-based web browser, open [http://localhost:5858](http://localhost:5858).


## Step 5: Opening Developer Tools 

Click the `Twilio Authy` link in that webpage.

In Chrome Developer Tools top navigation bar, go to `Application` (if you don't see it, click >> to expand the full list) 

Then on the left, click `Frames` → `top`, right-click `main.html` → `Open in containing folder`, this should open a Console.


## Step 6: Downloading Authy Export

You can now copy-paste the following code into the Console and run it:

```js
// Based on https://github.com/LinusU/base32-encode/blob/master/index.js
function hex_to_b32(hex) { let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"; let bytes = []; for (let i = 0; i < hex.length; i += 2) { bytes.push(parseInt(hex.substr(i, 2), 16)); } let bits = 0; let value = 0; let output = ''; for (let i = 0; i < bytes.length; i++) { value = (value << 8) | bytes[i]; bits += 8; while (bits >= 5) { output += alphabet[(value >>> (bits - 5)) & 31]; bits -= 5; } } if (bits > 0) { output += alphabet[(value << (5 - bits)) & 31]; } return output; }

// from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523
function uuidv4() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); }); }

// from https://gist.github.com/gboudreau/94bb0c11a6209c82418d01a59d958c93
function saveToFile(data, filename) { if (!data) { console.error('Console.save: No data'); return; } if (typeof data === "object") { data = JSON.stringify(data, undefined, 4) } const blob = new Blob([data], { type: 'text/json' }); const e = document.createEvent('MouseEvents'); const a = document.createElement('a'); a.download = filename; a.href = window.URL.createObjectURL(blob); a.dataset.downloadurl = ['text/json', a.download, a.href].join(':'); e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); a.dispatchEvent(e); }

function deEncrypt({ log = false, save = false }) {  const folder = { id: uuidv4(), name: 'Imported from Authy' };  const bw = { "encrypted": false, "folders": [ folder], "items": appManager.getModel().map((i) => { let secretSeed = i.secretSeed; if (typeof secretSeed == "undefined") { secretSeed = i.encryptedSeed; } const secret = (i.markedForDeletion === false ? i.decryptedSeed : hex_to_b32(secretSeed)); const period = (i.digits === 7 ? 10 : 30); const [issuer, rawName] = (i.name.includes(":")) ? i.name.split(":") : ["", i.name]; const name = [issuer, rawName].filter(Boolean).join(": "); const totp = `otpauth://totp/${name}?secret=${secret}&digits=${i.digits}&period=${period}${issuer ? '&issuer=' + issuer : ''}`; return ({ id: uuidv4(), organizationId: null, folderId: folder.id, type: 1, reprompt: 0, name, notes: null, favorite: false, login: { username: null, password: null, totp }, collectionIds: null }); }), }; if (log) console.log(JSON.stringify(bw)); if (save) saveToFile(bw, 'authy-export.json'); }

deEncrypt({ log: true, save: true, });
```

This should download `authy-export.json`, save and open the file. 

It should look something like this:

```json
{
    "encrypted": false,
    "folders": [
        { 
            "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", 
            "name" : "Imported from Authy" 
        }
    ],
    "items": [
        {
            "id": "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
            "organizationId": null,
            "folderId": 1,
            "type": 1,
            "reprompt": 0,
            "name" : "",
            "notes": null,
            "favorite": false,
            "login": { 
                "username": null, 
                "password": null, 
                "totp" : "otpauth://totp/name?secret=abcd&digits=6&period=30&issuer=someone"
            },
            "collectionIds": null
        },
    ]
}
```

If the `items` list is empty, try again, and ensure Authy is unlocked when you run the script.


## Step 6: Importing into KeepassXC 

Open your KeepassXC database and find an entry you want to add TOTP for.

Right-click the entry → `TOTP` → `Set up TOTP...`, this will open a window asking for a Secret Key.

Now open up the file from [Step 6](#step-6-downloading-authy-export), and in the `item` list find the item you want to get TOTP for. 

Under `login` where it says `totp : otpauth://totp/...`:

- `secret=xxx` holds the Secret Key (`xxx`)
- `digits=y` holds the Code Size (`y`)
- `period=zz` holds the Time Step (`zz`)
- `algorithm=nnn` holds the Algorithm (`nnn`) (this might not be there, default is SHA1)

Once you add your secret key into this window, if the digits / period are not 6 and 30, you may need to use custom settings instead of the default. When you're done hit `OK` and then right-click the entry → `TOTP` → `Show TOTP` to see your code. Ensure this is the same code Authy is showing, if this is not the case, you can try changing the Algorithm under custom settings, or more likely your system clock is not accurate and should be updated.
