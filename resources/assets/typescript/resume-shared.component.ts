import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { Router,RouteParams}            from 'angular2/router';
import { LangService }                  from './lang.service';
import { ResumeCore }                   from './resume-core';
import { ResumeService }                from './resume.service';
import { ResumeSectionComponent }       from './resume-section.component';
@Component({
    selector: 'resume-shared',
    templateUrl: 'templates/resume-show.html',
    directives:[
                    ResumeSectionComponent
                ],
    providers:  [
                    NgClass,
                    LangService
                ]
})


export class ResumeSharedComponent extends ResumeCore implements OnInit
{
    constructor(protected _langService: LangService,protected _resumeService: ResumeService,protected _router: Router,protected _routeParams: RouteParams)
    {
        super(_langService,_resumeService,_router,_routeParams);
        this.hasPermision=false;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    ngOnInit()
    {
        this.getResume(this._routeParams.get('name'));
    }
}
