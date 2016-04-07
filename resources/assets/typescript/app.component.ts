import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { ResumeEditionComponent}        from './resume-edition.component';
import { LangService }                  from './lang.service';
import { ResumeService }                from './resume.service';
import { ResumeSectionComponent }       from './resume-section.component';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';
@Component({
    selector: 'my-app',
    templateUrl: 'templates/app-component.html',
    directives:[
                    ROUTER_DIRECTIVES,
                    ResumeEditionComponent,
                    ResumeSectionComponent
                ],
    providers:  [
                    NgClass,
                    ROUTER_PROVIDERS,
                    LangService
                ]
})

@RouteConfig(
[ {
    path: '/beny',
    name: 'ResumeEdition',
    component: ResumeEditionComponent,
    useAsDefault: true
  }
])

export class AppComponent
{

}