# Message Board

MEAN stack message board (forum) application with Auth0 authentication and passwordless login.

## Dependencies

* [node.js](https://nodejs.org) with npm
* [Angular CLI](https://github.com/angular/angular-cli)
* [A free Auth0 account](https://auth0.com/signup)

### Set Up an Auth0 Client App

1. Go to your [**Auth0 Dashboard**](https://manage.auth0.com/#/) and click the "[Create a New Client](https://manage.auth0.com/#/clients/create)" button.
2. Give your new app a **name**, select **Single Page Web Applications**, then click the "Create" button.
3. In the **Settings** for your new Auth0 Client app, add `http://localhost:4200/callback, http://localhost:8085/callback` to the **Allowed Callback URLs**.
4. Add `http://localhost:4200, http://localhost:8085` to the **Allowed Web Origins**.
5. Add `http://localhost:4200, http://localhost:8085` to the **Allowed Origins (CORS)**.
6. Scroll down to the bottom of the **Settings** section and click "Show Advanced Settings". Choose the **OAuth** tab and verify that the **JsonWebToken Signature Algorithm** is set to `RS256`.
7. Click the "Save Changes" button.

### Set Up Auth0 Passwordless Login

1. Go to **Connections** -> [**Passwordless**](https://manage.auth0.com/#/connections/passwordless) and toggle on **Email**.
2. In the Email passwordless settings screen, add `{ "scope": "openid profile" }` to **Authentication Parameters**.
3. Click the "Save" button.
4. Click the **Apps** tab at the top of the window and find your newly-created Client. Toggle the switch **on**.
5. Click the "Save" button.
6. Go to [**Hosted Pages**](https://manage.auth0.com/#/login_page). Toggle on the **Customize Login Page** option. This will enable you to modify the provided template.
7. Using the **Default Templates** dropdown, switch to **Lock (Passwordless)**.
8. Click the "Save" button.

### Set Up an API in Auth0

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

* Start Node API server: `NODE_ENV=dev node server.js` from the root folder.
* Start Angular server: `ng serve` from the root folder.

The API will run on `localhost:8085` and the app will run on `localhost:4200`.

### Staging / Production

* Start Node API and app server: `node server.js` from the root folder.

The app and API will both run on `localhost:8085`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
