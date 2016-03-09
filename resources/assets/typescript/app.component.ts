import {Component} from 'angular2/core';
import { LangService }     from './lang.service';
import { ResumeSectionComponent }   from './resume-section.component';
@Component({
    selector: 'my-app',
    templateUrl: 'templates/index.html',
    directives:[ResumeSectionComponent],
    providers:  [
                    LangService
                ]
})
export class AppComponent
{
    resume =
    {
        "resumenId":"1",
        "updated":"2016-03-06",
        "resumenLanguage":"es",
        "personal":
        {
            "name":"Afdael Benigno Michel Velasco",
            "firstLastName":"Michel",
            "secondLastName":"Velasco",
            "address":"Mesa del norte 635, Colonia San Vicente, cp:44330, Guadalajara Jal",
            "catSexId":"1",
            "SexValue":"Masculino",
            "birdDate":"31 de enero de 1982",
            "phones":["3320167315"],
            "celPhone":["3339468434"],
            "eMail":["benymeves@hotmail.com"]
        },
        "education":
        [
            {
                "school":"Centro Universitario De Ciencias Exactas e Ingenierias (UDG)",
                "degree":"Ingenieria en computacion"
            }
        ],
        "curse":
        [
            {
                "curseName":"Certificación Scrum Master",
                "curseDate":"2015"
            },
            {
                "curseName":"Symphony 2",
                "curseDate":"2013"
            },
            {
                "curseName":"Data warehouse",
                "curseDate":"2015"
            },
            {
                "curseName":"Ingles",
                "curseDate":"2015"
            }
        ],
        "skill":
        {
            "operativeSystems":
            [
                {
                    "operativeSystemName":"Windows",
                    "level":"Intermedio"
                },
                {
                    "operativeSystemName":"Linux",
                    "level":"Basico"
                }
            ],
            "programingLenguages":
            [
                {
                    "programingLenguageContext":"Web backend",
                    "programingLenguageName":"php"
                },
                {
                    "programingLenguageContext":"Escritorio",
                    "programingLenguageName":"java"
                },
                {
                    "programingLenguageContext":"Escritorio",
                    "programingLenguageName":"c/c++"
                },
                {
                    "programingLenguageContext":"Base de datos",
                    "programingLenguageName":"mySql"
                },
                {
                    "programingLenguageContext":"Base de datos",
                    "programingLenguageName":"msSql"
                },
                {
                    "programingLenguageContext":"Web frontend",
                    "programingLenguageName":"javascript"
                }
            ],
            "programingLenguagesFrameworksLibrarys":
            [
                {
                    "programingLenguageName":"php",
                    "programingLenguagesFrameworksLibrary":"Codeingniter"
                },
                {
                    "programingLenguageName":"php",
                    "programingLenguagesFrameworksLibrary":"Inux"
                },
                {
                    "programingLenguageName":"php",
                    "programingLenguagesFrameworksLibrary":"WordPress"
                },
                {
                    "programingLenguageName":"php",
                    "programingLenguagesFrameworksLibrary":"Laravel"
                },
                {
                    "programingLenguageName":"javascript",
                    "programingLenguagesFrameworksLibrary":"Jquery"
                },
                {
                    "programingLenguageName":"javascript",
                    "programingLenguagesFrameworksLibrary":"JMaps"
                },
                {
                    "programingLenguageName":"javascript",
                    "programingLenguagesFrameworksLibrary":"Angular"
                },
                {
                    "programingLenguageName":"javascript",
                    "programingLenguagesFrameworksLibrary":"Angular II"
                },
            ]
        },
        "experience":
        [
            {
                "company":"Freelance",
                "position":"Diseñador/Desarrollador",
                "activities":
                [
                    "Diseño y Desarrollo de páginas web y aplicaciones de escritorio con bases de datos, para pequeños negocios."
                ],
                "jobDates":
                {
                    "begin":"2010",
                    "end":"2012"
                },
                "proyects":
                [

                ]
            },
            {
                "company":"CONAFOR",
                "position":"Analista de desarrollo de sistemas",
                "activities":
                [
                    "Desarrollo/adaptación de sistemas internos y para la ciudadanía.",
                    "apoyo para publicaciones portal web."
                ],
                "jobDates":
                {
                    "begin":"2012-07-17",
                    "end":"2015-05-16"
                },
                "proyects":
                [
                    "Sistema de inventario, de bancos de germoplasma",
                    "Sistema call-center, para monitoreo y seguimiento de solicitudes ciudadanas",
                    "Tablero de control para seguimiento de indicadores",
                    "Gestor de Proyectos, en apoyo para MAAGTIC (Manual de Administración General de Tecnologías de la Información y Comunicaciones).",
                    "Sistema CFDI, para timbrado de recibos fiscales por donaciones forestales y/o cuotas por cambio de uso de suelo."
                ]
            },
            {
                "company":"CONAFOR",
                "position":"Jefe de departamento de desarrollo de sistemas (máximo responsable del área de desarrollo)",
                "activities":
                [
                    "Desarrollo/adaptación/mantenimiento de sistemas internos y para la ciudadanía.",
                    "Acompañamiento de equipo de desarrollo.",
                    "Líder de proyectos Scrum master.",
                    "Administrador de portafolio de proyectos."
                ],
                "jobDates":
                {
                    "begin":"2012-05-17",
                    "end":"-"
                },
                "proyects":
                [
                    "Sistema de planeación (seguimiento de metas y objetivos)",
                    "Sistema de consultas (definición, aplicación reporte y administración)",
                    "Sistema gestor de proyectos",
                    "Entre otros..."
                ]
            },
        ]
    };
    constructor(private _langService: LangService)
    {
    }
}
