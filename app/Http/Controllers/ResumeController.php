<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ResumeController extends Controller
{
    //
    public function index()
    {
        $resume ='{"Información personal":{"Nombre":"Afdael Benigno Michel Velasco","Apellido paterno":"Michel","Apellido materno":"Velasco","Dirección":"Mesa del norte 635, Colonia San Vicente, cp:44330, Guadalajara Jal","Sexo":"Masculino","Fecha de nacimiento":"31 de enero de 1982","Telefono(s)":["3320167315"],"Celular(es)":["3339468434"],"Correo(s) electronico(s)":["benymeves@hotmail.com","benomas@gmail.com"]},"Educación":{"Escuela":"Centro Universitario De Ciencias Exactas e Ingenierias (UDG)","Grado obtenido":"Ingenieria en computacion"},"Cursos":[{"Nombre del curso":"Certificación Scrum Master","Fecha del curso":"2015"},{"Nombre del curso":"Symphony 2","Fecha del curso":"2013"},{"Nombre del curso":"Data warehouse","Fecha del curso":"2015"},{"Nombre del curso":"Ingles","Fecha del curso":"2015"}],"Habilidades":{"Sistemas operativos":[{"Nombre sistema operativo":"Windows","Nivel de habilidad":"Intermedio"},{"Nombre sistema operativo":"Linux","Nivel de habilidad":"Basico"}],"Lenguajes de programación":[{"Web backend":[{"php":{"Frameworks":["Codeingniter","Inux","WordPress","Laravel"]}}],"Escritorio":["java","c/c++"],"Base de datos":["mySql","msSql","postgresql"],"Web frontend":[{"javascript":{"Librerias":["Jquery","JMaps"],"Frameworks":["Angular","Angular II"]}}]}]},"Experiencia laboral":[{"Compañia":"Freelance","Puesto":"Diseñador/Desarrollador","Actividades":["Diseño y Desarrollo de páginas web y aplicaciones de escritorio con bases de datos, para pequeños negocios."],"Fechas laborando aqui":{"Inicio":"2010","Fin":"2012"}},{"Compañia":"CONAFOR","Puesto":"Analista de desarrollo de sistemas","Actividades":["Desarrollo/adaptación de sistemas internos y para la ciudadanía.","apoyo para publicaciones portal web."],"Fechas laborando aqui":{"begin":"2012-07-17","end":"2015-05-16"},"proyectos":["Sistema de inventario, de bancos de germoplasma","Sistema call-center, para monitoreo y seguimiento de solicitudes ciudadanas","Tablero de control para seguimiento de indicadores","Gestor de Proyectos, en apoyo para MAAGTIC (Manual de Administración General de Tecnologías de la Información y Comunicaciones).","Sistema CFDI, para timbrado de recibos fiscales por donaciones forestales y/o cuotas por cambio de uso de suelo."]},{"Compañia":"CONAFOR","Puesto":"Jefe de departamento de desarrollo de sistemas (máximo responsable del área de desarrollo)","Actividades":["Desarrollo/adaptación/mantenimiento de sistemas internos y para la ciudadanía.","Acompañamiento de equipo de desarrollo.","Líder de proyectos Scrum master.","Administrador de portafolio de proyectos."],"Fechas laborando aqui":{"begin":"2015-05-17","end":"-"},"proyectos":["Sistema de planeación (seguimiento de metas y objetivos)","Sistema de consultas (definición, aplicación reporte y administración)","Sistema gestor de proyectos","Entre otros..."]}]}';


        return response()->json(['status'=>'ok','data'=>$resume], 200);
    }
}
