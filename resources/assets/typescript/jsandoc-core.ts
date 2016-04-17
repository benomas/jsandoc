import { LangService }                  from './lang.service';
import { JsandocService }                from './jsandoc.service';
import { Router,RouteParams}            from 'angular2/router';


export class JsandocCore
{
    jsonEditor;
    collapseAll;
    openAll;

    jsandoc;
    errorMessage;
    editionActive;
    hasPermision;
    currentAction;

    loadJson()
    {
        this.jsandoc = {};
        this.jsandoc = JSON.parse(this.jsonEditor);
    }

    constructor(protected _langService: LangService,protected _jsandocService: JsandocService,protected _router: Router,protected _routeParams: RouteParams)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    getJsandoc(urlName)
    {
        if(!urlName )
            return false; //this._router.navigate(['JsandocHome']);
         this._jsandocService.getJsandoc(urlName).subscribe(
          data =>
          {
            this.jsandoc = data;
          },
          err =>
          {
            this.errorMessage = true;
            //this._router.navigate(['JsandocHome']);
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
        this._router.navigate(link);
    }

}
