import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { ResumeHomeComponent}           from './resume-home.component';
import { ResumeNewComponent}            from './resume-new.component';
import { ResumeEditionComponent}        from './resume-edition.component';
import { ResumeShowComponent}           from './resume-show.component';
import { ResumeSharedComponent}           from './resume-shared.component';
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
                    ResumeSharedComponent,
                    ROUTER_DIRECTIVES,
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
    path: '/',
    name: 'ResumeHome',
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
  },
  {
    path: 'shared/:name',
    name: 'ResumeShared',
    component: ResumeSharedComponent
  }
])

export class AppComponent implements OnInit
{
    currentAction;
    currentParam;
    constructor(protected _langService: LangService,protected _resumeService: ResumeService, private _router: Router)
    {
        this.currentAction='ResumeShared';
        this.currentParam='';
    }

    ngOnInit()
    {
        this._router.subscribe((val) => {this.checkCurrentAction(val)});
    }

    gotoAction(action,param)
    {
        let link = [action];
        if(param)
            link = [action, { name: param }];
        this.currentAction=action;
        this._router.navigate(link);
    }

    checkCurrentAction(toNavitage)
    {
        let str = toNavitage;
        if( /shared\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeShared';
        }
        if( /show\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeShow';
        }
        if( /edit\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeEdit';
        }
        if( /home\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='ResumeHome';
        }
        if( /home\//.test(str))
        {
            this.currentParam = '';
            return this.currentAction='ResumeHome2';
        }
        if( /new\//.test(str))
        {
            this.currentParam = '';
            return this.currentAction='ResumeNew';
        }

        return this.currentAction='ResumeHome';
    }
}