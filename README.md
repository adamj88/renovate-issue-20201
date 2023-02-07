Original Issue: https://github.com/renovatebot/renovate/issues/20201

## Prerequistites

- PHP / Composer installed
- NodeJS

## Installation

```
npm install
```

Modify config.js to add your GitHub token.

## Steps to Replicate

Running `composer install` correctly installs `facebook/facebook-for-magento2` 1.4.6.

```
$ composer install
No composer.lock file present. Updating dependencies to latest instead of installing from lock file. See https://getcomposer.org/install for more information.
Loading composer repositories with package information
Info from https://repo.packagist.org: #StandWithUkraine
Updating dependencies
Lock file operations: 10 installs, 0 updates, 0 removals
  - Locking facebook/facebook-for-magento2 (1.4.6)
  - Locking facebook/php-business-sdk (16.0.0)
  - Locking guzzlehttp/guzzle (7.5.0)
  - Locking guzzlehttp/promises (1.5.2)
  - Locking guzzlehttp/psr7 (2.4.3)
  - Locking psr/http-client (1.0.1)
  - Locking psr/http-factory (1.0.1)
  - Locking psr/http-message (1.0.1)
  - Locking ralouphie/getallheaders (3.0.3)
  - Locking symfony/deprecation-contracts (v3.2.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 10 installs, 0 updates, 0 removals
  - Downloading psr/http-message (1.0.1)
  - Downloading psr/http-client (1.0.1)
  - Downloading ralouphie/getallheaders (3.0.3)
  - Downloading psr/http-factory (1.0.1)
  - Downloading guzzlehttp/psr7 (2.4.3)
  - Downloading guzzlehttp/promises (1.5.2)
  - Downloading guzzlehttp/guzzle (7.5.0)
  - Downloading facebook/php-business-sdk (16.0.0)
  - Downloading facebook/facebook-for-magento2 (1.4.6)
  - Installing symfony/deprecation-contracts (v3.2.0): Extracting archive
  - Installing psr/http-message (1.0.1): Extracting archive
  - Installing psr/http-client (1.0.1): Extracting archive
  - Installing ralouphie/getallheaders (3.0.3): Extracting archive
  - Installing psr/http-factory (1.0.1): Extracting archive
  - Installing guzzlehttp/psr7 (2.4.3): Extracting archive
  - Installing guzzlehttp/promises (1.5.2): Extracting archive
  - Installing guzzlehttp/guzzle (7.5.0): Extracting archive
  - Installing facebook/php-business-sdk (16.0.0): Extracting archive
  - Installing facebook/facebook-for-magento2 (1.4.6): Extracting archive
2 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating autoload files
4 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
```

Whilst running with `LOG_LEVEL=debug node_modules/.bin/renovate` yields v1.4.4 of the module:

```
DEBUG: packageFiles with updates (repository=adamj88/renovate-issue-20201, baseBranch=master)
       "config": {
         "composer": [
           {
             "packageFile": "composer.json",
             "deps": [
               {
                 "depType": "require",
                 "depName": "facebook/facebook-for-magento2",
                 "currentValue": "^1.4.0",
                 "datasource": "packagist",
                 "registryUrls": [
                   "https://**redacted**@repo.magento.com/",
                   "https://packagist.org"
                 ],
                 "depIndex": 0,
                 "updates": [
                   {
                     "updateType": "pin",
                     "isPin": true,
                     "newValue": "1.4.4",
                     "newVersion": "1.4.4",
                     "newMajor": 1,
                     "branchName": "renovate/pin-dependencies"
                   }
                 ],
                 "warnings": [],
                 "versioning": "composer",
                 "registryUrl": "https://**redacted**@repo.magento.com",
                 "currentVersion": "1.4.4"
               }
             ],
             "managerData": {"composerJsonType": "project"}
           }
         ]
       }
```
