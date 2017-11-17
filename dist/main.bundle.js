webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tag_form_tag_form_component__ = __webpack_require__("../../../../../src/app/pages/tag-form/tag-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_topic_tag_topic_tag_component__ = __webpack_require__("../../../../../src/app/pages/topic-tag/topic-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_form_topic_form_component__ = __webpack_require__("../../../../../src/app/pages/topic-form/topic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_forum_forum_component__ = __webpack_require__("../../../../../src/app/pages/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_topic_topic_component__ = __webpack_require__("../../../../../src/app/pages/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_callback_callback_component__ = __webpack_require__("../../../../../src/app/pages/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_callback_callback_component__["a" /* CallbackComponent */]
    },
    {
        path: 'forum/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_forum_forum_component__["a" /* ForumComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'forum/:id/topic/new',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_form_topic_form_component__["a" /* TopicFormComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'topic/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_topic_topic_component__["a" /* TopicComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'topic/:id/edit',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_form_topic_form_component__["a" /* TopicFormComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'topics/tag/:slug',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_topic_tag_topic_tag_component__["a" /* TopicTagComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: 'tag/new',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_tag_form_tag_form_component__["a" /* TagFormComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_guard__["a" /* AuthGuard */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuth();
        auth.scheduleRenewal();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_filter_sort_service__ = __webpack_require__("../../../../../src/app/core/filter-sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_callback_callback_component__ = __webpack_require__("../../../../../src/app/pages/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_topic_topic_component__ = __webpack_require__("../../../../../src/app/pages/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forum_forum_component__ = __webpack_require__("../../../../../src/app/pages/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_forums_list_forums_list_component__ = __webpack_require__("../../../../../src/app/pages/home/forums-list/forums-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_topic_post_form_post_form_component__ = __webpack_require__("../../../../../src/app/pages/topic/post-form/post-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_topic_posts_list_posts_list_component__ = __webpack_require__("../../../../../src/app/pages/topic/posts-list/posts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_loading_component__ = __webpack_require__("../../../../../src/app/core/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_error_component__ = __webpack_require__("../../../../../src/app/core/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_topics_list_topics_list_component__ = __webpack_require__("../../../../../src/app/core/topics-list/topics-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_forum_form_forum_form_component__ = __webpack_require__("../../../../../src/app/pages/home/forum-form/forum-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_topic_form_topic_form_component__ = __webpack_require__("../../../../../src/app/pages/topic-form/topic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__core_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/core/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_topic_tag_topic_tag_component__ = __webpack_require__("../../../../../src/app/pages/topic-tag/topic-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__core_tags_tags_component__ = __webpack_require__("../../../../../src/app/core/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tag_form_tag_form_component__ = __webpack_require__("../../../../../src/app/pages/tag-form/tag-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_13__core_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_topic_topic_component__["a" /* TopicComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forum_forum_component__["a" /* ForumComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_forums_list_forums_list_component__["a" /* ForumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_topic_post_form_post_form_component__["a" /* PostFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_topic_posts_list_posts_list_component__["a" /* PostsListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__core_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__core_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__core_topics_list_topics_list_component__["a" /* TopicsListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_forum_form_forum_form_component__["a" /* ForumFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_topic_form_topic_form_component__["a" /* TopicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_24__core_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_topic_tag_topic_tag_component__["a" /* TopicTagComponent */],
                __WEBPACK_IMPORTED_MODULE_26__core_tags_tags_component__["a" /* TagsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tag_form_tag_form_component__["a" /* TagFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_1__core_filter_sort_service__["a" /* FilterSortService */],
                __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_env_config__ = __webpack_require__("../../../../../src/app/core/env.config.ts");

var AUTH_CONFIG = {
    CLIENT_ID: '5bLKVAWoUTkCxFJIsDlN0PlLfxPR05CM',
    CLIENT_DOMAIN: 'kmaida-pwdless.auth0.com',
    AUDIENCE: 'http://localhost:8085/api/',
    REDIRECT: __WEBPACK_IMPORTED_MODULE_0__core_env_config__["a" /* ENV */].BASE_URI + "/callback",
    SCOPE: 'openid profile'
};


/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.tokenValid) {
            return true;
        }
        else {
            // Send guarded route to redirect to after logging in
            this.auth.login(state.url);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_config__ = __webpack_require__("../../../../../src/app/auth/auth.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this._auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].SCOPE
        });
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.loggedIn);
        this.authStatePending = false;
        // If authenticated, set local profile property,
        // update login status, schedule renewal.
        // If not authenticated but there are still items
        // in localStorage, log out.
        var lsProfile = localStorage.getItem('profile');
        if (this.tokenValid) {
            this.userProfile = JSON.parse(lsProfile);
            this.setLoggedIn(true);
            this.scheduleRenewal();
        }
        else if (!this.tokenValid && lsProfile) {
            this.logout();
        }
    }
    AuthService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthService.prototype.login = function (redirect) {
        // Set redirect after login
        var _redirect = redirect ? redirect : this.router.url;
        localStorage.setItem('authRedirect', _redirect);
        // Auth0 authorize request calls the centralized login page
        // User should then be prompted for their email and be
        // sent a passwordless code to enter in the login page
        this._auth0.authorize();
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        this.authStatePending = window.location.hash ? true : false;
        // When user enters code at centralized login page, they
        // are redirected back to app; this method is called by
        // the root app component on load to parse the hash that
        // is returned from Auth0 centralized login.
        // When Auth0 hash parsed, execute _getProfile()
        this._auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                _this._clearRedirect();
                _this.router.navigate(['/']);
                console.error("Error authenticating: " + err.error);
                _this.authStatePending = false;
                _this.authError = {
                    message: 'There was an error authenticating. Please try again.'
                };
            }
        });
    };
    AuthService.prototype._getProfile = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this._auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
                _this._redirect();
            }
            else if (err) {
                console.warn("Error retrieving profile: " + err.error);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        // Set tokens and expiration in localStorage
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.authError = undefined;
        // If initial login, set profile
        if (profile) {
            localStorage.setItem('profile', JSON.stringify(profile));
            this.userProfile = profile;
        }
        // Update login status in loggedIn$ stream
        this.setLoggedIn(true);
        this.authStatePending = false;
        // Schedule access token renewal
        this.scheduleRenewal();
    };
    AuthService.prototype._redirect = function () {
        var redirect = localStorage.getItem('authRedirect');
        if (redirect && redirect.indexOf('#') > -1) {
            var redirectArr = redirect.split('#');
            var url = redirectArr[0];
            var fragment = redirectArr[1];
            this.router.navigate([url], { fragment: fragment });
        }
        else {
            this.router.navigate([redirect || '/']);
        }
    };
    AuthService.prototype._clearRedirect = function () {
        // Remove redirect from localStorage
        localStorage.removeItem('authRedirect');
    };
    AuthService.prototype.logout = function (noRedirect) {
        // Ensure all auth items removed from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_at');
        this._clearRedirect();
        // Reset local properties, update loggedIn$ stream
        this.userProfile = undefined;
        this.setLoggedIn(false);
        this.authStatePending = false;
        // Unschedule access token renewal
        this.unscheduleRenewal();
        // Return to homepage
        if (noRedirect !== true) {
            this.router.navigate(['/']);
        }
    };
    Object.defineProperty(AuthService.prototype, "tokenValid", {
        get: function () {
            // Check if current time is past access token's expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.renewToken = function () {
        var _this = this;
        // Acquire new tokens silently in an iFrame, causing no
        // disruption to the user's experience
        this._auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken) {
                _this._setSession(authResult);
            }
            else if (err) {
                console.warn("Could not renew token: " + err.errorDescription);
                // Log out without redirecting to clear auth data
                _this.logout(true);
                // Log in again
                _this.login();
            }
        });
    };
    AuthService.prototype.scheduleRenewal = function () {
        var _this = this;
        // If user isn't authenticated, do nothing
        if (!this.tokenValid) {
            return;
        }
        // Unsubscribe from previous expiration observable
        this.unscheduleRenewal();
        // Create and subscribe to expiration observable
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        var expiresIn$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].of(expiresAt).flatMap(function (expires) {
            var now = Date.now();
            // Use timer to track delay until expiration
            // to run the refresh at the proper time
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].timer(Math.max(1, expires - now));
        });
        // Subscribe to expiresIn$ observable and renew token
        this.refreshSub = expiresIn$.subscribe(function () {
            _this.renewToken();
            _this.scheduleRenewal();
        });
    };
    AuthService.prototype.unscheduleRenewal = function () {
        if (this.refreshSub) {
            this.refreshSub.unsubscribe();
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__env_config__ = __webpack_require__("../../../../../src/app/core/env.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    Object.defineProperty(ApiService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + localStorage.getItem('access_token');
        },
        enumerable: true,
        configurable: true
    });
    // GET list of forums
    ApiService.prototype.getForums$ = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "forums", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET forum by ID
    ApiService.prototype.getForumById$ = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "forum/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET list of topics by forum ID
    ApiService.prototype.getTopicsByForumId$ = function (forumId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topics/" + forumId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET list of topics by tag slug
    ApiService.prototype.getTopicsByTag$ = function (slug) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topics/tag/" + slug, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET topic by ID
    ApiService.prototype.getTopicById$ = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topic/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET list of tags
    ApiService.prototype.getTags$ = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "tags", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET tag by slug
    ApiService.prototype.getTagBySlug$ = function (slug) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "tag/" + slug, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // GET all posts in a topic by topic ID
    ApiService.prototype.getPostsByTopic$ = function (topicId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "posts/" + topicId, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // POST new forum
    ApiService.prototype.postForum$ = function (forum) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "forum", forum, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // POST new topic
    ApiService.prototype.postTopic$ = function (topic) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topic", topic, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // POST new tag
    ApiService.prototype.submitTag$ = function (tag) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "tag", tag, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // PUT existing forum
    ApiService.prototype.editForum$ = function (id, forum) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "forum/" + id, forum, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // PUT existing topic
    ApiService.prototype.editTopic$ = function (id, topic) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topic/" + id, topic, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // POST new post
    ApiService.prototype.submitPost$ = function (post) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "post/", post, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // PUT existing post
    ApiService.prototype.editPost$ = function (id, post) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "post/" + id, post, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // DELETE existing post
    ApiService.prototype.deletePost$ = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "post/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // DELETE existing topic and all posts
    ApiService.prototype.deleteTopic$ = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "topic/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // DELETE tag
    ApiService.prototype.deleteTag$ = function (slug) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_5__env_config__["a" /* ENV */].BASE_API + "tag/" + slug, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ApiService.prototype._handleError = function (err) {
        var error = {
            status: err.status,
            statusText: err.statusText,
            message: err.error || err.message || 'Unable to complete request.'
        };
        var _errMsg = error.message.toLowerCase();
        if (_errMsg && (_errMsg.indexOf('no jwt present') > -1 ||
            _errMsg.indexOf('jwt expired') > -1 ||
            _errMsg.indexOf('unauthorizederror') > -1)) {
            this.auth.logout(true);
            this.auth.login();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/core/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"breadcrumbs\">\n  <ul>\n    <li class=\"crumb-home\">\n      <a routerLink=\"/\">All Forums</a>\n    </li>\n    <li class=\"crumb-forum\" *ngIf=\"forum\">\n      <a [routerLink]=\"['/forum', forum._id]\">{{forum.title}}</a>\n    </li>\n    <li class=\"crumb-edit-topic\" *ngIf=\"topic\">\n      <a [routerLink]=\"['/topic', topic._id]\">{{topic.title}} (original)</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/breadcrumbs/breadcrumbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nul {\n  list-style: none;\n  padding-left: 0; }\n\nli {\n  display: inline-block;\n  font-size: 13px; }\n  li:after {\n    content: '\\203A'; }\n  li:last-child:after {\n    content: none; }\n\na {\n  color: rgba(0, 0, 0, 0.7); }\n  a:hover {\n    color: black;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_forum_model__ = __webpack_require__("../../../../../src/app/core/models/forum.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_topic_model__ = __webpack_require__("../../../../../src/app/core/models/topic.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(api) {
        this.api = api;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        if (this.forumId) {
            this._getForum();
        }
    };
    BreadcrumbsComponent.prototype._getForum = function () {
        var _this = this;
        this.forumSub = this.api.getForumById$(this.forumId).subscribe(function (data) { return _this.forum = data; });
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        if (this.forumSub) {
            this.forumSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_forum_model__["a" /* ForumModel */])
    ], BreadcrumbsComponent.prototype, "forum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BreadcrumbsComponent.prototype, "forumId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_topic_model__["a" /* TopicModel */])
    ], BreadcrumbsComponent.prototype, "topic", void 0);
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__("../../../../../src/app/core/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/breadcrumbs/breadcrumbs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/env.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var _isDev = window.location.port.indexOf('4200') > -1;
var getHost = function () {
    var protocol = window.location.protocol;
    var host = window.location.host;
    return protocol + "//" + host;
};
var serverURI = _isDev ? "http://localhost:8085" : getHost();
var apiURI = _isDev ? serverURI + "/api/" : "/api/";
var ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI,
    BASE_SERVER_URI: serverURI
};


/***/ }),

/***/ "../../../../../src/app/core/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ErrorComponent.prototype, "error", void 0);
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: "\n    <div class=\"alert alert-danger\">\n      <ng-template [ngIf]=\"!error\">\n        <strong>Oops!</strong> There was a problem sending or retrieving data. Please try again.\n      </ng-template>\n      <ng-template [ngIf]=\"error\">\n        <strong>Oops!</strong> {{error.message}}\n        <br><small><strong>Status Code:</strong> <em>{{error.status}} {{error.statusText}}</em></small>\n      </ng-template>\n    </div>\n  ",
            styles: ["\n    .alert {\n      font-size: 14px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/filter-sort.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSortService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterSortService = (function () {
    function FilterSortService(datePipe) {
        this.datePipe = datePipe;
    }
    FilterSortService.prototype._objArrayCheck = function (array) {
        // Checks if the first item in the array is an object
        // (assumes same-shape for all array items)
        // Necessary because some arrays passed in may have
        // models that don't match {[key: string]: any}[]
        // This check prevents uncaught reference errors
        var item0 = array[0];
        var check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === '[object Object]');
        return check;
    };
    FilterSortService.prototype.filter = function (array, property, value) {
        // Return only items with specific key/value pair
        if (!property || value === undefined || !this._objArrayCheck(array)) {
            return array;
        }
        var filteredArray = array.filter(function (item) {
            for (var key in item) {
                if (item.hasOwnProperty(key)) {
                    if (key === property && item[key] === value) {
                        return true;
                    }
                }
            }
        });
        return filteredArray;
    };
    FilterSortService.prototype.search = function (array, query, excludeProps, dateFormat) {
        var _this = this;
        // Match query to strings and Date objects / ISO UTC strings
        // Optionally exclude properties from being searched
        // If matching dates, can optionally pass in date format string
        if (!query || !this._objArrayCheck(array)) {
            return array;
        }
        var lQuery = query.toLowerCase();
        var isoDateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/; // ISO UTC
        var dateF = dateFormat ? dateFormat : 'medium';
        var filteredArray = array.filter(function (item) {
            for (var key in item) {
                if (item.hasOwnProperty(key)) {
                    if (!excludeProps || excludeProps.indexOf(key) === -1) {
                        var thisVal = item[key];
                        if (
                        // Value is a string and NOT a UTC date
                        typeof thisVal === 'string' &&
                            !thisVal.match(isoDateRegex) &&
                            thisVal.toLowerCase().indexOf(lQuery) !== -1) {
                            return true;
                        }
                        else if (
                        // Value is a Date object or UTC string
                        (thisVal instanceof Date || thisVal.toString().match(isoDateRegex)) &&
                            // https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html
                            // Matching date format string passed in as param (or default to 'medium')
                            _this.datePipe.transform(thisVal, dateF).toLowerCase().indexOf(lQuery) !== -1) {
                            return true;
                        }
                    }
                }
            }
        });
        return filteredArray;
    };
    FilterSortService.prototype.orderBy = function (array, prop, reverse) {
        // Order an array of objects by a property
        // Supports string, number, and boolean values
        if (!prop || !this._objArrayCheck(array)) {
            return array;
        }
        var propType = typeof array[0][prop];
        var sortedArray;
        if (propType === 'string') {
            // Default: ascending (A->Z)
            sortedArray = array.sort(function (a, b) {
                var itemA = a[prop].toLowerCase();
                var itemB = b[prop].toLowerCase();
                if (!reverse) {
                    if (itemA < itemB) {
                        return -1;
                    }
                    if (itemA > itemB) {
                        return 1;
                    }
                    return 0;
                }
                else {
                    if (itemA > itemB) {
                        return -1;
                    }
                    if (itemA < itemB) {
                        return 1;
                    }
                    return 0;
                }
            });
        }
        else if (propType === 'number') {
            // Default: ascending (0->9)
            sortedArray = array.sort(function (a, b) {
                var itemA = a[prop];
                var itemB = b[prop];
                return !reverse ? itemA - itemB : itemB - itemA;
            });
        }
        else if (propType === 'boolean') {
            // Default: descending (true->false)
            sortedArray = array.sort(function (a, b) {
                var itemA = a[prop];
                var itemB = b[prop];
                return !reverse ? itemB - itemA : itemA - itemB;
            });
        }
        else {
            sortedArray = array;
        }
        return sortedArray;
    };
    FilterSortService.prototype.orderByDate = function (array, prop, reverse) {
        // Order an array of objects by a date property
        // Default: ascending (1992->2017 | Jan->Dec)
        if (!prop || !this._objArrayCheck(array)) {
            return array;
        }
        var sortedArray = array.sort(function (a, b) {
            var dateA = new Date(a[prop]).getTime();
            var dateB = new Date(b[prop]).getTime();
            return !reverse ? dateA - dateB : dateB - dateA;
        });
        return sortedArray;
    };
    FilterSortService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]])
    ], FilterSortService);
    return FilterSortService;
}());



/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header p-1 mb-3 clearfix\">\n  <div class=\"header-auth float-right\">\n    <button\n      *ngIf=\"!auth.loggedIn && !auth.authStatePending\"\n      class=\"btn btn-sm btn-success\"\n      (click)=\"auth.login()\">Log In</button>\n\n    <span *ngIf=\"auth.loggedIn\">\n      <img class=\"profileImg\" [src]=\"auth.userProfile?.picture\">\n      {{auth.userProfile?.name}}\n      <button\n        class=\"btn btn-sm btn-danger\"\n        (click)=\"auth.logout()\">Log Out</button>\n    </span>\n  </div>\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 12px; }\n  .header-title {\n    font-size: 16px;\n    line-height: 28px; }\n  .header .btn {\n    font-size: 12px;\n    margin-left: 2px; }\n\n.profileImg {\n  border-radius: 100px;\n  display: inline-block;\n  height: 28px;\n  margin-right: 2px;\n  width: 28px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        this.pClass = '';
    }
    LoadingComponent.prototype.ngOnInit = function () {
        if (this.paddingClass) {
            this.pClass = this.paddingClass;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "fillSpace", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "paddingClass", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: "\n    <div class=\"loading-container {{pClass}}\" [ngClass]=\"{'lg': size === 'large', 'sm': size === 'small', 'w-100 text-center': fillSpace}\">\n      <img src=\"/assets/images/loading.svg\" class=\"loading-img\">\n    </div>\n  ",
            styles: ["\n    .loading-container.lg {\n      padding: 15px;\n      text-align: center;\n    }\n    .loading-container.sm {\n      display: inline-block;\n    }\n    img {\n      display: inline-block;\n    }\n    .loading-container.sm img {\n      height: 30px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/forum.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumModel; });
var ForumModel = (function () {
    function ForumModel(title, _id // _id is present if editing or returning from DB
    ) {
        this.title = title;
        this._id = _id; // _id is present if editing or returning from DB
    }
    return ForumModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModel; });
var PostModel = (function () {
    function PostModel(topic_id, author, post_text, datetime, // datetime is added by the server
        _id // _id is present if editing or returning from DB
    ) {
        this.topic_id = topic_id;
        this.author = author;
        this.post_text = post_text;
        this.datetime = datetime;
        this._id = _id; // _id is present if editing or returning from DB
    }
    return PostModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/tag.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagModel; });
var TagModel = (function () {
    function TagModel(tag, slug, _id // _id is present if editing or returning from DB
    ) {
        this.tag = tag;
        this.slug = slug;
        this._id = _id; // _id is present if editing or returning from DB
    }
    return TagModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/topic.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicModel; });
var TopicModel = (function () {
    function TopicModel(title, forum_id, sticky, tags, _id // _id is present if editing or returning from DB
    ) {
        this.title = title;
        this.forum_id = forum_id;
        this.sticky = sticky;
        this.tags = tags;
        this._id = _id; // _id is present if editing or returning from DB
    }
    return TopicModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<section\n  id=\"topic-tags\"\n  class=\"tags-container mb-3\">\n  <strong>Tags:</strong>\n  <app-loading *ngIf=\"!tags\" size=\"small\"></app-loading>\n  <ng-template [ngIf]=\"tags?.length\">\n    <span *ngFor=\"let tag of fs.orderBy(tags, 'tag'); last as last\"><a [routerLink]=\"['/topics', 'tag', tag.slug]\">{{tag.tag}}</a>{{tagSeparator(last)}}</span>\n  </ng-template>\n  <em *ngIf=\"tags && !tags.length\">(none)</em>\n  <a *ngIf=\"showNew\" class=\"btn btn-mini btn-primary\" routerLink=\"/tag/new\">New Tag</a>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/core/tags/tags.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tags-container {\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_sort_service__ = __webpack_require__("../../../../../src/app/core/filter-sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsComponent = (function () {
    function TagsComponent(api, fs) {
        this.api = api;
        this.fs = fs;
    }
    TagsComponent.prototype.ngOnInit = function () {
        if (!this.tags) {
            this._getAllTags();
        }
    };
    TagsComponent.prototype._getAllTags = function () {
        var _this = this;
        this.tagsSub = this.api.getTags$().subscribe(function (data) { return _this.tags = data; });
    };
    TagsComponent.prototype.tagSeparator = function (isLast) {
        return isLast ? '' : ', ';
    };
    TagsComponent.prototype.ngOnDestroy = function () {
        if (this.tagsSub) {
            this.tagsSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TagsComponent.prototype, "tags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TagsComponent.prototype, "showNew", void 0);
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/core/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__filter_sort_service__["a" /* FilterSortService */]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/topics-list/topics-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(topics, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(topics, error)\">\n  <section *ngIf=\"topics.length\" class=\"list-group mb-3\">\n    <div\n      *ngFor=\"let topic of fs.orderBy(topics, 'sticky'); index as i\"\n      class=\"list-group-item flex-column align-items-start\">\n      <div id=\"topic-{{i}}\" class=\"d-flex w-100 justify-content-between\">\n        <a [routerLink]=\"['/topic', topic._id]\" class=\"text-dark\">\n          <span *ngIf=\"topic.sticky\" class=\"badge badge-pill badge-success\">sticky</span><strong [innerHTML]=\"topic.title\"></strong>\n        </a>\n        <a class=\"text-primary link small mb-1\" [routerLink]=\"['/topic', topic._id, 'edit']\">Edit</a>\n      </div>\n    </div>\n  </section>\n\n  <p *ngIf=\"!topics.length\" class=\"lead\">There are no topics here.</p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/core/topics-list/topics-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".badge-pill {\n  margin-right: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/topics-list/topics-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_sort_service__ = __webpack_require__("../../../../../src/app/core/filter-sort.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicsListComponent = (function () {
    function TopicsListComponent(api, utils, fs) {
        this.api = api;
        this.utils = utils;
        this.fs = fs;
    }
    TopicsListComponent.prototype.ngOnInit = function () {
        this._getTopics();
    };
    TopicsListComponent.prototype._getTopics = function () {
        var _this = this;
        if (this.forumId) {
            this.topicsSub = this.api.getTopicsByForumId$(this.forumId).subscribe(function (data) { return _this.topics = data.reverse(); }, function (err) { return _this.error = err; });
        }
        else if (this.tagSlug) {
            this.topicsSub = this.api.getTopicsByTag$(this.tagSlug).subscribe(function (data) { return _this.topics = data; }, function (err) { return _this.error = err; });
        }
    };
    TopicsListComponent.prototype.ngOnDestroy = function () {
        this.topicsSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TopicsListComponent.prototype, "forumId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TopicsListComponent.prototype, "tagSlug", void 0);
    TopicsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-topics-list',
            template: __webpack_require__("../../../../../src/app/core/topics-list/topics-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/topics-list/topics-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_0__filter_sort_service__["a" /* FilterSortService */]])
    ], TopicsListComponent);
    return TopicsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.loading = function (data, error) {
        return !data && !error;
    };
    UtilsService.prototype.loadSuccess = function (data, error) {
        return data && !error;
    };
    UtilsService.prototype.newlinesToMarkup = function (text) {
        var sentences = text.split(/\r\n|\r|\n/gi);
        var withPTags = sentences.map(function (sentence) {
            if (sentence) {
                return "<p>" + sentence + "</p>";
            }
        });
        var trimmed = withPTags.filter(function (sentence) { return !!sentence === true; });
        return trimmed.join('');
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading size=\"large\"></app-loading>\n"

/***/ }),

/***/ "../../../../../src/app/pages/callback/callback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/pages/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/callback/callback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(forum, error)\">\n  <app-breadcrumbs></app-breadcrumbs>\n  <h2 [innerHTML]=\"forum.title\" class=\"pb-2\"></h2>\n  <app-topics-list [forumId]=\"id\"></app-topics-list>\n\n  <a\n    *ngIf=\"!showForumForm\"\n    class=\"btn btn-primary btn-block\"\n    [routerLink]=\"['/forum', id, 'topic', 'new']\">Create a New Topic</a>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forum/forum.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumComponent = (function () {
    function ForumComponent(title, api, route, utils) {
        this.title = title;
        this.api = api;
        this.route = route;
        this.utils = utils;
    }
    ForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set forum ID from route params and subscribe
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._getForum();
        });
    };
    ForumComponent.prototype._getForum = function () {
        var _this = this;
        this.forumSub = this.api.getForumById$(this.id).subscribe(function (data) {
            _this.forum = data;
            _this.title.setTitle(data.title);
        }, function (err) {
            _this.error = err;
            _this.title.setTitle('Forum');
        });
    };
    ForumComponent.prototype.ngOnDestroy = function () {
        this.forumSub.unsubscribe();
    };
    ForumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__("../../../../../src/app/pages/forum/forum.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forum/forum.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/forum-form/forum-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<form (ngSubmit)=\"onSubmit()\" #tplForumForm=\"ngForm\">\n  <div class=\"form-group row\" [ngClass]=\"{'mb-0': isEdit}\">\n    <div class=\"col-sm-9 my-1\">\n      <input\n        id=\"title\"\n        name=\"title\"\n        type=\"text\"\n        class=\"form-control\"\n        maxlength=\"200\"\n        required\n        [(ngModel)]=\"forumForm.title\"\n        [disabled]=\"submitting\">\n    </div>\n    <div class=\"col-sm-3 text-right\" [ngClass]=\"isEdit ? 'my-2' : 'my-1'\">\n      <ng-template [ngIf]=\"isEdit\">\n        <app-loading\n          *ngIf=\"submitting\"\n          size=\"small\"\n          [fillSpace]=\"true\"></app-loading>\n        <ng-template [ngIf]=\"!submitting\">\n          <a\n            class=\"btn btn-link btn-sm text-secondary px-0\"\n            (click)=\"emitCancelEdit()\">Cancel</a>\n          <button\n            class=\"btn btn-primary btn-sm\"\n            [disabled]=\"!tplForumForm.valid\">Save</button>\n        </ng-template>\n      </ng-template>\n      <ng-template [ngIf]=\"!isEdit\">\n        <app-loading\n          *ngIf=\"submitting\"\n          size=\"small\"\n          [fillSpace]=\"true\"\n          paddingClass=\"py-1\"></app-loading>\n        <button\n          *ngIf=\"!submitting\"\n          class=\"btn btn-primary btn-block\"\n          [disabled]=\"!tplForumForm.valid\">Submit</button>\n      </ng-template>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/forum-form/forum-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-sm {\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/forum-form/forum-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__ = __webpack_require__("../../../../../src/app/core/models/forum.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumFormComponent = (function () {
    function ForumFormComponent(api, utils) {
        this.api = api;
        this.utils = utils;
        this.submitForum = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.editForum = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
    }
    ForumFormComponent.prototype.ngOnInit = function () {
        this.isEdit = !!this.editForumObj;
        if (this.isEdit) {
            this.forumForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__["a" /* ForumModel */](this.editForumObj.title, this.editForumObj._id);
        }
        else {
            this._resetForumForm();
        }
    };
    ForumFormComponent.prototype._resetForumForm = function () {
        this.forumForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__["a" /* ForumModel */]('');
    };
    ForumFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        if (!this.isEdit) {
            this.submitSub = this.api.postForum$(this.forumForm).subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleError(err); });
        }
        else {
            this.editSub = this.api.editForum$(this.forumForm._id, this.forumForm).subscribe(function (data) { return _this._handleEditSuccess(data); }, function (err) { return _this._handleError(err); });
        }
    };
    ForumFormComponent.prototype.emitCancelEdit = function () {
        this.cancelEdit.emit();
    };
    ForumFormComponent.prototype._handleSubmitSuccess = function (res) {
        this.submitForum.emit(res);
        this.error = null;
        this._resetForumForm();
        this.submitting = false;
    };
    ForumFormComponent.prototype._handleEditSuccess = function (res) {
        this.editForum.emit(res);
        this.error = false;
        this.submitting = false;
    };
    ForumFormComponent.prototype._handleError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = err;
    };
    ForumFormComponent.prototype.ngOnDestroy = function () {
        if (this.submitSub) {
            this.submitSub.unsubscribe();
        }
        if (this.editSub) {
            this.editSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__["a" /* ForumModel */])
    ], ForumFormComponent.prototype, "editForumObj", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ForumFormComponent.prototype, "submitForum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ForumFormComponent.prototype, "editForum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ForumFormComponent.prototype, "cancelEdit", void 0);
    ForumFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-forum-form',
            template: __webpack_require__("../../../../../src/app/pages/home/forum-form/forum-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/forum-form/forum-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], ForumFormComponent);
    return ForumFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/forums-list/forums-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(forums, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(forums, error)\">\n  <p *ngIf=\"!forums.length\" class=\"lead\">\n    There are no forums available yet. Would you like to create one?\n  </p>\n\n  <div *ngIf=\"forums.length\" class=\"list-group mb-3\">\n    <div\n      *ngFor=\"let forum of forums; index as i; trackBy: trackForums\"\n      class=\"list-group-item flex-column align-items-start\">\n      <div id=\"forum-{{i}}\" class=\"d-flex w-100 justify-content-between\">\n        <app-forum-form\n          *ngIf=\"editingThisForum(forum._id)\"\n          (cancelEdit)=\"onCancelEdit()\"\n          [editForumObj]=\"makeEditObj(forum)\"\n          (editForum)=\"onEditForum($event, i)\"\n          class=\"w-100\"></app-forum-form>\n        <ng-template [ngIf]=\"!editingThisForum(forum._id)\">\n          <a [routerLink]=\"['/forum', forum._id]\" class=\"text-dark\">\n            <strong [innerHTML]=\"forum.title\"></strong>\n          </a>\n          <a class=\"text-primary link small mb-1\" (click)=\"editForum(forum._id)\">Edit</a>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <section id=\"newForum\">\n    <button\n      *ngIf=\"!showForumForm\"\n      class=\"btn btn-primary btn-block\"\n      (click)=\"toggleForumForm()\">Create a New Forum</button>\n    <ng-template [ngIf]=\"showForumForm\">\n      <h4>Create a New Forum</h4>\n      <app-forum-form (submitForum)=\"onSubmitForum($event)\"></app-forum-form>\n    </ng-template>\n  </section>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/forums-list/forums-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/forums-list/forums-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__ = __webpack_require__("../../../../../src/app/core/models/forum.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumsListComponent = (function () {
    function ForumsListComponent(api, utils) {
        this.api = api;
        this.utils = utils;
        this.showForumForm = false;
    }
    ForumsListComponent.prototype.ngOnInit = function () {
        this._getForums();
    };
    ForumsListComponent.prototype._getForums = function () {
        var _this = this;
        this.forumsSub = this.api.getForums$().subscribe(function (data) { return _this.forums = data; }, function (err) { return _this.error = err; });
    };
    ForumsListComponent.prototype.trackForums = function (index) {
        return index;
    };
    ForumsListComponent.prototype.makeEditObj = function (forumObj) {
        return new __WEBPACK_IMPORTED_MODULE_3__core_models_forum_model__["a" /* ForumModel */](forumObj.title, forumObj._id);
    };
    ForumsListComponent.prototype.toggleForumForm = function () {
        this.showForumForm = !this.showForumForm;
    };
    ForumsListComponent.prototype.onSubmitForum = function (forumObj) {
        var updatedForums = this.forums.concat([forumObj]);
        this.forums = updatedForums;
    };
    ForumsListComponent.prototype.onCancelEdit = function () {
        this.editing = null;
    };
    ForumsListComponent.prototype.onEditForum = function (forumObj, i) {
        Object.assign(this.forums[i], forumObj);
        this.editing = null;
    };
    ForumsListComponent.prototype.editingThisForum = function (forumId) {
        return this.editing === forumId;
    };
    ForumsListComponent.prototype.editForum = function (forumId) {
        this.editing = forumId;
    };
    ForumsListComponent.prototype.ngOnDestroy = function () {
        this.forumsSub.unsubscribe();
    };
    ForumsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-forums-list',
            template: __webpack_require__("../../../../../src/app/pages/home/forums-list/forums-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/forums-list/forums-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], ForumsListComponent);
    return ForumsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"auth.authStatePending === false\">\n  <p class=\"lead\" *ngIf=\"!auth.loggedIn\">\n    You must log in to access content on this site.\n  </p>\n\n  <div *ngIf=\"auth.loggedIn\">\n    <section id=\"forums\">\n      <h2 class=\"pb-2\">Message Board</h2>\n      <app-tags [showNew]=\"true\"></app-tags>\n      <app-forums-list></app-forums-list>\n    </section>\n  </div>\n</ng-template>\n\n<app-loading *ngIf=\"auth.authStatePending\" size=\"large\"></app-loading>\n<app-error *ngIf=\"auth.authError\"></app-error>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth, title) {
        this.auth = auth;
        this.title = title;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Message Board - Forums');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tag-form/tag-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(tagForm, error)\" size=\"large\"></app-loading>\n\n<ng-template [ngIf]=\"utils.loadSuccess(tagForm, error)\">\n  <app-breadcrumbs></app-breadcrumbs>\n\n  <h2 class=\"pb-2\">Create a New Tag</h2>\n\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    <strong>Success!</strong> The \"{{success}}\" tag has been added.\n  </div>\n\n  <app-error *ngIf=\"error\"></app-error>\n\n  <form (ngSubmit)=\"onSubmit()\" #tplTagForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Tag:</label>\n      <input\n        type=\"text\"\n        id=\"tag\"\n        name=\"tag\"\n        class=\"form-control\"\n        [(ngModel)]=\"tagForm.tag\"\n        maxlength=\"30\"\n        required>\n    </div>\n    <p class=\"text-right\">\n      <app-loading *ngIf=\"submitting\" size=\"small\"></app-loading>\n      <button\n        *ngIf=\"!submitting\"\n        class=\"btn btn-primary\"\n        [disabled]=\"!tplTagForm.valid\">Save Tag</button>\n    </p>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/tag-form/tag-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tag-form/tag-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_tag_model__ = __webpack_require__("../../../../../src/app/core/models/tag.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagFormComponent = (function () {
    function TagFormComponent(api, utils) {
        this.api = api;
        this.utils = utils;
        this.tagForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_tag_model__["a" /* TagModel */]('', '');
    }
    TagFormComponent.prototype.ngOnInit = function () {
    };
    TagFormComponent.prototype._createSlug = function (text) {
        var a = 'ãàáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
        var b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
        var p = new RegExp(a.split('').join('|'), 'g');
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, function (c) {
            return b.charAt(a.indexOf(c));
        }) // Replace special chars
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    TagFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.tagForm.slug = this._createSlug(this.tagForm.tag);
        this.submitSub = this.api.submitTag$(this.tagForm).subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleSubmitError(err); });
    };
    TagFormComponent.prototype._handleSubmitSuccess = function (res) {
        this.submitting = false;
        this.error = null;
        this.success = res.tag;
        this.tagForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_tag_model__["a" /* TagModel */]('', '');
    };
    TagFormComponent.prototype._handleSubmitError = function (err) {
        this.submitting = false;
        this.success = null;
        this.error = err;
    };
    TagFormComponent.prototype.ngOnDestroy = function () {
        if (this.submitSub) {
            this.submitSub.unsubscribe();
        }
    };
    TagFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-tag-form',
            template: __webpack_require__("../../../../../src/app/pages/tag-form/tag-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tag-form/tag-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], TagFormComponent);
    return TagFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/topic-form/topic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(topicForm, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(topicForm, error)\">\n  <app-breadcrumbs\n    *ngIf=\"originalTopic\"\n    [forumId]=\"originalTopic.forum_id\"\n    [topic]=\"originalTopic\"></app-breadcrumbs>\n\n  <app-breadcrumbs\n    *ngIf=\"!originalTopic && forumId\"\n    [forumId]=\"forumId\"></app-breadcrumbs>\n\n  <h2 class=\"pb-2\">{{pageTitle}}</h2>\n\n  <form (ngSubmit)=\"onSubmit()\" #tplTopicForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title:</label>\n      <input\n        type=\"text\"\n        id=\"title\"\n        name=\"title\"\n        class=\"form-control\"\n        [(ngModel)]=\"topicForm.title\"\n        maxlength=\"200\"\n        required>\n    </div>\n    <!-- Tags -->\n    <div *ngIf=\"tags\" class=\"tags\">\n      <label>Tags:</label>\n      <div class=\"tags-container mb-3\">\n        <span *ngFor=\"let tag of tags; index as i; trackBy: trackTags\">\n          <a\n            class=\"btn btn-sm mb-1\"\n            (click)=\"updateTagMap(tag.slug)\"\n            [ngClass]=\"tagMap[tag.slug] ? 'btn-success' : 'btn-light'\">{{tag.tag}}</a>\n        </span>\n      </div>\n    </div>\n    <!-- Sticky -->\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input\n          type=\"checkbox\"\n          id=\"sticky\"\n          name=\"sticky\"\n          class=\"form-check-input\"\n          [(ngModel)]=\"topicForm.sticky\">\n        Stick to Top\n      </label>\n    </div>\n    <p class=\"text-right\">\n      <app-loading *ngIf=\"submitting\" size=\"small\"></app-loading>\n      <button\n        *ngIf=\"!submitting\"\n        class=\"btn btn-primary\"\n        [disabled]=\"!tplTopicForm.valid\">Save Topic</button>\n    </p>\n  </form>\n\n  <section *ngIf=\"isEdit\" id=\"deleteTopic\" class=\"delete card mt-4 p-3\">\n    <h4 class=\"text-danger\">Danger Zone</h4>\n    <p><strong>Warning:</strong> Proceeding will permanently delete this topic along with all of its posts. Please make <em>absolutely sure</em> this is what you want to do.</p>\n    <app-error *ngIf=\"deleteError\" [error]=\"deleteError\"></app-error>\n    <p class=\"mb-0\">\n      <a *ngIf=\"!deleting\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTopic()\">Delete Topic</a>\n      <span *ngIf=\"deleting\" class=\"text-danger\">Deleting...</span>\n    </p>\n  </section>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/topic-form/topic-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topic-form/topic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_topic_model__ = __webpack_require__("../../../../../src/app/core/models/topic.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopicFormComponent = (function () {
    function TopicFormComponent(title, api, route, utils, router) {
        this.title = title;
        this.api = api;
        this.route = route;
        this.utils = utils;
        this.router = router;
        this.tagMap = {};
    }
    TopicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set ID from route params and subscribe
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params) {
                if (!_this.isEdit) {
                    // new post
                    _this.forumId = params['id'];
                    _this.title.setTitle('Create a New Topic');
                }
                else {
                    _this.topicId = params['id'];
                    _this._getTopicAndTags();
                }
            }
            _this.pageTitle = _this.isEdit ? 'Edit Topic' : 'Create a New Topic';
            _this.title.setTitle(_this.pageTitle);
        });
        // Get all available tags from API
        if (!this.isEdit) {
            this._getTags();
        }
    };
    Object.defineProperty(TopicFormComponent.prototype, "isEdit", {
        get: function () {
            return !(this.route.snapshot.url[0].path === 'forum');
        },
        enumerable: true,
        configurable: true
    });
    TopicFormComponent.prototype._getTags = function () {
        var _this = this;
        this.tagsSub = this.api.getTags$().subscribe(function (data) {
            _this.tags = data;
            _this.topicForm = new __WEBPACK_IMPORTED_MODULE_6__core_models_topic_model__["a" /* TopicModel */]('', _this.forumId, false, []);
        }, function (err) { return _this.error = err; });
    };
    TopicFormComponent.prototype._createTagMap = function () {
        var _this = this;
        // defines all currently existing tags for the map
        // only call if isEdit, otherwise map should be empty
        this.topicForm.tags.forEach(function (tagObj) {
            _this.tagMap[tagObj.slug] = true;
        });
    };
    TopicFormComponent.prototype._getTopicAndTags = function () {
        var _this = this;
        var getTopic$ = this.api.getTopicById$(this.topicId);
        var getTags$ = this.api.getTags$();
        this.topicSub = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].forkJoin(getTopic$, getTags$).subscribe(function (data) {
            _this.originalTopic = data[0];
            _this.tags = data[1];
            _this.topicForm = new __WEBPACK_IMPORTED_MODULE_6__core_models_topic_model__["a" /* TopicModel */](_this.originalTopic.title, _this.originalTopic.forum_id, _this.originalTopic.sticky, _this.originalTopic.tags || [], _this.originalTopic._id);
            _this._createTagMap();
        }, function (err) { return _this.error = err; });
    };
    TopicFormComponent.prototype.trackTags = function (index, item) {
        return item._id;
    };
    TopicFormComponent.prototype.updateTagMap = function (tagSlug) {
        var _tagOn = this.tagMap[tagSlug];
        if (!_tagOn) {
            this.tagMap[tagSlug] = true;
        }
        else {
            this.tagMap[tagSlug] = false;
        }
    };
    TopicFormComponent.prototype.onSubmit = function () {
        this.submitting = true;
        this._addSelectedTags();
        this._submitData();
    };
    TopicFormComponent.prototype._addSelectedTags = function () {
        var _submitTagSlugs = [];
        for (var key in this.tagMap) {
            if (this.tagMap.hasOwnProperty(key)) {
                if (this.tagMap[key]) {
                    _submitTagSlugs.push(key);
                }
            }
        }
        var submitTags = this.tags.filter(function (tagObj) {
            if (_submitTagSlugs.indexOf(tagObj.slug) > -1) {
                return tagObj;
            }
        });
        this.topicForm.tags = submitTags;
    };
    TopicFormComponent.prototype._submitData = function () {
        var _this = this;
        if (!this.isEdit) {
            this.submitSub = this.api.postTopic$(this.topicForm).subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleSubmitError(err); });
        }
        else {
            this.submitSub = this.api.editTopic$(this.topicId, this.topicForm).subscribe(function (data) { return _this._handleSubmitSuccess(data); }, function (err) { return _this._handleSubmitError(err); });
        }
    };
    TopicFormComponent.prototype._handleSubmitSuccess = function (res) {
        this.submitting = false;
        this.error = null;
        this.router.navigate(['/topic', res._id]);
    };
    TopicFormComponent.prototype._handleSubmitError = function (err) {
        this.submitting = false;
        this.error = err;
    };
    TopicFormComponent.prototype.deleteTopic = function () {
        if (confirm('Are you sure you want to delete this topic and all its posts?')) {
            this._deleteTopic();
        }
    };
    TopicFormComponent.prototype._deleteTopic = function () {
        var _this = this;
        this.deleting = true;
        this.deleteSub = this.api.deleteTopic$(this.topicId).subscribe(function (data) {
            _this.deleting = false;
            _this.error = null;
            _this.router.navigate(['/forum', _this.topicForm.forum_id]);
        }, function (err) {
            _this.deleteError = err;
            _this.deleting = false;
        });
    };
    TopicFormComponent.prototype.ngOnDestroy = function () {
        if (this.tagsSub) {
            this.tagsSub.unsubscribe();
        }
        if (this.topicSub) {
            this.topicSub.unsubscribe();
        }
    };
    TopicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-topic-form',
            template: __webpack_require__("../../../../../src/app/pages/topic-form/topic-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/topic-form/topic-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], TopicFormComponent);
    return TopicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/topic-tag/topic-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(tag, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(tag, error)\">\n  <app-breadcrumbs></app-breadcrumbs>\n  <h2 class=\"pb-2\">Topics Tagged \"{{tag.tag}}\"</h2>\n\n  <app-topics-list [tagSlug]=\"tagSlug\"></app-topics-list>\n  <p>\n    <a class=\"btn btn-primary btn-block\" routerLink=\"/tag/new\">Create a New Tag</a>\n  </p>\n\n  <section id=\"deleteTag\" class=\"delete card mt-4 p-3\">\n    <h4 class=\"text-danger\">Danger Zone</h4>\n    <p><strong>Warning:</strong> Proceeding will permanently delete the <strong>\"{{tag.tag}}\"</strong> tag and remove it from all topics. Please make <em>absolutely sure</em> this is what you want to do.</p>\n    <app-error *ngIf=\"deleteError\" [error]=\"deleteError\"></app-error>\n    <p class=\"mb-0\">\n      <a *ngIf=\"!deleting\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTag()\">Delete <strong>\"{{tag.tag}}\"</strong> Tag</a>\n      <span *ngIf=\"deleting\" class=\"text-danger\">Deleting...</span>\n    </p>\n  </section>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/topic-tag/topic-tag.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topic-tag/topic-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicTagComponent = (function () {
    function TopicTagComponent(api, title, route, router, utils) {
        this.api = api;
        this.title = title;
        this.route = route;
        this.router = router;
        this.utils = utils;
    }
    TopicTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set tag slug from route params and subscribe
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.tagSlug = params['slug'];
            _this._getTag();
        });
    };
    TopicTagComponent.prototype._getTag = function () {
        var _this = this;
        this.tagSub = this.api.getTagBySlug$(this.tagSlug).subscribe(function (data) {
            _this.tag = data;
            _this.title.setTitle("Topics Tagged \"" + _this.tag.tag + "\"");
        }, function (err) {
            _this.error = err;
            _this.title.setTitle('Tag');
        });
    };
    TopicTagComponent.prototype.deleteTag = function () {
        if (confirm('Are you sure you want to delete this tag and remove it from all topics?')) {
            this._deleteTag();
        }
    };
    TopicTagComponent.prototype._deleteTag = function () {
        var _this = this;
        this.deleting = true;
        this.deleteSub = this.api.deleteTag$(this.tagSlug).subscribe(function (data) {
            _this.deleting = false;
            _this.deleteError = null;
            _this.router.navigate(['/']);
        }, function (err) {
            _this.deleting = false;
            _this.deleteError = err;
        });
    };
    TopicTagComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.tagSub.unsubscribe();
        if (this.deleteSub) {
            this.deleteSub.unsubscribe();
        }
    };
    TopicTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-topic-tag',
            template: __webpack_require__("../../../../../src/app/pages/topic-tag/topic-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/topic-tag/topic-tag.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], TopicTagComponent);
    return TopicTagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/topic/post-form/post-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<form (ngSubmit)=\"onSubmit()\" #tplPostForm=\"ngForm\">\n  <textarea\n    id=\"post-text\"\n    name=\"post-text\"\n    class=\"form-control\"\n    rows=\"10\"\n    maxlength=\"6000\"\n    required\n    [(ngModel)]=\"postForm.post_text\"\n    [disabled]=\"submitting\"></textarea>\n  <p class=\"text-right pt-2\">\n    <app-loading\n      *ngIf=\"submitting\"\n      size=\"small\"></app-loading>\n    <ng-template [ngIf]=\"!submitting\">\n      <a\n        *ngIf=\"isEdit\"\n        class=\"btn btn-link btn-sm text-secondary\"\n        (click)=\"emitCancelEdit()\">Cancel</a>\n      <button\n        class=\"btn btn-primary\"\n        [ngClass]=\"{'btn-sm': isEdit}\"\n        [disabled]=\"!tplPostForm.valid\">Submit</button>\n    </ng-template>\n  </p>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/pages/topic/post-form/post-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topic/post-form/post-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_post_model__ = __webpack_require__("../../../../../src/app/core/models/post.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostFormComponent = (function () {
    function PostFormComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.submitPost = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.editPost = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
    }
    PostFormComponent.prototype.ngOnInit = function () {
        this.isEdit = !!this.editPostObj;
        if (this.isEdit) {
            this.postForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_post_model__["a" /* PostModel */](this.editPostObj.topic_id, this.editPostObj.author, this.editPostObj.post_text, this.editPostObj.datetime, this.editPostObj._id);
        }
        else {
            this._resetPostForm();
        }
    };
    Object.defineProperty(PostFormComponent.prototype, "isOdd", {
        get: function () {
            return ((this.index + 1) % 2) === 1;
        },
        enumerable: true,
        configurable: true
    });
    PostFormComponent.prototype._resetPostForm = function () {
        this.postForm = new __WEBPACK_IMPORTED_MODULE_3__core_models_post_model__["a" /* PostModel */](this.topicId, this.auth.userProfile.name, '');
    };
    PostFormComponent.prototype.emitCancelEdit = function () {
        this.cancelEdit.emit();
    };
    PostFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        if (!this.isEdit) {
            this.submitSub = this.api.submitPost$(this.postForm).subscribe(function (post) { return _this._handleSubmitSuccess(post); }, function (err) { return _this._handleError(err); });
        }
        else {
            this.editSub = this.api.editPost$(this.postForm._id, this.postForm).subscribe(function (post) { return _this._handleEditSuccess(post); }, function (err) { return _this._handleError(err); });
        }
    };
    PostFormComponent.prototype._handleSubmitSuccess = function (res) {
        this.submitPost.emit(res);
        this.error = null;
        this._resetPostForm();
        this.submitting = false;
    };
    PostFormComponent.prototype._handleEditSuccess = function (res) {
        this.editPost.emit(res);
        this.error = false;
        this.submitting = false;
    };
    PostFormComponent.prototype._handleError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = err;
    };
    PostFormComponent.prototype.ngOnDestroy = function () {
        if (this.submitSub) {
            this.submitSub.unsubscribe();
        }
        if (this.editSub) {
            this.editSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PostFormComponent.prototype, "topicId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_post_model__["a" /* PostModel */])
    ], PostFormComponent.prototype, "editPostObj", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PostFormComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "submitPost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "editPost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "cancelEdit", void 0);
    PostFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-post-form',
            template: __webpack_require__("../../../../../src/app/pages/topic/post-form/post-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/topic/post-form/post-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/topic/posts-list/posts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(posts, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(posts, error)\">\n  <div class=\"text-right\">\n    <a\n      [routerLink]\n      [fragment]=\"latestPostId\"\n      class=\"text-primary link small\">&darr; Go to Latest Post</a>\n  </div>\n  <ul *ngIf=\"posts.length\" class=\"posts-list\">\n    <li *ngFor=\"let post of posts; index as i; trackBy: trackPosts\" class=\"post\" #postLoop>\n      <div id=\"post-{{i}}\">\n        <div *ngIf=\"!editingThisPost(post._id)\" class=\"post-text\" [innerHTML]=\"utils.newlinesToMarkup(post.post_text)\"></div>\n        <app-error *ngIf=\"deleteError === post._id\"></app-error>\n        <app-post-form\n          *ngIf=\"editingThisPost(post._id)\"\n          (cancelEdit)=\"onCancelEdit()\"\n          [index]=\"i\"\n          [topicId]=\"topicId\"\n          [editPostObj]=\"makeEditObj(post)\"\n          (editPost)=\"onEditPost($event, i)\"></app-post-form>\n        <div class=\"post-meta clearfix\">\n          <span class=\"float-left\"><a [routerLink] fragment=\"post-{{i}}\">#</a> {{post.author}} | {{post.datetime | date:'short'}} | <a [routerLink] fragment=\"post-{{i}}\" (click)=\"editPost(post._id, i)\">Edit Post</a></span>\n          <span class=\"float-right\"><a class=\"text-danger link\" (click)=\"deletePost(post._id)\">Delete</a></span>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <div id=\"reply\" class=\"pt-2\">\n    <h4>Post a Reply</h4>\n    <app-post-form\n      *ngIf=\"posts\"\n      [topicId]=\"topicId\"\n      (submitPost)=\"onSubmitPost($event)\"></app-post-form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/topic/posts-list/posts-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none;\n  padding-left: 0; }\n\nli {\n  margin: 4px 0 4px;\n  padding: 8px; }\n  li:nth-child(odd) {\n    background: whitesmoke;\n    border-radius: .2rem; }\n    li:nth-child(odd) .post-meta {\n      border-color: #ddd; }\n\np:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0; }\n\n.post-text {\n  font-size: 15px;\n  line-height: 1.5;\n  margin-bottom: 8px; }\n\n.post-meta {\n  border-top: 1px solid #eee;\n  color: #777;\n  font-size: 10px;\n  padding-top: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topic/posts-list/posts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_post_model__ = __webpack_require__("../../../../../src/app/core/models/post.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostsListComponent = (function () {
    function PostsListComponent(api, auth, date, utils, route, router) {
        this.api = api;
        this.auth = auth;
        this.date = date;
        this.utils = utils;
        this.route = route;
        this.router = router;
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this._getPosts();
        this._getHash();
    };
    PostsListComponent.prototype._getHash = function () {
        var _this = this;
        this.hashSub = this.route.fragment.subscribe(function (fragment) {
            if (fragment && !_this.ngForRendered) {
                // only check this if NgFor hasn't rendered yet
                // this means it's the initial load of the page
                // if fragment is found, set initialScrollPostId from
                // pageload's hash; will then scroll AfterViewInit
                _this.initialScrollPostId = fragment;
            }
            if (fragment && _this.ngForRendered) {
                _this.scrollToAnchor(fragment);
            }
        });
    };
    PostsListComponent.prototype._getPosts = function () {
        var _this = this;
        this.postsSub = this.api.getPostsByTopic$(this.topicId).subscribe(function (data) {
            _this.posts = data;
            // detect latest post and store it so it can be scrolled to
            _this.latestPostId = _this.posts.length ? "post-" + (_this.posts.length - 1) : null;
        }, function (err) { return _this.error = err; });
    };
    PostsListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.postListSub = this.postsList.changes.subscribe(function () {
            // wait for NgFor to render and then scroll to initial hash
            if (_this.initialScrollPostId && !_this.ngForRendered) {
                _this.scrollToAnchor(_this.initialScrollPostId);
            }
            _this.ngForRendered = true;
            // unsubscribe: only want this for initial render
            _this.postListSub.unsubscribe();
        });
    };
    PostsListComponent.prototype.trackPosts = function (index) {
        return index;
    };
    PostsListComponent.prototype.makeEditObj = function (postObj) {
        return new __WEBPACK_IMPORTED_MODULE_6__core_models_post_model__["a" /* PostModel */](postObj.topic_id, postObj.author, postObj.post_text, postObj.datetime, postObj._id);
    };
    PostsListComponent.prototype.onSubmitPost = function (postObj) {
        var updatedPosts = this.posts.concat([postObj]);
        this.posts = updatedPosts;
        this.latestPostId = "post-" + (this.posts.length - 1);
    };
    PostsListComponent.prototype.onCancelEdit = function () {
        this.editing = null;
    };
    PostsListComponent.prototype.onEditPost = function (postObj, i) {
        Object.assign(this.posts[i], postObj);
        this.editing = null;
    };
    PostsListComponent.prototype.editingThisPost = function (postId) {
        return this.editing === postId;
    };
    PostsListComponent.prototype.editPost = function (postId, i) {
        // set editing post _id for API call
        // routerLink directive in template sets fragment
        // to scroll to top of post that's being edited
        this.editing = postId;
    };
    PostsListComponent.prototype.deletePost = function (id) {
        if (confirm('Are you sure you want to delete this post?')) {
            this._deletePost(id);
        }
    };
    PostsListComponent.prototype.scrollToAnchor = function (id) {
        var element = document.getElementById(id);
        if (this.ngForRendered) {
            this.postListSub.unsubscribe();
        }
        if (element) {
            var top_1 = element.offsetTop || document.body.clientTop || 0;
            window.scrollTo(0, top_1);
        }
    };
    PostsListComponent.prototype._deletePost = function (id) {
        var _this = this;
        this.deleteSub = this.api.deletePost$(id).subscribe(function (data) { return _this._removeDeletedPost(data.id); }, function (err) { return _this.deleteError = id; });
    };
    PostsListComponent.prototype._removeDeletedPost = function (id) {
        var updatedPosts = this.posts.filter(function (item) { return item._id !== id; });
        this.posts = updatedPosts;
        this.deleteError = null;
        this.latestPostId = "post-" + (this.posts.length - 1);
    };
    PostsListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.hashSub.unsubscribe();
        if (this.deleteSub) {
            this.deleteSub.unsubscribe();
        }
        if (this.postListSub) {
            this.postListSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PostsListComponent.prototype, "topicId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_9" /* ViewChildren */])('postLoop'),
        __metadata("design:type", Object)
    ], PostsListComponent.prototype, "postsList", void 0);
    PostsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'app-posts-list',
            template: __webpack_require__("../../../../../src/app/pages/topic/posts-list/posts-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/topic/posts-list/posts-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1__core_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], PostsListComponent);
    return PostsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"utils.loading(topic, error)\" size=\"large\"></app-loading>\n<app-error *ngIf=\"error\" [error]=\"error\"></app-error>\n\n<ng-template [ngIf]=\"utils.loadSuccess(topic, error) && id\">\n  <app-breadcrumbs *ngIf=\"forum\" [forum]=\"forum\"></app-breadcrumbs>\n\n  <h2 class=\"pb-2\">\n    {{topic.title}} <a class=\"btn btn-mini btn-primary\" routerLink=\"edit\">Edit Topic</a>\n  </h2>\n\n  <app-tags [tags]=\"topic.tags\"></app-tags>\n  <app-posts-list [topicId]=\"id\"></app-posts-list>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/pages/topic/topic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_service__ = __webpack_require__("../../../../../src/app/core/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicComponent = (function () {
    function TopicComponent(title, api, route, utils) {
        this.title = title;
        this.api = api;
        this.route = route;
        this.utils = utils;
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set topic ID from route params and subscribe
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._getTopic();
        });
    };
    TopicComponent.prototype._getTopic = function () {
        var _this = this;
        this.topicSub = this.api.getTopicById$(this.id).subscribe(function (topic) {
            _this.topic = topic;
            _this._getForum(topic.forum_id);
            _this.title.setTitle(_this.topic.title);
        }, function (err) {
            _this.error = err;
            _this.title.setTitle('Topic');
        });
    };
    TopicComponent.prototype._getForum = function (forumId) {
        var _this = this;
        this.forumSub = this.api.getForumById$(forumId).subscribe(function (forum) { return _this.forum = forum; });
    };
    TopicComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.topicSub.unsubscribe();
        if (this.forumSub) {
            this.forumSub.unsubscribe();
        }
    };
    TopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-topic',
            template: __webpack_require__("../../../../../src/app/pages/topic/topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/topic/topic.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__core_utils_service__["a" /* UtilsService */]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map