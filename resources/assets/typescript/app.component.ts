import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { JsandocHomeComponent}          from './jsandoc-home.component';
import { JsandocNewComponent}           from './jsandoc-new.component';
import { JsandocEditionComponent}       from './jsandoc-edition.component';
import { JsandocShowComponent}          from './jsandoc-show.component';
import { JsandocSharedComponent}        from './jsandoc-shared.component';
import { LangService }                  from './lang.service';
import { JsandocService }               from './jsandoc.service';
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
    path: '/',
    name: 'JsandocHome',
    component: JsandocHomeComponent,
    useAsDefault: true
  },
  {
    path: 'new/',
    name: 'JsandocNew',
    component: JsandocNewComponent
  },
  {
    path: 'edit/:name',
    name: 'JsandocEdit',
    component: JsandocEditionComponent,
  },
  {
    path: 'show/:name',
    name: 'JsandocShow',
    component: JsandocShowComponent
  },
  {
    path: 'shared/:name',
    name: 'JsandocShared',
    component: JsandocSharedComponent
  }
])

export class AppComponent implements OnInit
{
    currentAction;
    currentParam;
    constructor(protected _langService: LangService,protected _jsandocService: JsandocService, private _router: Router)
    {
        this.currentAction='JsandocShared';
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
            return this.currentAction='JsandocShared';
        }
        if( /show\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='JsandocShow';
        }
        if( /edit\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='JsandocEdit';
        }
        if( /home\/.+/.test(str))
        {
            this.currentParam = 'beny';
            return this.currentAction='JsandocHome';
        }
        if( /home\//.test(str))
        {
            this.currentParam = '';
            return this.currentAction='JsandocHome2';
        }
        if( /new\//.test(str))
        {
            this.currentParam = '';
            return this.currentAction='JsandocNew';
        }

        return this.currentAction='JsandocHome';
    }
}