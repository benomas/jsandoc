System.register(['angular2/core', 'angular2/common', './resume-home.component', './resume-new.component', './resume-edition.component', './resume-show.component', './resume-shared.component', './lang.service', './resume.service', './resume-section.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, resume_home_component_1, resume_new_component_1, resume_edition_component_1, resume_show_component_1, resume_shared_component_1, lang_service_1, resume_service_1, resume_section_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (resume_home_component_1_1) {
                resume_home_component_1 = resume_home_component_1_1;
            },
            function (resume_new_component_1_1) {
                resume_new_component_1 = resume_new_component_1_1;
            },
            function (resume_edition_component_1_1) {
                resume_edition_component_1 = resume_edition_component_1_1;
            },
            function (resume_show_component_1_1) {
                resume_show_component_1 = resume_show_component_1_1;
            },
            function (resume_shared_component_1_1) {
                resume_shared_component_1 = resume_shared_component_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (resume_service_1_1) {
                resume_service_1 = resume_service_1_1;
            },
            function (resume_section_component_1_1) {
                resume_section_component_1 = resume_section_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_langService, _resumeService, _router) {
                    this._langService = _langService;
                    this._resumeService = _resumeService;
                    this._router = _router;
                    this.currentAction = 'ResumeShared';
                    this.currentParam = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._router.subscribe(function (val) { _this.checkCurrentAction(val); });
                };
                AppComponent.prototype.gotoAction = function (action, param) {
                    var link = [action];
                    if (param)
                        link = [action, { name: param }];
                    this.currentAction = action;
                    this._router.navigate(link);
                };
                AppComponent.prototype.checkCurrentAction = function (toNavitage) {
                    var str = toNavitage;
                    if (/shared\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'ResumeShared';
                    }
                    if (/show\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'ResumeShow';
                    }
                    if (/edit\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'ResumeEdit';
                    }
                    if (/home\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'ResumeHome';
                    }
                    if (/home\//.test(str)) {
                        this.currentParam = '';
                        return this.currentAction = 'ResumeHome2';
                    }
                    if (/new\//.test(str)) {
                        this.currentParam = '';
                        return this.currentAction = 'ResumeNew';
                    }
                    return this.currentAction = 'ResumeHome';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/app-component.html',
                        directives: [
                            resume_home_component_1.ResumeHomeComponent,
                            resume_new_component_1.ResumeNewComponent,
                            resume_edition_component_1.ResumeEditionComponent,
                            resume_show_component_1.ResumeShowComponent,
                            resume_shared_component_1.ResumeSharedComponent,
                            router_1.ROUTER_DIRECTIVES,
                            resume_section_component_1.ResumeSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            router_1.ROUTER_PROVIDERS,
                            lang_service_1.LangService
                        ]
                    }),
                    router_1.RouteConfig([{
                            path: '/',
                            name: 'ResumeHome',
                            component: resume_home_component_1.ResumeHomeComponent
                        },
                        {
                            path: 'new/',
                            name: 'ResumeNew',
                            component: resume_new_component_1.ResumeNewComponent
                        },
                        {
                            path: 'edit/:name',
                            name: 'ResumeEdit',
                            component: resume_edition_component_1.ResumeEditionComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'show/:name',
                            name: 'ResumeShow',
                            component: resume_show_component_1.ResumeShowComponent
                        },
                        {
                            path: 'shared/:name',
                            name: 'ResumeShared',
                            component: resume_shared_component_1.ResumeSharedComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, resume_service_1.ResumeService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
