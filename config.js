module.exports = {
  "dryRun": "full",
  "enabledManagers": ["composer"],
  "hostRules": [
    {
      "matchHost": "repo.magento.com",
      "username": "63f90d33ea8cfb46d0b4d284ba3cc812",
      "password": "3677bfd3151e08679361baa4a6bed4f7"
    }
  ],
  "platform": "github",
  "token": "*******",
  "rangeStrategy": "pin",
  "repositories": [{
    "repository": "adamj88/renovate-issue-20201"
  }]
}
