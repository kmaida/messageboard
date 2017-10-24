# Message Board

MEAN stack message board (forum) application with Auth0 authentication and passwordless login.

## Dependencies

* [node.js](https://nodejs.org) with npm
* [Angular CLI](https://github.com/angular/angular-cli)
* Auth0 account (see below)

### Sign Up for Auth0

You'll need an [Auth0](https://auth0.com) account to manage authentication. You can sign up for a [free account here](https://auth0.com/signup). Next, set up an Auth0 Client app and API so Auth0 can interface with an Angular app and Node API.

### Set Up a Client App

1. Go to your [**Auth0 Dashboard**](https://manage.auth0.com/#/) and click the "[Create a New Client](https://manage.auth0.com/#/clients/create)" button.
2. Name your new app and select "Single Page Web Applications".
3. In the **Settings** for your new Auth0 Client app, add `http://localhost:4200/callback, http://localhost:8085/callback` to the **Allowed Callback URLs**.
4. Add `http://localhost:4200, http://localhost:8085` to the **Allowed Web Origins**.
5. Scroll down to the bottom of the **Settings** section and click "Show Advanced Settings". Choose the **OAuth** tab and verify that the **JsonWebToken Signature Algorithm** is set to `RS256`.
6. If you'd like, you can [set up some social connections](https://manage.auth0.com/#/connections/social). You can then enable them for your app in the **Client** options under the **Connections** tab. The example shown in the screenshot above utilizes username/password database, Facebook, Google, and Twitter. For production, make sure you set up your own social keys and do not leave social connections set to use Auth0 dev keys.

### Set Up an API

Go to [**APIs**](https://manage.auth0.com/#/apis) in your Auth0 Dashboard and click on the "Create API" button. Enter a name for the API. Set the **Identifier** to `http://localhost:8085/api/`. The **Signing Algorithm** should be `RS256`.

## Installation

Clone this project and from the root, run the following commands to install dependencies for the server and client-side:

```
$ npm install
$ cd server
$ npm install
```

1. Open `server/config.js.sample`, replace `[AUTH0_DOMAIN]` with your Auth0 domain, and remove `.sample` from the file name.
2. Open `src/app/auth/auth0-variables.ts.sample` and replace `[AUTH0_CLIENT]` and `[AUTH0_DOMAIN]` with your Auth0 Client ID and domain. Then remove `.sample` from the file name.

## Serving the project

### Development

* Node server: `NODE_ENV=dev node server.js` from the root folder.
* Angular: `ng serve` from the root folder.

The API will run on `localhost:8085` and the app will run on `localhost:4200`.

### Staging / Production

* Node server: `node server.js` from the root folder.

The app and API will both run on `localhost:8085`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
