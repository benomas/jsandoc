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
                    this.resume = [
                        { "property": "Información personal",
                            "value": [
                                { "property": "Nombre", "value": "Afdael Benigno Michel Velasco" },
                                { "property": "Apellido paterno", "value": "Michel" },
                                { "property": "Apellido materno", "value": "Velasco" },
                                { "property": "Dirección", "value": "Mesa del norte 635, Colonia San Vicente, cp:44330, Guadalajara Jal" },
                                { "property": "Sexo", "value": "Masculino" },
                                { "property": "Fecha de nacimiento", "value": "31 de enero de 1982" },
                                { "property": "Telefono(s)", "value": ["3320167315"] },
                                { "property": "Celular(es)", "value": ["3339468434"] },
                                { "property": "Correo(s) electronico(s)", "value": ["benymeves@hotmail.com", "benomas@gmail.com"] }
                            ]
                        },
                        { "property": "Educación",
                            "value": [
                                [
                                    { "property": "Escuela", "value": "Centro Universitario De Ciencias Exactas e Ingenierias (UDG)" },
                                    { "property": "Grado obtenido", "value": "Ingenieria en computacion" }
                                ]
                            ]
                        },
                        { "property": "Cursos",
                            "value": [
                                [
                                    { "property": "Nombre del curso", "value": "Certificación Scrum Master" },
                                    { "property": "Fecha del curso", "value": "2015" }
                                ],
                                [
                                    { "property": "Nombre del curso", "value": "Symphony 2" },
                                    { "property": "Fecha del curso", "value": "2013" }
                                ],
                                [
                                    { "property": "Nombre del curso", "value": "Data warehouse" },
                                    { "property": "Fecha del curso", "value": "2015" }
                                ],
                                [
                                    { "property": "Nombre del curso", "value": "Ingles" },
                                    { "property": "Fecha del curso", "value": "2015" }
                                ]
                            ]
                        },
                        { "property": "Habilidades",
                            "value": [
                                { "property": "Sistemas operativos",
                                    "value": [
                                        [
                                            { "property": "Nombre sistema operativo", "value": "Windows" },
                                            { "property": "Nivel de habilidad", "value": "Intermedio" }
                                        ],
                                        [
                                            { "property": "Nombre sistema operativo", "value": "Linux" },
                                            { "property": "Nivel de habilidad", "value": "Basico" }
                                        ]
                                    ]
                                },
                                { "property": "Lenguajes de programación",
                                    "value": [
                                        { "property": "Web backend",
                                            "value": [
                                                { "property": "php",
                                                    "value": [
                                                        { "property": "Frameworks",
                                                            "value": [
                                                                "Codeingniter",
                                                                "Inux",
                                                                "WordPress",
                                                                "Laravel"
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        { "property": "Escritorio",
                                            "value": [
                                                "java",
                                                "c/c++"
                                            ]
                                        },
                                        { "property": "Base de datos",
                                            "value": [
                                                "mySql",
                                                "msSql",
                                                "postgresql",
                                            ]
                                        },
                                        { "property": "Web frontend",
                                            "value": [
                                                { "property": "javascript",
                                                    "value": [
                                                        { "property": "Librerias",
                                                            "value": [
                                                                "Jquery",
                                                                "JMaps"
                                                            ]
                                                        },
                                                        { "property": "Frameworks",
                                                            "value": [
                                                                "Angular",
                                                                "Angular II"
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                        },
                        { "property": "Experiencia laboral",
                            "value": [
                                [
                                    { "property": "Compañia", "value": "Freelance" },
                                    { "property": "Puesto", "value": "Diseñador/Desarrollador" },
                                    { "property": "Actividades",
                                        "value": [
                                            "Diseño y Desarrollo de páginas web y aplicaciones de escritorio con bases de datos, para pequeños negocios."
                                        ]
                                    },
                                    { "property": "Fechas laborando aqui",
                                        "value": [
                                            { "property": "Inicio", "value": "2010" },
                                            { "property": "Fin", "value": "2012" },
                                        ]
                                    },
                                ],
                                [
                                    { "property": "Compañia", "value": "CONAFOR" },
                                    { "property": "Puesto", "value": "Analista de desarrollo de sistemas" },
                                    { "property": "Actividades",
                                        "value": [
                                            "Desarrollo/adaptación de sistemas internos y para la ciudadanía.",
                                            "apoyo para publicaciones portal web."
                                        ]
                                    },
                                    { "property": "Fechas laborando aqui",
                                        "value": [
                                            { "property": "begin", "value": "2012-07-17" },
                                            { "property": "end", "value": "2015-05-16" },
                                        ]
                                    },
                                    { "property": "proyectos",
                                        "value": [
                                            "Sistema de inventario, de bancos de germoplasma",
                                            "Sistema call-center, para monitoreo y seguimiento de solicitudes ciudadanas",
                                            "Tablero de control para seguimiento de indicadores",
                                            "Gestor de Proyectos, en apoyo para MAAGTIC (Manual de Administración General de Tecnologías de la Información y Comunicaciones).",
                                            "Sistema CFDI, para timbrado de recibos fiscales por donaciones forestales y/o cuotas por cambio de uso de suelo."
                                        ]
                                    },
                                ],
                                [
                                    { "property": "Compañia", "value": "CONAFOR" },
                                    { "property": "Puesto", "value": "Jefe de departamento de desarrollo de sistemas (máximo responsable del área de desarrollo)" },
                                    { "property": "Actividades",
                                        "value": [
                                            "Desarrollo/adaptación/mantenimiento de sistemas internos y para la ciudadanía.",
                                            "Acompañamiento de equipo de desarrollo.",
                                            "Líder de proyectos Scrum master.",
                                            "Administrador de portafolio de proyectos."
                                        ]
                                    },
                                    { "property": "Fechas laborando aqui",
                                        "value": [
                                            { "property": "begin", "value": "2015-05-17" },
                                            { "property": "end", "value": "-" },
                                        ]
                                    },
                                    { "property": "proyectos",
                                        "value": [
                                            "Sistema de planeación (seguimiento de metas y objetivos)",
                                            "Sistema de consultas (definición, aplicación reporte y administración)",
                                            "Sistema gestor de proyectos",
                                            "Entre otros..."
                                        ]
                                    },
                                ]
                            ]
                        }
                    ];
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
