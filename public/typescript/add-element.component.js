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
    var AddElementComponent;
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
            AddElementComponent = (function () {
                function AddElementComponent(_langService) {
                    this._langService = _langService;
                    this.pushdata = new core_1.EventEmitter();
                    this.mode = 'primitive';
                }
                AddElementComponent.prototype.changeMode = function (mode) {
                    this.mode = mode;
                };
                AddElementComponent.prototype.add = function () {
                    if (this.mode === 'primitive') {
                        this.pushdata.next(this.primitiveValue);
                    }
                    if (this.mode === 'array') {
                        this.pushdata.next([]);
                    }
                    if (this.mode === 'property-value') {
                        this.pushdata.next({ "property": this.property, "value": this.propertyValue });
                    }
                };
                AddElementComponent.prototype.getModeAsInt = function () {
                    if (this.mode === 'primitive') {
                        return 1;
                    }
                    if (this.mode === 'array') {
                        return 2;
                    }
                    if (this.mode === 'property-value') {
                        return 3;
                    }
                };
                AddElementComponent = __decorate([
                    core_1.Component({
                        selector: 'add-element',
                        templateUrl: 'templates/add-element.html',
                        inputs: ['section', 'sectionTitle', 'sectionParent'],
                        outputs: ['pushdata'],
                        styles: [".les-important{opacity: 0.6;}\n              .les-important:hover{opacity: 1;}\n             "
                        ],
                        directives: [AddElementComponent, common_1.NgClass],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], AddElementComponent);
                return AddElementComponent;
            }());
            exports_1("AddElementComponent", AddElementComponent);
        }
    }
});
