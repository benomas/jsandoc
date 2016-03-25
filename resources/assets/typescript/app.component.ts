import {Component}                  from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import { LangService }              from './lang.service';
import { ResumeSectionComponent }   from './resume-section.component';
@Component({
    selector: 'my-app',
    templateUrl: 'templates/index.html',
    directives:[ResumeSectionComponent],
    providers:  [
                    NgClass,
                    LangService
                ]
})
export class AppComponent
{
    jsonEditor;
    collapseAll;
    openAll;
    resume =

        {"Información personal":
            {"Nombre":"Afdael Benigno Michel Velasco",
                "Apellido paterno":"Michel",
                "Apellido materno":"Velasco",
                "Dirección":"Mesa del norte 635, Colonia San Vicente, cp:44330, Guadalajara Jal",
                "Sexo":"Masculino",
                "Fecha de nacimiento":"31 de enero de 1982",
                "Telefono(s)":["3320167315"],
                "Celular(es)":["3339468434"],
                "Correo(s) electronico(s)":["benymeves@hotmail.com","benomas@gmail.com"]
            },
        "Educación":
            {"Escuela":"Centro Universitario De Ciencias Exactas e Ingenierias (UDG)",
             "Grado obtenido":"Ingenieria en computacion"
            },
        "Cursos":
            [
                {   "Nombre del curso":"Certificación Scrum Master",
                    "Fecha del curso":"2015"
                },
                {   "Nombre del curso":"Symphony 2",
                    "Fecha del curso":"2013"
                },
                {   "Nombre del curso":"Data warehouse",
                    "Fecha del curso":"2015"
                },
                {   "Nombre del curso":"Ingles",
                    "Fecha del curso":"2015"
                }
            ],
        "Habilidades":
            {   "Sistemas operativos":
                    [
                        {   "Nombre sistema operativo":"Windows",
                            "Nivel de habilidad":"Intermedio"
                        },

                        {   "Nombre sistema operativo":"Linux",
                            "Nivel de habilidad":"Basico"
                        }
                    ],
                "Lenguajes de programación":
                    [
                        {"Web backend":
                            [
                                {"php":
                                    {  "Frameworks":
                                        [
                                            "Codeingniter",
                                            "Inux",
                                            "WordPress",
                                            "Laravel"
                                        ]
                                    }
                                }
                            ],
                        "Escritorio":
                            [
                                "java",
                                "c/c++"
                            ],
                        "Base de datos":
                            [
                                "mySql",
                                "msSql",
                                "postgresql",
                            ],
                        "Web frontend":
                            [
                                {"javascript":

                                    {"Librerias":
                                        [
                                            "Jquery",
                                            "JMaps"
                                        ],
                                    "Frameworks":
                                        [
                                            "Angular",
                                            "Angular II"
                                        ]
                                    },
                                }
                            ]
                        }
                    ]
                },
        "Experiencia laboral":
                [
                    {   "Compañia":"Freelance",
                        "Puesto":"Diseñador/Desarrollador",
                        "Actividades":
                        [
                            "Diseño y Desarrollo de páginas web y aplicaciones de escritorio con bases de datos, para pequeños negocios."
                        ],
                        "Fechas laborando aqui":
                        {   "Inicio":"2010",
                            "Fin":"2012"
                        }
                    },
                    {   "Compañia":"CONAFOR",
                        "Puesto":"Analista de desarrollo de sistemas",
                        "Actividades":
                        [
                            "Desarrollo/adaptación de sistemas internos y para la ciudadanía.",
                            "apoyo para publicaciones portal web."
                        ],
                        "Fechas laborando aqui":
                        {   "begin":"2012-07-17",
                            "end":"2015-05-16"
                        },
                        "proyectos":
                        [
                            "Sistema de inventario, de bancos de germoplasma",
                            "Sistema call-center, para monitoreo y seguimiento de solicitudes ciudadanas",
                            "Tablero de control para seguimiento de indicadores",
                            "Gestor de Proyectos, en apoyo para MAAGTIC (Manual de Administración General de Tecnologías de la Información y Comunicaciones).",
                            "Sistema CFDI, para timbrado de recibos fiscales por donaciones forestales y/o cuotas por cambio de uso de suelo."
                        ]
                    },
                    {   "Compañia":"CONAFOR",
                        "Puesto":"Jefe de departamento de desarrollo de sistemas (máximo responsable del área de desarrollo)",
                        "Actividades":
                        [
                            "Desarrollo/adaptación/mantenimiento de sistemas internos y para la ciudadanía.",
                            "Acompañamiento de equipo de desarrollo.",
                            "Líder de proyectos Scrum master.",
                            "Administrador de portafolio de proyectos."
                        ],
                        "Fechas laborando aqui":
                        {   "begin":"2015-05-17",
                            "end":"-"
                        },
                        "proyectos":
                        [
                            "Sistema de planeación (seguimiento de metas y objetivos)",
                            "Sistema de consultas (definición, aplicación reporte y administración)",
                            "Sistema gestor de proyectos",
                            "Entre otros..."
                        ]
                    },
                ]
        };
    resume2 = {  "parques":
                {
                    "Cerro de la reina":
                    {
                        "Informacion":"http://zonaguadalajara.com/cerro-de-la-reina/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Cerro+de+la+Reina,+Cihualpilli+S%2FN,+Pachaguillo,+45400+Tonal%C3%A1,+Jal.,+M%C3%A9xico/@20.6644565,-103.3213671,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b45c42cea7f3:0xdc8954b5cca74c21!2m2!1d-103.238214!2d20.6340521?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque agua azul":
                    {
                        "Informacion":"http://zonaguadalajara.com/parque-agua-azul/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Agua+Azul,+Calzada+Independencia+Sur+973,+Reforma,+44159+Guadalajara,+Jal.,+M%C3%A9xico/@20.6779094,-103.3448432,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b20359a04d07:0x1f1f7b6df83b40b8!2m2!1d-103.3476942!2d20.6601515?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque avila camacho":
                    {
                        "Informacion":"http://zonaguadalajara.com/parque-avila-camacho/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Avila+Camacho,+Av.+%C3%81vila+Camacho+S%2FN,+Jardines+del+Country,+44610+Guadalajara,+Jal.,+M%C3%A9xico/@20.7031609,-103.3610391,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428ae32a433fbf9:0x102bac133bf7f2ed!2m2!1d-103.3726321!2d20.7120222?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque de la Solidaridad Iberoaméricana":
                    {
                        "Informacion":"http://parquesolidaridad.jalisco.gob.mx/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Solidaridad,+Avenida+Malec%C3%B3n+300,+Benito+Ju%C3%A1rez,+44770+Guadalajara,+Jal.,+M%C3%A9xico/@20.6883937,-103.3084914,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b3f84fe30d63:0x21188894877f7d10!2m2!1d-103.2691386!2d20.6631231?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque del deán antes de la liberación":
                    {
                        "Informacion":"http://desde-cero-arquitectura.blogspot.mx/2013/12/parque-de-la-liberacion-o-el-dean.html",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+de+La+Liberaci%C3%B3n,+El+Dean,+Guadalajara,+Jal.,+M%C3%A9xico/@20.6705111,-103.3754876,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b26e0502ea41:0x7c68fcd7ca24fc8!2m2!1d-103.3458352!2d20.6364471?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque González Gallo":
                    {
                        "Informacion":"http://zonaguadalajara.com/parque-gonzalez-gallo/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Gonz%C3%A1lez+Gallo,+Calzada+Gonzalez+Gallo+entre+Salvador+Lopez+Chavez+y+Rio+Tizapan,+Guadalajara,+Jal.,+M%C3%A9xico/@20.6765667,-103.3408626,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b215c7229371:0x464d05e2c9ec3b36!2m2!1d-103.337373!2d20.647906?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque Metropolitano":
                    {
                        "Informacion":"http://www.parquemetropolitano.com.mx/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Metropolitano,+Zapopan,+Jal./@20.7035798,-103.4121188,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428aeb035f0f263:0xd25b45759a857b46!2m2!1d-103.4410621!2d20.6714793?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque Morelos":
                    {
                        "Informacion":"http://zonaguadalajara.com/parque-morelos/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Morelos,+Calzada+Independencia+y+San+Juan+de+Dios,+Zona+Centro,+44101+Guadalajara,+Jal.,+M%C3%A9xico/@20.6908972,-103.3335664,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b1edcf28bd09:0x114a20c9cb0df1ba!2m2!1d-103.3406803!2d20.6801036?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque Rehilete Alcalde":
                    {
                        "Informacion":"http://www.yumping.com.mx/parques-de-diversiones/parque-rehilete-alcalde-parques-de-diversiones--e19658550",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Rehilete+Alcalde,+Av.+Jesus+Garcia+s%2Fn,+Alcalde+Barranquitas,+44270+Guadalajara,+JAL,+M%C3%A9xico/@20.696992,-103.3415072,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b1ddb004ff97:0x39a7fdadd9b25d51!2m2!1d-103.3508133!2d20.6901233?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque Revolución":
                    {
                        "Informacion":"http://zonaguadalajara.com/parque-revolucion/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+Revoluci%C3%B3n,+Avenida+Juarez+esq.+Calzada+del+Federalismo+Norte+s%2Fn,+Centro,+44100+Guadalajara,+JAL,+M%C3%A9xico/@20.6898579,-103.352614,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428b1fcf038f91b:0xcea9da2ca4f41a6!2m2!1d-103.3556199!2d20.6744915?hl=es-419",
                        "Visitado":"No"
                    },
                    "Parque Silvano Barba \"La Mirilla\"":
                    {
                        "Informacion":"https://es.foursquare.com/v/parque-silvano-barba-la-mirilla/4d56ef88cf1b37045e83c53f",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Parque+La+Mirilla,+Av+Ruben+Dar%C3%ADo+2788,+Jardines+de+Providencia,+44630+Guadalajara,+Jal.,+M%C3%A9xico/@20.7009646,-103.3659097,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428ae4839a82aed:0x3782eeb80632ef77!2m2!1d-103.3828201!2d20.7001215?hl=es-419",
                        "Visitado":"No"
                    },
                    "Bosque el Centinela":
                    {
                        "Informacion":"http://www.huaxtla.org/BosqueCentinela.php",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Bosque+del+Centinela,+Paseo+Esc%C3%A9nico+S%2FN,+Colorado,+46048+Guadalajara,+Jal.,+M%C3%A9xico/@20.7536816,-103.3724043,14.5z/data=!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x8428a55bc2fa270f:0x5c4fc5be5f9d8731!2m2!1d-103.3746135!2d20.7643279?hl=es-419",
                        "Visitado":"No"
                    },
                    "Bosque primavera":
                    {
                        "Informacion":"http://www.bosquelaprimavera.com/",
                        "Como llegar":"https://www.google.com.mx/maps/dir/Calle+Mesa+del+Norte+635,+San+Vicente,+44330+Guadalajara,+Jal.,+M%C3%A9xico/Bosque+de+la+Primavera,+Jalisco/@20.6753276,-103.5024396,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8428b1a7e12b59b1:0xa121ae4b5b719b32!2m2!1d-103.3137712!2d20.7030253!1m5!1m1!1s0x842601926351bdf9:0x3b257b911755de7a!2m2!1d-103.5668302!2d20.6250231?hl=es-419",
                        "Visitado":"No"
                    }
                }
            };
    editionActive;
    hasPermision;
    loadJson()
    {
        delete this.resume2;
        this.resume2 = this.jsonEditor;
        console.log(this.resume2);
    }
    constructor(private _langService: LangService)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    setOpenAll()
    {
        this.openAll    =true;
        this.collapseAll=false;
    }

    setCollapseAll()
    {
        this.openAll    =false;
        this.collapseAll=true;
    }

}
