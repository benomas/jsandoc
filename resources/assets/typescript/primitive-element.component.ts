import {
            Component,
            EventEmitter
        }                       from 'angular2/core';
import {NgClass}                from 'angular2/common';
import {LangService}            from './lang.service';

@Component({
    selector: 'primitive-element',
    templateUrl: 'templates/primitive-element.html',
    inputs: [
                'primitiveElementPlaceHolder',
                'primitiveElementTitle'
            ],
    outputs:['sendData','emitSubmit'],
    directives:[
                    NgClass,
                    PrimitiveElementComponent
                ],
})
export class PrimitiveElementComponent
{
    public sendData = new EventEmitter();
    public emitSubmit = new EventEmitter();
    jsonValue;

    constructor(private _langService: LangService)
    {
    }

    setData(localJsonValue)
    {
        if(
            this.jsonValue &&
            this.jsonValue!==''
        )
            this.sendData.next(this.jsonValue);
        else
            this.sendData.next(null);
    }

    trySubmit()
    {
        this.emitSubmit.next(true);
    }
}