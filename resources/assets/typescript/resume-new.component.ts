import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { Router,RouteParams}            from 'angular2/router';
import { LangService }                  from './lang.service';
import { ResumeCore }                   from './resume-core';
import { ResumeService }                from './resume.service';
import { ResumeSectionComponent }       from './resume-section.component';
@Component({
    selector: 'resume-new',
    templateUrl: 'templates/resume-new.html',
    directives:[
                    ResumeSectionComponent
                ],
    providers:  [
                    NgClass,
                    LangService
                ]
})


export class ResumeNewComponent extends ResumeCore implements OnInit
{
    constructor(private _langService: LangService,private _resumeService: ResumeService,private _router: Router,private _routeParams: RouteParams)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    ngOnInit()
    {
        this.getResume(this._routeParams.get('name'));
    }
}
