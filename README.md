# nuxt-module-newrelic
A Nuxt.js module to easily add NewRelic APM data to your project.

**Note:** By default, this module only gets the Node.js server data, without browser monitoring.

## Pre-requisites

* A [NewRelic](https://newrelic.com) account and license key.

## Setup

1. Add `nuxt-module-newrelic` dependency to your Nuxt.js project
```
npm install drunomics/nuxt-module-newrelic
```

2. Add `nuxt-module-newrelic` to the modules section of nuxt.config.js
```
{
  modules: [
    'nuxt-module-newrelic'
  ]
}
```

3. Add the required variables to your .env:
```
NEW_RELIC_LICENSE_KEY=your_newrelic_license
NEW_RELIC_APP_NAME=Default
```


## License

[MIT License](./LICENSE)

## Credits

Development sponsored by [drunomics](https://drunomics.com) <hello@drunomics.com>
