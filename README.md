# Yuan Hidroponik API
Yuan Hidroponik API is a Node.JS backend for serving React Native based mobile application and interacting with ESP32 by MQTT and Thinger.io

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install Yuan Hidroponik API
```bash
yarn install
```

## Setup
Ensure having Thinger.io account registered first and have ESP32 connected to it

Go to API tab of the device and copy the POST method of Solid State Relay Pin to THINGER_SSR_URL on .env

![api device](https://discoursefiles.s3.dualstack.eu-west-1.amazonaws.com/optimized/2X/8/803550ec7287431dc3cd48aeef25730b2b61b7ff_2_587x500.png)

Add new token and make sure it never expires

![add new token](/docs/token-1.png)

![never expires](/docs/token-2.png)

Copy the token to THINGER_BEARER on .env

![device token](/docs/token-3.png)

Change the database credential to match the system. Normally phpMyAdmin will use "root" without password

Make the database of "yuan_database" first. Migrate the database
```bash
npx sequelize-cli db:migrate
```

Set MQTT_HOST to the desireable MQTT Broker such as [EMQX](https://www.emqx.io/) or [Mosquitto](https://test.mosquitto.org/). By default this API uses Mosquitto Test Broker.

Set MQTT_TOPIC_RECORD and MQTT_TOPIC_ACTION to match with the topic on ESP32. Use longer name to ensure uniqueness

Ensure having [Ngrok](https://ngrok.com/) installed. Having a registered account is recommended. Follow the guide to add the auth token.

Serve the application at port 5000
```bash
ngrok http 5000
```

Visit the page first and click the "Visit Site" button to allow future access to the API.

Copy the forwarding link to the mobile application

![ngrok link](/docs/ngrok.png)

Go to Endpoint menu at Thinger.io. Add new endpoint and copy the forwarding link to Request URL.

![endpoint thinger](/docs/endpoint-1.png)

Change the mode from "mqtt" or "thinger" by setting at MODE. Using "mqtt" will send the command to ESP32 using MQTT. Otherwise, the command will be sent via Thinger_SSR_URL 


