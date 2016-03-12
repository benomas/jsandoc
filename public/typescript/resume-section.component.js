System.register(['angular2/core', './lang.service'], function(exports_1, context_1) {
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
    var core_1, lang_service_1;
    var ResumeSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            }],
        execute: function() {
            ResumeSectionComponent = (function () {
                function ResumeSectionComponent(_langService) {
                    this._langService = _langService;
                    this.visible = true;
                }
                ResumeSectionComponent.prototype.canBeRendered = function (level) {
                    return !this.isObject(level);
                };
                ResumeSectionComponent.prototype.isPureArray = function (level) {
                    var _this = this;
                    if (this.isArray(level)) {
                        level.forEach(function (subLevel) {
                            if (typeof subLevel === 'object' && !_this.isArray(subLevel))
                                return false;
                        });
                    }
                    return true;
                };
                ResumeSectionComponent.prototype.isObject = function (level) {
                    if (typeof level === 'object')
                        return true;
                    return false;
                };
                ResumeSectionComponent.prototype.isArray = function (level) {
                    return Object.prototype.toString.call(level) === '[object Array]';
                };
                ResumeSectionComponent.prototype.panelToggle = function () {
                    this.visible = !this.visible;
                };
                ResumeSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'resume-section',
                        templateUrl: 'templates/resume-section.html',
                        inputs: ['section', 'sectionTitle'],
                        directives: [ResumeSectionComponent],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], ResumeSectionComponent);
                return ResumeSectionComponent;
            }());
            exports_1("ResumeSectionComponent", ResumeSectionComponent);
        }
    }
});
