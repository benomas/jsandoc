import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { LangService }                  from './lang.service';
import { ResumeService }                from './resume.service';
import { ResumeSectionComponent }       from './resume-section.component';
@Component({
    selector: 'my-app',
    templateUrl: 'templates/index.html',
    directives:[ResumeSectionComponent],
    providers:  [
                    NgClass,
                    LangService
                ]
})
export class AppComponent implements OnInit
{
    jsonEditor;
    collapseAll;
    openAll;

    resume;
    errorMessage;
    editionActive;
    hasPermision;
    loadJson()
    {
        this.resume = {};
        //this.resume2 = this.jsonEditor;
        //this.resume2 = {};
        //this.resume2 = [{"uno":"dos"}];
        this.resume = JSON.parse(this.jsonEditor);
    }
    constructor(private _langService: LangService,private _resumeService: ResumeService)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    getResume()
    {
         this._resumeService.getResume().subscribe(
          data =>
          {
            this.resume = data;
          },
          err => { this.errorMessage = true }
        );
    }

    ngOnInit()
    {
        this.getResume();
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
