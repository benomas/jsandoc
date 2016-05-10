System.register(['angular2/core', 'angular2/common', './add-element.component', './lang.service'], function(exports_1, context_1) {
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
    var core_1, common_1, add_element_component_1, lang_service_1;
    var JsandocSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (add_element_component_1_1) {
                add_element_component_1 = add_element_component_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            }],
        execute: function() {
            JsandocSectionComponent = (function () {
                function JsandocSectionComponent(_langService) {
                    this._langService = _langService;
                    this.childover = new core_1.EventEmitter();
                    this.childleave = new core_1.EventEmitter();
                    this.sectionCreated = new core_1.EventEmitter();
                    this.sectionUpdated = new core_1.EventEmitter();
                    this.overThisElement = false;
                    this.hiddens = [];
                    this.editionOnElement = {};
                    this.initReady = false;
                }
                JsandocSectionComponent.prototype.ngOnInit = function () {
                    this.makeInit();
                };
                JsandocSectionComponent.prototype.ngOnChanges = function (changes) {
                    if (this.hasSection()) {
                        this.makeInit();
                        if (typeof this.collapseAll !== 'undefined' && typeof changes['collapseAll'] !== 'undefined') {
                            if (changes['collapseAll'].currentValue !== changes['collapseAll'].previousValue) {
                                if (changes['collapseAll'].currentValue === true) {
                                    this.hiddenAll();
                                }
                            }
                        }
                        if (typeof this.openAll !== 'undefined' && typeof changes['collapseAll'] !== 'undefined') {
                            if (changes['openAll'].currentValue !== changes['openAll'].previousValue) {
                                if (changes['openAll'].currentValue === true) {
                                    this.showAll();
                                }
                            }
                        }
                    }
                };
                JsandocSectionComponent.prototype.doubleLevelArray = function (level) {
                    var _this = this;
                    var hasDoubleArray = false;
                    if (this.isArray(level)) {
                        level.forEach(function (subLevel) {
                            if (_this.isArray(subLevel)) {
                                hasDoubleArray = true;
                                return true;
                            }
                        });
                    }
                    return hasDoubleArray;
                };
                JsandocSectionComponent.prototype.isObject = function (level) {
                    if (typeof level === 'object')
                        return true;
                    return false;
                };
                JsandocSectionComponent.prototype.isArray = function (level) {
                    return Object.prototype.toString.call(level) === '[object Array]';
                };
                JsandocSectionComponent.prototype.panelToggle = function (position) {
                    if (typeof this.hiddens[position] === 'undefined')
                        this.hiddens[position] = true;
                    else
                        this.hiddens[position] = !this.hiddens[position];
                };
                JsandocSectionComponent.prototype.hiddenPosition = function (position) {
                    if (typeof this.hiddens[position] === 'undefined')
                        return false;
                    return this.hiddens[position];
                };
                JsandocSectionComponent.prototype.hiddenAll = function () {
                    var count = 0;
                    if (this.dataType === "array") {
                        while (count < this.section.length) {
                            this.hiddens[count++] = true;
                        }
                    }
                    if (this.dataType === "property-value") {
                        while (count < this.keys.length) {
                            this.hiddens[count++] = true;
                        }
                    }
                };
                JsandocSectionComponent.prototype.showAll = function () {
                    var count = 0;
                    if (this.dataType === "array") {
                        while (count < this.section.length) {
                            this.hiddens[count++] = false;
                        }
                    }
                    if (this.dataType === "property-value") {
                        while (count < this.keys.length) {
                            this.hiddens[count++] = false;
                        }
                    }
                };
                JsandocSectionComponent.prototype.overThis = function (emitter) {
                    this.overThisElement = emitter;
                    this.childover.next(this.section);
                };
                JsandocSectionComponent.prototype.leaveThis = function (emitter) {
                    this.overThisElement = null;
                    this.childleave.next(this.section);
                };
                JsandocSectionComponent.prototype.notifyOverToParent = function (parent) {
                    this.childElementOver = parent;
                    this.childover.next(this.section);
                };
                JsandocSectionComponent.prototype.notifyLeaveToParent = function (parent) {
                    this.childElementOver = null;
                    this.childleave.next(this.section);
                };
                JsandocSectionComponent.prototype.overArrayChild = function (level) {
                    var _this = this;
                    if (level === this.childElementOver)
                        return true;
                    var arrayChild = false;
                    level.forEach(function (subLevel) {
                        if (subLevel === _this.childElementOver) {
                            arrayChild = true;
                        }
                    });
                    return arrayChild;
                };
                JsandocSectionComponent.prototype.getCase = function (item) {
                    if (typeof item === 'undefined' || item === null) {
                        return 'empty';
                    }
                    if (!this.isObject(item)) {
                        return "primitive";
                    }
                    if (this.isArray(item)) {
                        return "array";
                    }
                    return "property-value";
                };
                JsandocSectionComponent.prototype.add = function (jsonInsert) {
                    this.initReady = false;
                    if (this.hasSection()) {
                        if (this.dataType === 'array') {
                            this.section.splice(jsonInsert.position, 0, jsonInsert.jsonValue);
                            this.sectionUpdatedNotify();
                        }
                        if (this.dataType === 'property-value') {
                            this.propertyInsert(jsonInsert);
                            this.section[jsonInsert['newProperty']] = jsonInsert['newValue'];
                            this.sectionUpdatedNotify();
                        }
                    }
                    else {
                        this.section = jsonInsert.jsonValue;
                        this.sectionCreated.next(this.section);
                        this.sectionUpdatedNotify();
                    }
                    this.makeInit();
                    this.setDataType();
                };
                JsandocSectionComponent.prototype.setEditionOnElement = function (position) {
                    if (typeof this.editionOnElement[position] === 'undefined')
                        this.editionOnElement[position] = true;
                    else
                        this.editionOnElement[position] = !this.editionOnElement[position];
                };
                JsandocSectionComponent.prototype.getEditionOnElement = function (position) {
                    if (typeof this.editionOnElement[position] === 'undefined')
                        return false;
                    return this.editionOnElement[position];
                };
                JsandocSectionComponent.prototype.setDataType = function () {
                    if (this.hasSection() && this.dataType === 'property-value')
                        this.keys = Object.keys(this.section);
                };
                JsandocSectionComponent.prototype.getItemKeys = function (item) {
                    if (this.getCase(item) === 'property-value')
                        return Object.keys(item);
                    return null;
                };
                JsandocSectionComponent.prototype.propertyInsert = function (jsonInsert) {
                    var count = 0;
                    var newSection = {};
                    while (count < jsonInsert.position) {
                        newSection[this.keys[count]] = this.section[this.keys[count]];
                        count++;
                    }
                    newSection[jsonInsert.newProperty] = jsonInsert.newValue;
                    while (count < this.keys.length) {
                        newSection[this.keys[count]] = this.section[this.keys[count]];
                        count++;
                    }
                    this.section = newSection;
                };
                JsandocSectionComponent.prototype.hasSection = function () {
                    return typeof this.section === 'object' && this.section !== null;
                };
                JsandocSectionComponent.prototype.makeInit = function () {
                    if (this.initReady === false) {
                        this.dataType = this.getCase(this.section);
                        this.setDataType();
                        this.initReady = true;
                    }
                };
                JsandocSectionComponent.prototype.sectionUpdatedNotify = function () {
                    this.sectionUpdated.next(this.section);
                };
                JsandocSectionComponent.prototype.isEmpty = function () {
                    if (this.hasSection()) {
                        if (this.dataType === 'array' && this.section.length === 0)
                            return true;
                        if (this.dataType === 'property-value' && this.keys.length === 0)
                            return true;
                        return false;
                    }
                    return true;
                };
                JsandocSectionComponent.prototype.removeByKey = function (key) {
                    if (confirm('Seguro que deseas eliminar?')) {
                        delete this.section[key];
                        this.sectionUpdated.next(this.section);
                    }
                };
                JsandocSectionComponent.prototype.removeSection = function () {
                    if (confirm('Seguro que deseas eliminar?')) {
                        delete this.section;
                        this.sectionUpdated.next(this.section);
                    }
                };
                JsandocSectionComponent.prototype.isEmptyObject = function (item) {
                    var currentCase = this.getCase(item);
                    if (currentCase === "array") {
                        return item.length === 0;
                    }
                    if (currentCase === "property-value") {
                        return Object.keys(item).length === 0;
                    }
                    return true;
                };
                JsandocSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'jsandoc-section',
                        templateUrl: 'templates/jsandoc-section.html',
                        inputs: ['section',
                            'sectionTitle',
                            'sectionParent',
                            'editionActive',
                            'depth',
                            'collapseAll',
                            'openAll',
                            'defaultState'
                        ],
                        outputs: ['childover', 'childleave', 'sectionCreated', 'sectionUpdated'],
                        styles: ["\n                .section-title\n                {\n                  font-weight:bold;\n                }\n                .with-child-over\n                {\n                    /*text-decoration:underline;*/\n                    color:#204D74;\n                }\n                .clickeable\n                {\n                    cursor:pointer;\n                }\n                .border-left\n                {\n                    border-left:2px solid #FFFFFF;\n                }\n                .border-left:hover\n                {\n                    border-left:2px solid #204D74;\n                }\n\n                "
                        ],
                        directives: [JsandocSectionComponent, common_1.NgClass, add_element_component_1.AddElementComponent],
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService])
                ], JsandocSectionComponent);
                return JsandocSectionComponent;
            }());
            exports_1("JsandocSectionComponent", JsandocSectionComponent);
        }
    }
});
