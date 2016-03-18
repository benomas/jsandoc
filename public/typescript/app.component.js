System.register(['angular2/core', './lang.service', './resume-section.component'], function(exports_1, context_1) {
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
    var core_1, lang_service_1, resume_section_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (resume_section_component_1_1) {
                resume_section_component_1 = resume_section_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_langService) {
                    this._langService = _langService;
                    this.resume = [];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/index.html',
                        directives: [resume_section_component_1.ResumeSectionComponent],
                        providers: [
                            lang_service_1.LangService
                        ]
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
