System.register(['angular2/core', 'angular2/common', './jsandoc-home.component', './jsandoc-new.component', './jsandoc-edition.component', './jsandoc-show.component', './jsandoc-shared.component', './lang.service', './doc.service', './user.service', './jsandoc-section.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, jsandoc_home_component_1, jsandoc_new_component_1, jsandoc_edition_component_1, jsandoc_show_component_1, jsandoc_shared_component_1, lang_service_1, doc_service_1, user_service_1, jsandoc_section_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (jsandoc_home_component_1_1) {
                jsandoc_home_component_1 = jsandoc_home_component_1_1;
            },
            function (jsandoc_new_component_1_1) {
                jsandoc_new_component_1 = jsandoc_new_component_1_1;
            },
            function (jsandoc_edition_component_1_1) {
                jsandoc_edition_component_1 = jsandoc_edition_component_1_1;
            },
            function (jsandoc_show_component_1_1) {
                jsandoc_show_component_1 = jsandoc_show_component_1_1;
            },
            function (jsandoc_shared_component_1_1) {
                jsandoc_shared_component_1 = jsandoc_shared_component_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (doc_service_1_1) {
                doc_service_1 = doc_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (jsandoc_section_component_1_1) {
                jsandoc_section_component_1 = jsandoc_section_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_langService, _docService, _userService, _router) {
                    this._langService = _langService;
                    this._docService = _docService;
                    this._userService = _userService;
                    this._router = _router;
                    this.currentUserNamespace = '';
                    this.currentDocNamespace = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._router.subscribe(function (val) { _this.checkCurrentAction(val); });
                    this.getUserProfile();
                };
                AppComponent.prototype.gotoAction = function (action, user_namespace, doc_namespace) {
                    var link = [action, {}];
                    if (typeof user_namespace !== 'undefined' && typeof user_namespace !== 'object')
                        link[1]['user_namespace'] = user_namespace;
                    if (typeof doc_namespace !== 'undefined' && typeof doc_namespace !== 'object')
                        link[1]['doc_namespace'] = doc_namespace;
                    this.currentAction = action;
                    this._router.navigate(link);
                };
                AppComponent.prototype.checkCurrentAction = function (toNavitage) {
                    var matchs = toNavitage.split('/');
                    this.currentUserNamespace = '';
                    this.currentDocNamespace = '';
                    if (typeof matchs === 'undefined' ||
                        typeof matchs[1] === 'undefined')
                        return this.currentAction = 'JsandocHome';
                    this.currentUserNamespace = matchs[0];
                    switch (matchs[1]) {
                        case 'shared':
                            this.currentAction = 'JsandocShared';
                            break;
                        case 'show':
                            this.currentAction = 'JsandocShow';
                            break;
                        case 'edit':
                            this.currentAction = 'JsandocEdit';
                            break;
                        case 'new': return this.currentAction = 'JsandocNew';
                        default: return this.currentAction = 'JsandocHome';
                    }
                    if (typeof matchs[2] === 'undefined')
                        return this.currentAction = 'JsandocHome';
                    this.currentDocNamespace = matchs[2];
                    return this.currentAction;
                };
                AppComponent.prototype.getUserProfile = function () {
                    var _this = this;
                    this._userService.getUserProfile().subscribe(function (data) {
                        _this.userProfile = data;
                    }, function (err) {
                        _this.errorMessage = true;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/app-component.html',
                        directives: [
                            jsandoc_home_component_1.JsandocHomeComponent,
                            jsandoc_new_component_1.JsandocNewComponent,
                            jsandoc_edition_component_1.JsandocEditionComponent,
                            jsandoc_show_component_1.JsandocShowComponent,
                            jsandoc_shared_component_1.JsandocSharedComponent,
                            router_1.ROUTER_DIRECTIVES,
                            jsandoc_section_component_1.JsandocSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            router_1.ROUTER_PROVIDERS,
                            lang_service_1.LangService
                        ]
                    }),
                    router_1.RouteConfig([{
                            path: ':user_namespace/home',
                            name: 'JsandocHome',
                            component: jsandoc_home_component_1.JsandocHomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: ':user_namespace/new',
                            name: 'JsandocNew',
                            component: jsandoc_new_component_1.JsandocNewComponent
                        },
                        {
                            path: ':user_namespace/edit/:doc_namespace',
                            name: 'JsandocEdit',
                            component: jsandoc_edition_component_1.JsandocEditionComponent,
                        },
                        {
                            path: ':user_namespace/show/:doc_namespace',
                            name: 'JsandocShow',
                            component: jsandoc_show_component_1.JsandocShowComponent
                        },
                        {
                            path: ':user_namespace/shared/:doc_namespace',
                            name: 'JsandocShared',
                            component: jsandoc_shared_component_1.JsandocSharedComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, doc_service_1.DocService, user_service_1.UserService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
