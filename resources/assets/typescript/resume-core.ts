import { LangService }                  from './lang.service';
import { ResumeService }                from './resume.service';
import { Router,RouteParams}            from 'angular2/router';


export class ResumeCore
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
        this.resume = JSON.parse(this.jsonEditor);
    }
/*
    constructor(private _langService: LangService,private _resumeService: ResumeService,private _router: Router,private _routeParams: RouteParams)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }
*/
    getResume(urlName)
    {
        if(!urlName )
            return false; //this._router.navigate(['ResumeHome']);
         this._resumeService.getResume(urlName).subscribe(
          data =>
          {
            this.resume = data;
          },
          err =>
          {
            this.errorMessage = true;
            this._router.navigate(['ResumeHome']);
            }
        );
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

    gotoAction(action,param)
    {
      let link = [action, { name: param }];
      this.currentAction=action;
    }

}
