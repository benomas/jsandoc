import {Component,EventEmitter}      from 'angular2/core';
import {NgClass} from 'angular2/common';
import {LangService}    from './lang.service';

@Component({
    selector: 'add-element',
    templateUrl: 'templates/add-element.html',
    inputs: ['section','sectionTitle','sectionParent'],
    outputs:['pushdata'],
    styles: [`.les-important{opacity: 0.6;}
              .les-important:hover{opacity: 1;}
             `
            ],
    directives:[AddElementComponent,NgClass],
})
export class AddElementComponent
{
    public pushdata = new EventEmitter();
    primitiveValue;
    arrayValue;
    property;
    propertyValue;
    mode;

    constructor(private _langService: LangService)
    {
        this.mode='primitive';
    }

    changeMode(mode)
    {
        this.mode = mode;
    }

    add()
    {
        if(this.mode==='primitive')
        {
            this.pushdata.next(this.primitiveValue);
        }
        if(this.mode==='array')
        {
            this.pushdata.next([]);
        }
        if(this.mode==='property-value')
        {
            this.pushdata.next({"property":this.property,"value":this.propertyValue});
        }
    }

    getModeAsInt()
    {
        if(this.mode==='primitive')
        {
            return 1;
        }
        if(this.mode==='array')
        {
            return 2;
        }
        if(this.mode==='property-value')
        {
            return 3;
        }
    }
}