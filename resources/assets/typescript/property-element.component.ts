import {Component,EventEmitter}     from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import {PrimitiveElementComponent}  from './primitive-element.component';
import {ArrayElementComponent}      from './array-element.component';
import {LangService}                from './lang.service';

@Component({
    selector: 'property-element',
    templateUrl: 'templates/property-element.html',
    inputs: ['section','sectionTitle','sectionParent'],
    outputs:['pushdata','validated'],
    styles: [`.les-important{opacity: 0.6;}
              .les-important:hover{opacity: 1;}
             `
            ],
    directives:[
                    NgClass,
                    PrimitiveElementComponent,
                    ArrayElementComponent,
                    PropertyElementComponent
                ],
})
export class PropertyElementComponent
{
    public pushdata = new EventEmitter();
    public validated = new EventEmitter();
    propertyElementValue;

    constructor(private _langService: LangService)
    {
    }
}