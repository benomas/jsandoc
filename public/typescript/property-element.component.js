System.register(['angular2/core', 'angular2/common', './primitive-element.component', './array-element.component', './lang.service'], function(exports_1, context_1) {
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
    var core_1, common_1, primitive_element_component_1, array_element_component_1, lang_service_1;
    var PropertyElementComponent;
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
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            }],
        execute: function() {
            PropertyElementComponent = (function () {
                function PropertyElementComponent(_langService) {
                    this._langService = _langService;
                    this.pushdata = new core_1.EventEmitter();
                    this.validated = new core_1.EventEmitter();
                }
                PropertyElementComponent = __decorate([
                    core_1.Component({
                        selector: 'property-element',
                        templateUrl: 'templates/property-element.html',
                        inputs: ['section', 'sectionTitle', 'sectionParent'],
                        outputs: ['pushdata', 'validated'],
                        styles: [".les-important{opacity: 0.6;}\n              .les-important:hover{opacity: 1;}\n             "
                        ],
                        directives: [
                            common_1.NgClass,
                            primitive_element_component_1.PrimitiveElementComponent,
                            array_element_component_1.ArrayElementComponent,
                            PropertyElementComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], PropertyElementComponent);
                return PropertyElementComponent;
            }());
            exports_1("PropertyElementComponent", PropertyElementComponent);
        }
    }
});
