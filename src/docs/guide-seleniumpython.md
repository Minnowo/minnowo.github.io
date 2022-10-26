# Selenium Python

A guide on setting up and using [Selenium](https://github.com/SeleniumHQ/selenium) with Chromium from python.

To begin, make sure you have [python](https://www.python.org/) installed and added to path.

You can check your version with `python --version`, I'm using 3.9.12.



## Installing Selenium For Python

See the selenium [docs for python](https://www.selenium.dev/selenium/docs/api/py/) on how to install the python package.

In a terminal, if you have pip installed run:
```
pip install -U selenium
```

Alternatively you can download the package from [PYPI](https://pypi.org/project/selenium/#files) (selenium-x.x.x.tar.gz), unarchive it and run:
```
python setup.py install
```



## Drivers For Selenium

You need to download a driver for the browser you want to interface with, you can find drivers for each browser here:

- [Chrome](https://chromedriver.chromium.org/downloads)
- [Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
- [Firefox](https://github.com/mozilla/geckodriver/releases)
- [Safari](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)

Since I'm going to be using Chromeium, I will also download a new copy of that, you can find downloads [here](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html).

Specifically I'm using [chromium-browser-snapshots/Win_x64/1000027/](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1000027/), this also comes with the Chrome Driver for each snapshot version of chrome which is very convenient.

I recommend using a portable copy of the browser you choose, this allows you to take it with the application and prevents updates of system browsers from breaking your web driver. (One of my reasons for Chromium is that I couldn't find Firefox with a zip installer)



## Setting Up Python 

Once you have your browser, driver and selenium instaslled you can start using it from python.

```py
from selenium import webdriver

CHROME_DRIVER = 'path to your web driver'
CHROME_PATH   = 'path to your browser'

options = webdriver.ChromeOptions()
options.binary_location = CHROME_PATH
# options.headless = True # this will hide the window but might break stuff 

driver = webdriver.Chrome(CHROME_DRIVER, options=options) # start the browser 

driver.get('insert direct url here') # open a link

driver.quit() # shutdown the browser, should always be called at the end 

```

Once you have this working you're basically setup to do whatever you want.



## Using Extensions 

You might want to run your browser with certain extensions installed, the best way to do this is by using .crx files for your extension.

You can use them by adding `options.add_extension('extension.crx file path here')` to the code [above](#setting-up-python).

It might be hard to find the .crx files for some extensions.

My solution to this using Chromium was to install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm). When using Chromium it will download a .crx file to the following path `C:\Users\*you*\AppData\Local\Chromium\User Data\Webstore Downloads\`, this will promptly be deleted as soon as It's done.

To prevent this file from being deleted, I made this little script to open the file:
```py
import os 
import time 

webdls = "C:\\Users\\*you*\\AppData\\Local\\Chromium\\User Data\\Webstore Downloads"

while True:

    files = os.listdir(webdls)

    if files:

        with open(os.path.join(webdls, files[0]), "rb") as f:

            while True:

                time.sleep(1)

                print("ctrl+c to exit, file should be locked from deletion")
```

The goal of this script is to prevent the browser from deleting the .crx file by opening it for reading, in the case of uBlock Origin, this was worked just fine, and I was able to use the extension as mentioned above.
