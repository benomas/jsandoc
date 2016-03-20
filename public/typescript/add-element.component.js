System.register(['angular2/core', 'angular2/common', './primitive-element.component', './array-element.component', './property-element.component', './lang.service'], function(exports_1, context_1) {
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
    var core_1, common_1, primitive_element_component_1, array_element_component_1, property_element_component_1, lang_service_1;
    var AddElementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (primitive_element_component_1_1) {
                primitive_element_component_1 = primitive_element_component_1_1;
            },
            function (array_element_component_1_1) {
                array_element_component_1 = array_element_component_1_1;
            },
            function (property_element_component_1_1) {
                property_element_component_1 = property_element_component_1_1;
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
                    this.typeSelector = 'primitive-primitive';
                }
                AddElementComponent.prototype.changeMode = function (mode) {
                    this.mode = mode;
                };
                AddElementComponent.prototype.add = function () {
                    if (!this.validePush())
                        return false;
                    if (this.mode === 'primitive') {
                        this.pushdata.next(this.primitiveElementValue);
                    }
                    if (this.mode === 'array') {
                        this.pushdata.next(this.arrayElementValue);
                    }
                    if (this.mode === 'property-value') {
                        if (this.typeSelector === 'primitive-primitive') {
                            this.pushdata.next({ "property": this.propertyPrimitiveElementValue,
                                "value": this.propertyValuePrimitiveElementValue
                            });
                        }
                        if (this.typeSelector === 'primitive-array') {
                            this.pushdata.next({ "property": this.propertyPrimitiveElementValue,
                                "value": this.propertyValueArrayElementValue
                            });
                        }
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
                AddElementComponent.prototype.setJsonLevel = function (jsonValue, level) {
                    this[level] = jsonValue;
                };
                AddElementComponent.prototype.validePush = function () {
                    if (this.mode === 'primitive' && this.primitiveElementValue)
                        return true;
                    if (this.mode === 'array' && this.arrayElementValue)
                        return true;
                    if (this.mode === 'property-value' && this.propertyPrimitiveElementValue) {
                        if (this.typeSelector === 'primitive-primitive' &&
                            this.propertyValuePrimitiveElementValue)
                            return true;
                        if (this.typeSelector === 'primitive-array' &&
                            this.propertyValueArrayElementValue)
                            return true;
                    }
                    return false;
                };
                AddElementComponent = __decorate([
                    core_1.Component({
                        selector: 'add-element',
                        templateUrl: 'templates/add-element.html',
                        inputs: ['section'],
                        outputs: ['pushdata'],
                        styles: [".les-important{opacity: 0.6;}\n              .les-important:hover{opacity: 1;}\n             "
                        ],
                        directives: [common_1.NgClass,
                            AddElementComponent,
                            primitive_element_component_1.PrimitiveElementComponent,
                            array_element_component_1.ArrayElementComponent,
                            property_element_component_1.PropertyElementComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], AddElementComponent);
                return AddElementComponent;
            }());
            exports_1("AddElementComponent", AddElementComponent);
        }
    }
});
