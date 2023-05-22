---
layout: post
title: GPG Expirey Security
date:   2015-01-15 00:00
description: A backup of answer for https://security.stackexchange.com/questions/14718/does-openpgp-key-expiration-add-to-security/79386#79386 
toc: true
hidden: true 
---

<br>

A backup of answer for [https://security.stackexchange.com/questions/14718/does-openpgp-key-expiration-add-to-security/79386#79386](https://security.stackexchange.com/questions/14718/does-openpgp-key-expiration-add-to-security/79386#79386) 

<br>

**tl;dr**: the expiry date is no reasonable mechanism to protect the primary key, and you should have a revocation certificate at hand.

---

The slightly longer version is, that the effect of the expiration date differs between primary and subkeys, and also what you aim to prevent.

<br>

## Subkeys

For subkeys, the effect is rather simple: after a given time frame, the subkey will expire. This expiry date can only be changed using the primary key. If an attacker gets hold of your subkey (and only this), it will automatically be inactivated after the expiry date.

The expiry date of a subkey is a great tool to announce you switch your subkeys on a regular base, and that it's time for others to update your key after a given time.

<br>

## Primary Keys

For primary keys, the situation is different. If you have access to the private key, [you can change the expiry date as you wish](https://web.archive.org/web/20160513134159/http://madduck.net/blog/2006.06.20:expiring-gpg/). This means, if an attacker gets access to your private key, he can extend the validity period arbitrarily. Worst case, you lose access to the private key at the same time, then even you cannot revoke the public key any more (you do have a printed or otherwise offline and safely stored revocation certificate, do you?). An expiry date might help in the case you just lose control over the key (while no attacker has control over it). The key will automatically expire after a given time, so there wouldn't be an unusable key with your name on it sitting forever on the key servers.

<br>

## Recovering Weak Unrevoked Keys

Even worse, expiry dates might provide a false sense of security. The key on the key servers expired, so why bother to revoke it? There is a large number of well-connected RSA 512 bit keys on the key server network, and probably a comparabily large number of weak DSA keys (because of the Debian RNG problems). With faster processors and possibly new knowledge on algorithm weaknesses, an attacker might in future be able to crack the expired, but non-revoked key and use it!

<br>

## Keeping a Revocation Certificate Safe Instead

If you've got a revocation certificate and are sure you never might lose access to both your private key and revocation certificate at the same time (consider fire, (physical) theft, official institutions searching your house), there is absolutely no use in setting an expiry date apart from possible confusion and more work extending it.
