import { LangService }                  from './lang.service';
import { DocService }                   from './doc.service';
import { UserService }                  from './user.service';
import { Router,RouteParams}            from 'angular2/router';


export class JsandocCore
{
    jsonEditor;
    collapseAll;
    openAll;

    jsandoc;
    userDocs;
    userProfile;
    errorMessage;
    editionActive;
    hasPermision;
    currentAction;

    loadJson()
    {
        this.jsandoc = {};
        this.jsandoc = JSON.parse(this.jsonEditor);
    }

    constructor(protected _langService: LangService,
                protected _docService: DocService,
                protected _userService: UserService,
                protected _router: Router,
                protected _routeParams: RouteParams)
    {
        this.hasPermision=true;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    getJsandoc(user_namespace,doc_namespace)
    {
        if(!user_namespace )
            return false; //this._router.navigate(['JsandocHome']);
         this._docService.getDoc(user_namespace,doc_namespace).subscribe(
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

    getUserDocs()
    {
        this._userService.getUserDocs().subscribe(
            data =>
            {
                this.userDocs = data;
            },
            err =>
            {
                this.errorMessage = true;
            }
        );
    }

    getUserProfile()
    {
        this._userService.getUserProfile().subscribe(
            data =>
            {
                this.userProfile = data;
            },
            err =>
            {
                this.errorMessage = true;
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

    gotoAction(action,user_namespace,doc_namespace)
    {
        let link = [action, {}];
        if(typeof user_namespace !== 'undefined' && typeof user_namespace !=='object')
            link[1]['user_namespace']=user_namespace;
        if(typeof doc_namespace !== 'undefined' && typeof doc_namespace !=='object')
            link[1]['doc_namespace']=doc_namespace;

        this.currentAction=action;
        this._router.navigate(link);
    }

}
