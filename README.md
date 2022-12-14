# nuxtjs-newrelic
A Nuxt.js module to easily add NewRelic APM data to your project.

**Note:** This module only collects data from the Node.js server. For browser monitoring, you will need to add the Nuxt.js infrastructure agent, [see instructions here](https://docs.newrelic.com/docs/infrastructure/host-integrations/host-integrations-list/nuxt-js-integration/).

## Pre-requisites

* A [NewRelic](https://newrelic.com) account and license key.

## Setup

1. Add `drunomics/nuxtjs-newrelic` dependency to your Nuxt.js project
```
npm install drunomics/nuxtjs-newrelic
```

2. Add `@drunomics/nuxtjs-newrelic` to the modules section of nuxt.config.js
```
{
  modules: [
    '@drunomics/nuxtjs-newrelic'
  ]
}
```

3. Add the required variables to your .env:
```
NEW_RELIC_LICENSE_KEY=your_newrelic_license
NEW_RELIC_APP_NAME=Default
```

To disable config and use only vars:
```
NEW_RELIC_NO_CONFIG_FILE=true
```

## Docs
1. NewRelic Node.js agent documentation:

https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration

2. List of all dotenv variables:

https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#exports_config

## License

[MIT License](./LICENSE)

## Credits

Development sponsored by [drunomics](https://drunomics.com) <hello@drunomics.com>
