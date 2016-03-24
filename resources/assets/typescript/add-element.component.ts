import {Component,EventEmitter}     from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import {PrimitiveElementComponent}  from './primitive-element.component';
import {ArrayElementComponent}      from './array-element.component';
import {PropertyElementComponent}   from './property-element.component';
import {LangService}                from './lang.service';

@Component({
    selector: 'add-element',
    templateUrl: 'templates/add-element.html',
    inputs: ['section','dataType'],
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
    propertyElementValue;

    propertyPrimitiveElementValue;
    propertyValuePrimitiveElementValue;
    propertyArrayPrimitiveElementValue;
    propertyPropertyElementValue;
    mode;
    typeSelector;
    orderPosition;
    selectedPosition;
    section;
    dataType;

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
        switch(this.mode)
        {
            case 'primitive'            :   this.pushdata.next({"jsonValue":this.primitiveElementValue,"position":this.getPosition()}); break;
            case 'array'                :   this.pushdata.next({"jsonValue":this.arrayElementValue,"position":this.getPosition()}); break;
            case 'property-value'       :   this.pushdata.next({"jsonValue":this.propertyElementValue,"position":this.getPosition()}); break;
            case 'primitive-primitive'  :   this.pushdata.next({"newProperty":this.propertyPrimitiveElementValue,"newValue":this.propertyValuePrimitiveElementValue}); break;
            case 'primitive-array'      :   this.pushdata.next({"newProperty":this.propertyPrimitiveElementValue,"newValue":this.propertyArrayPrimitiveElementValue}); break;
            case 'primitive-property'   :   this.pushdata.next({"newProperty":this.propertyPrimitiveElementValue,"newValue":this.propertyPropertyElementValue}); break;
        }
    }

    getModeAsInt()
    {
        switch(this.mode)
        {
            case 'primitive'            :return 1;
            case 'array'                :return 2;
            case 'property-value'       :return 3;
            case 'primitive-primitive'  :return 4;
            case 'primitive-array'      :return 5;
            case 'primitive-property'   :return 6;
        }
        return 0;
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
        if(this.mode==='property-value' && this.propertyElementValue)
            return true;
        if( this.mode==='primitive-primitive' &&
            this.propertyPrimitiveElementValue &&
            this.propertyValuePrimitiveElementValue)
            return true;
        if( this.mode==='primitive-array' &&
            this.propertyPrimitiveElementValue &&
            this.propertyArrayPrimitiveElementValue)
            return true;
        if( this.mode==='primitive-property' &&
            this.propertyPrimitiveElementValue &&
            this.propertyPropertyElementValue)
            return true;
        return false;
    }

    getPosition()
    {
        var selectedPosition    = this.section.length;
        var orderPosition       = 'after';

        if(typeof this.selectedPosition!== 'undefined')
            selectedPosition= this.selectedPosition;

        if(typeof this.orderPosition!== 'undefined')
            orderPosition= this.orderPosition

        if( orderPosition==='after')
            return selectedPosition;

        if( orderPosition==='before')
            return selectedPosition - 1;

        return 0;
    }
}