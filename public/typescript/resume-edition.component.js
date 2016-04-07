System.register(['angular2/core', 'angular2/common', './lang.service', './resume.service', './resume-section.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, lang_service_1, resume_service_1, resume_section_component_1, router_1;
    var ResumeEditionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            ResumeEditionComponent = (function () {
                function ResumeEditionComponent(_langService, _resumeService, _router) {
                    this._langService = _langService;
                    this._resumeService = _resumeService;
                    this._router = _router;
                    this.hasPermision = true;
                    this.editionActive = false;
                    this.openAll = true;
                    this.collapseAll = false;
                }
                ResumeEditionComponent.prototype.loadJson = function () {
                    this.resume = {};
                    this.resume = JSON.parse(this.jsonEditor);
                };
                ResumeEditionComponent.prototype.getResume = function () {
                    var _this = this;
                    this._resumeService.getResume().subscribe(function (data) {
                        _this.resume = data;
                    }, function (err) { _this.errorMessage = true; });
                };
                ResumeEditionComponent.prototype.ngOnInit = function () {
                    this.getResume();
                };
                ResumeEditionComponent.prototype.setOpenAll = function () {
                    this.openAll = true;
                    this.collapseAll = false;
                };
                ResumeEditionComponent.prototype.setCollapseAll = function () {
                    this.openAll = false;
                    this.collapseAll = true;
                };
                ResumeEditionComponent = __decorate([
                    core_1.Component({
                        selector: 'resume-edition',
                        templateUrl: 'templates/resume-edition.html',
                        directives: [
                            resume_section_component_1.ResumeSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            lang_service_1.LangService
                        ]
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, resume_service_1.ResumeService, router_1.Router])
                ], ResumeEditionComponent);
                return ResumeEditionComponent;
            }());
            exports_1("ResumeEditionComponent", ResumeEditionComponent);
        }
    }
});
