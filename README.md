# nuxt-module-newrelic
A Nuxt.js module to easily add NewRelic APM data to your project.

**Note:** By default, this module only gets the Node.js server data, without browser monitoring.

## Pre-requisites

* A [NewRelic](https://newrelic.com) account and license key.

## Setup

1. Add `nuxt-module-newrelic` dependency to your Nuxt.js project
```
npm install git+ssh://git@github.com/drunomics/nuxt-module-newrelic.git
```

2. Add `nuxt-module-newrelic` to the modules section of nuxt.config.js
```
{
  buildModules: [
    'nuxt-module-newrelic'
  ]
}
```
3. Move `config/newrelic.js` to your base directory from `node_modules/nuxt-module-newrelic/config/newrelic.js`

4. Add the required variables to your .env:
```
NEWRELIC_LICENSE=your_newrelic_license
NEWRELIC_APP_NAME=application_name
NEWRELIC_BROWSER_MONITORING_ENABLED=false
NEWRELIC_ENABLED=true
```

## Options

You can change the directory for your `newrelic.js` config with:
```
NEW_RELIC_HOME=path_to_newrelic.js
```

## License

[MIT License](./LICENSE)

## Credits

Development sponsored by [drunomics](https://drunomics.com) <hello@drunomics.com>
