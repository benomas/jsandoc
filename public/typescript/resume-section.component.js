System.register(['angular2/core', 'angular2/common', './lang.service'], function(exports_1, context_1) {
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
    var core_1, common_1, lang_service_1;
    var ResumeSectionComponent;
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
            }],
        execute: function() {
            ResumeSectionComponent = (function () {
                function ResumeSectionComponent(_langService) {
                    this._langService = _langService;
                    this.childover = new core_1.EventEmitter();
                    this.childleave = new core_1.EventEmitter();
                    this.overThisElement = false;
                    this.hiddens = [];
                    this.showItemPosition = false;
                }
                ResumeSectionComponent.prototype.canBeRendered = function (level) {
                    return !this.isObject(level);
                };
                ResumeSectionComponent.prototype.isPureArray = function (level) {
                    var _this = this;
                    var pureArray = true;
                    if (this.isArray(level)) {
                        level.forEach(function (subLevel) {
                            if (!_this.isArray(subLevel))
                                pureArray = false;
                        });
                    }
                    return pureArray;
                };
                ResumeSectionComponent.prototype.isObject = function (level) {
                    if (typeof level === 'object')
                        return true;
                    return false;
                };
                ResumeSectionComponent.prototype.isArray = function (level) {
                    return Object.prototype.toString.call(level) === '[object Array]';
                };
                ResumeSectionComponent.prototype.panelToggle = function (level) {
                    if (!this.isArray(level.value))
                        return false;
                    var position = this.hiddenPosition(level);
                    if (position !== null)
                        this.hiddens.splice(position, 1);
                    else
                        this.hiddens.push(level);
                };
                ResumeSectionComponent.prototype.hiddenPosition = function (level) {
                    var levelHidden = null;
                    this.hiddens.forEach(function (subLevel, index) {
                        if (level === subLevel)
                            levelHidden = index;
                    });
                    return levelHidden;
                };
                ResumeSectionComponent.prototype.overThis = function (emitter) {
                    this.overThisElement = emitter;
                    this.childover.next(this.section);
                };
                ResumeSectionComponent.prototype.leaveThis = function (emitter) {
                    this.overThisElement = null;
                    this.childleave.next(this.section);
                };
                ResumeSectionComponent.prototype.notifyOverToParent = function (parent) {
                    this.childElementOver = parent;
                    this.childover.next(this.section);
                };
                ResumeSectionComponent.prototype.notifyLeaveToParent = function (parent) {
                    this.childElementOver = null;
                    this.childleave.next(this.section);
                };
                ResumeSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'resume-section',
                        templateUrl: 'templates/resume-section.html',
                        inputs: ['section', 'sectionTitle', 'sectionParent', 'showItemPosition'],
                        outputs: ['childover', 'childleave'],
                        styles: ["\n                .section-title\n                {\n                  font-weight:bold;\n                }\n                .section-iterator\n                {\n                    border-left:2px solid #FFFFFF;\n                    border-bottom:1px solid #FFFFFF;\n                }\n                .section-iterator:hover\n                {\n                    border-left:2px solid #CCCCCC;\n                    border-bottom:1px solid #CCCCCC;\n                }\n                .with-child-over\n                {\n                    text-decoration:underline;\n                    color:#204D74;\n                }\n                .clickeable\n                {\n                    cursor:pointer;\n                }\n                .border-left\n                {\n                    border-left:2px solid #FFFFFF;\n                }\n                .border-left:hover\n                {\n                    border-left:2px solid #204D74;\n                }\n                "
                        ],
                        directives: [ResumeSectionComponent, common_1.NgClass],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], ResumeSectionComponent);
                return ResumeSectionComponent;
            }());
            exports_1("ResumeSectionComponent", ResumeSectionComponent);
        }
    }
});
