# Message Board

MEAN stack message board (forum) application with Auth0 authentication and passwordless login.

## Dependencies

* [node.js](https://nodejs.org) with npm
* [Angular CLI](https://github.com/angular/angular-cli)

## Installation

Clone this project and from the root, run the following commands to install dependencies for the server and client-side:

```
$ npm install
$ cd server
$ npm install
```

1. Open `server/config.js.sample`, replace `[AUTH0_DOMAIN]` with your Auth0 domain, and remove `.sample` from the file name.
2. Open `src/app/auth/auth0-variables.ts.sample` and replace `[AUTH0_CLIENT]` and `[AUTH0_DOMAIN]` with your Auth0 client ID and domain. Then remove `.sample` from the file name.

## Serving the project

### Development

* Node server: `NODE_ENV=dev node server.js` from the root folder.
* Angular: `ng serve` from the root folder.

API then runs on `localhost:8085` and app runs on `localhost:4200`.

### Staging / Production

* Node server: `node server.js` from the root folder.

App and API both run on `localhost:8085`.

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
