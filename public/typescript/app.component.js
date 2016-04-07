System.register(['angular2/core', 'angular2/common', './resume-edition.component', './lang.service', './resume-section.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, resume_edition_component_1, lang_service_1, resume_section_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (resume_edition_component_1_1) {
                resume_edition_component_1 = resume_edition_component_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (resume_section_component_1_1) {
                resume_section_component_1 = resume_section_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/app-component.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            resume_edition_component_1.ResumeEditionComponent,
                            resume_section_component_1.ResumeSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            router_1.ROUTER_PROVIDERS,
                            lang_service_1.LangService
                        ]
                    }),
                    router_1.RouteConfig([{
                            path: '/beny',
                            name: 'ResumeEdition',
                            component: resume_edition_component_1.ResumeEditionComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
