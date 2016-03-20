import {Component,EventEmitter}     from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import {PrimitiveElementComponent}  from './primitive-element.component';
import {ArrayElementComponent}      from './array-element.component';
import {PropertyElementComponent}   from './property-element.component';
import {LangService}                from './lang.service';

@Component({
    selector: 'add-element',
    templateUrl: 'templates/add-element.html',
    inputs: ['section'],
    outputs:['pushdata'],
    styles: [`.les-important{opacity: 0.6;}
              .les-important:hover{opacity: 1;}
             `
            ],
    directives:[    NgClass,
                    AddElementComponent,
                    PrimitiveElementComponent,
                    ArrayElementComponent,
                    PropertyElementComponent
                ],
})
export class AddElementComponent
{
    public pushdata = new EventEmitter();
    inyectData;
    levelPosition;
    primitiveElementValue;
    arrayElementValue;
    propertyPrimitiveElementValue;
    propertyValuePrimitiveElementValue;
    propertyValueArrayElementValue;
    mode;
    typeSelector;
    orderPosition;
    selectedPosition;

    constructor(private _langService: LangService)
    {
        this.mode='primitive';
        this.typeSelector='primitive-primitive';
    }

    changeMode(mode)
    {
        this.mode = mode;
    }

    add()
    {

        if(!this.validePush())
            return false;

        if(this.mode==='primitive')
        {
            this.pushdata.next(this.primitiveElementValue);
        }
        if(this.mode==='array')
        {
            this.pushdata.next(this.arrayElementValue);
        }
        if(this.mode==='property-value')
        {
            if(this.typeSelector==='primitive-primitive')
            {
                this.pushdata.next({"property":this.propertyPrimitiveElementValue,
                                    "value":this.propertyValuePrimitiveElementValue
                                    });
            }
            if(this.typeSelector==='primitive-array')
            {
                this.pushdata.next({"property":this.propertyPrimitiveElementValue,
                                    "value":this.propertyValueArrayElementValue
                                    });
            }
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

    setJsonLevel(jsonValue,level)
    {
        this[level]=jsonValue;
    }

    validePush():boolean
    {
        if(this.mode==='primitive' && this.primitiveElementValue)
            return true;
        if(this.mode==='array' && this.arrayElementValue)
            return true;
        if(this.mode==='property-value' && this.propertyPrimitiveElementValue)
        {
            if( this.typeSelector==='primitive-primitive' &&
                this.propertyValuePrimitiveElementValue)
                return true;
            if(this.typeSelector==='primitive-array'&&
                this.propertyValueArrayElementValue)
                return true;
        }
        return false;
    }

}