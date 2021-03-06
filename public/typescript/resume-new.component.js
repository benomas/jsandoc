System.register(['angular2/core', 'angular2/common', 'angular2/router', './lang.service', './resume-core', './resume.service', './resume-section.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, lang_service_1, resume_core_1, resume_service_1, resume_section_component_1;
    var ResumeNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (resume_core_1_1) {
                resume_core_1 = resume_core_1_1;
            },
            function (resume_service_1_1) {
                resume_service_1 = resume_service_1_1;
            },
            function (resume_section_component_1_1) {
                resume_section_component_1 = resume_section_component_1_1;
            }],
        execute: function() {
            ResumeNewComponent = (function (_super) {
                __extends(ResumeNewComponent, _super);
                function ResumeNewComponent(_langService, _resumeService, _router, _routeParams) {
                    _super.call(this, _langService, _resumeService, _router, _routeParams);
                    this._langService = _langService;
                    this._resumeService = _resumeService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.hasPermision = true;
                    this.editionActive = false;
                    this.openAll = true;
                    this.collapseAll = false;
                }
                ResumeNewComponent.prototype.ngOnInit = function () {
                    this.getResume(this._routeParams.get('name'));
                };
                ResumeNewComponent = __decorate([
                    core_1.Component({
                        selector: 'resume-new',
                        templateUrl: 'templates/resume-new.html',
                        directives: [
                            resume_section_component_1.ResumeSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            lang_service_1.LangService
                        ]
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, resume_service_1.ResumeService, router_1.Router, router_1.RouteParams])
                ], ResumeNewComponent);
                return ResumeNewComponent;
            }(resume_core_1.ResumeCore));
            exports_1("ResumeNewComponent", ResumeNewComponent);
        }
    }
});
