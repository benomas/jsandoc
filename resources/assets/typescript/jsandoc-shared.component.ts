import { Component,OnInit }             from 'angular2/core';
import { NgClass }                      from 'angular2/common';
import { Router,RouteParams}            from 'angular2/router';
import { LangService }                  from './lang.service';
import { JsandocCore }                   from './jsandoc-core';
import { JsandocService }                from './jsandoc.service';
import { JsandocSectionComponent }       from './jsandoc-section.component';
@Component({
    selector: 'jsandoc-shared',
    templateUrl: 'templates/jsandoc-show.html',
    directives:[
                    JsandocSectionComponent
                ],
    providers:  [
                    NgClass,
                    LangService
                ]
})


export class JsandocSharedComponent extends JsandocCore implements OnInit
{
    constructor(protected _langService: LangService,protected _jsandocService: JsandocService,protected _router: Router,protected _routeParams: RouteParams)
    {
        super(_langService,_jsandocService,_router,_routeParams);
        this.hasPermision=false;
        this.editionActive=false;
        this.openAll=true;
        this.collapseAll=false;
    }

    ngOnInit()
    {
        this.getJsandoc(this._routeParams.get('name'));
    }
}
