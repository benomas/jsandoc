import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { ResumeHomeComponent}           from './resume-home.component';
import { ResumeNewComponent}            from './resume-new.component';
import { ResumeEditionComponent}        from './resume-edition.component';
import { ResumeShowComponent}           from './resume-show.component';
import { LangService }                  from './lang.service';
import { ResumeService }                from './resume.service';
import { ResumeSectionComponent }       from './resume-section.component';
import { TestComponent }                from './test.component';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,RouteParams,RouteConfig} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app-component.html',
    directives:[
                    ResumeHomeComponent,
                    ResumeNewComponent,
                    ResumeEditionComponent,
                    ResumeShowComponent,
                    ROUTER_DIRECTIVES,
                    ResumeSectionComponent
                ],
    providers:  [
                    NgClass,
                    ROUTER_PROVIDERS
                    LangService
                ]
})

@RouteConfig(
[ {
    path: '/',
    name: 'ResumeHome',
    component: ResumeHomeComponent
  },
  {
    path: 'home/:name',
    name: 'ResumeHome2',
    component: ResumeHomeComponent
  },
  {
    path: 'new/',
    name: 'ResumeNew',
    component: ResumeNewComponent
  },
  {
    path: 'edit/:name',
    name: 'ResumeEdit',
    component: ResumeEditionComponent,
    useAsDefault: true
  },
  {
    path: 'show/:name',
    name: 'ResumeShow',
    component: ResumeShowComponent
  }
])

export class AppComponent implements OnInit
{
    currentAction;
    currentParam;
    constructor( private _router: Router)
    {
        this.currentAction='ResumeHome';
        this.currentParam='';
    }

    ngOnInit()
    {
        this.checkCurrentAction();
    }

    gotoAction(action,param)
    {
        link = [action];
        if(param)
            let link = [action, { name: param }];
        this.currentAction=action;
        this._router.navigate(link);
    }

    checkCurrentAction()
    {
        let str = this._router.lastNavigationAttempt;
        let patt = new RegExp(/\/show\/.+/);
        if( patt.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeShow';
        }
        patt = new RegExp(/\/edit\/.+/);
        if( patt.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeEdit';
        }
        patt = new RegExp(/\/home\/.+/);
        if( patt.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeHome';
        }
        patt = new RegExp(/\/home\//);
        if( patt.test(str))
        {
            this.currentParam = '';
            return this.currentAction='ResumeHome2';
        }
        patt = new RegExp(/\//);
        if( patt.test(str))
        {
            this.currentParam = '';
            return this.currentAction='ResumeHome';
        }
        patt = new RegExp(/\/new\//);
        if( patt.test(str))
        {
            this.currentParam = '';
            return this.currentAction='ResumeNew';
        }

        return this.currentAction='ResumeHome';
    }
}