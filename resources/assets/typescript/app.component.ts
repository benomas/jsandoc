import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { JsandocHomeComponent}          from './jsandoc-home.component';
import { JsandocNewComponent}           from './jsandoc-new.component';
import { JsandocEditionComponent}       from './jsandoc-edition.component';
import { JsandocShowComponent}          from './jsandoc-show.component';
import { JsandocSharedComponent}        from './jsandoc-shared.component';
import { LangService }                  from './lang.service';
import { DocService }                   from './doc.service';
import { UserService }                  from './user.service';
import { JsandocSectionComponent }      from './jsandoc-section.component';
import { TestComponent }                from './test.component';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,RouteParams,RouteConfig} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app-component.html',
    directives:[
                    JsandocHomeComponent,
                    JsandocNewComponent,
                    JsandocEditionComponent,
                    JsandocShowComponent,
                    JsandocSharedComponent,
                    ROUTER_DIRECTIVES,
                    JsandocSectionComponent
                ],
    providers:  [
                    NgClass,
                    ROUTER_PROVIDERS,
                    LangService
                ]
})

@RouteConfig(
[ {
    path: ':user_namespace/home',
    name: 'JsandocHome',
    component: JsandocHomeComponent,
    useAsDefault: true
  },
  {
    path: ':user_namespace/new',
    name: 'JsandocNew',
    component: JsandocNewComponent
  },
  {
    path: ':user_namespace/edit/:doc_namespace',
    name: 'JsandocEdit',
    component: JsandocEditionComponent,
  },
  {
    path: ':user_namespace/show/:doc_namespace',
    name: 'JsandocShow',
    component: JsandocShowComponent
  },
  {
    path: ':user_namespace/shared/:doc_namespace',
    name: 'JsandocShared',
    component: JsandocSharedComponent
  }
])

export class AppComponent implements OnInit
{
    currentAction;
    currentUserNamespace;
    currentDocNamespace;
    userProfile;
    errorMessage;
    constructor(protected _langService: LangService,
                protected _docService: DocService,
                protected _userService: UserService,
                private _router: Router)
    {
        this.currentAction='JsandocShared';
        this.currentUserNamespace='';
        this.currentDocNamespace='';
    }

    ngOnInit()
    {
        this._router.subscribe((val) => {this.checkCurrentAction(val)});
        this.getUserProfile();
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

    checkCurrentAction(toNavitage)
    {
        let matchs = toNavitage.split('/');
        this.currentUserNamespace='';
        this.currentDocNamespace='';

        if( typeof matchs==='undefined' ||
            typeof matchs[1]==='undefined')
            return this.currentAction='JsandocHome';

        this.currentUserNamespace=matchs[0];
        switch(matchs[1])
        {
            case 'shared':  this.currentAction='JsandocShared';
                            break;
            case 'show':    this.currentAction='JsandocShow';
                            break;
            case 'edit':    this.currentAction='JsandocEdit';
                            break;
            case 'new':     return this.currentAction='JsandocNew';
            default:        return this.currentAction='JsandocHome';

        }

        if(typeof matchs[2]==='undefined')
            return this.currentAction='JsandocHome';

        this.currentDocNamespace = matchs[2];
        return this.currentAction;
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
}