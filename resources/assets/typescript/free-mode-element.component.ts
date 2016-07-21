import {
            Component,
            EventEmitter,
            OnInit,
            OnChanges,
            SimpleChange
        }                       from 'angular2/core';
import {NgClass}                from 'angular2/common';
import {LangService}            from './lang.service';

@Component({
    selector: 'free-mode-element',
    templateUrl: 'templates/free-mode-element.html',
    inputs: [
                'freeModeElementPlaceHolder',
                'freeModeElementTitle',
                'jsonValue',
                'switchable',
            ],
    outputs:['sendData','emitSubmit','wasReset'],
    directives:[
                    NgClass,
                    FreeModeElementComponent
                ],
})
export class FreeModeElementComponent implements OnInit
{
    public sendData     = new EventEmitter();
    public emitSubmit   = new EventEmitter();
    public wasReset     = new EventEmitter();
    jsonValue;
    jsonFreeModeValue;
    validModes;//the valid modes are, view, edition,edition-view
    initialMode;
    currentMode;
    originalValue;
    emptyValue;
    switchable;
    inputType;


    constructor(private _langService: LangService)
    {
        this.initialMode
    }

    ngOnInit()
    {
        try
        {
            this.jsonFreeModeValue  = JSON.stringify(this.jsonValue);
        }
        catch (e)
        {
            alert('Valor invalido');
        }
    }

    trySubmit()
    {
        try
        {
            this.jsonValue = JSON.parse(this.jsonFreeModeValue);
            this.emitSubmit.next(this.jsonValue);
            console.log('test');
        }
        catch (e)
        {
            alert('Valor invalido');
            this.emitSubmit.next(this.jsonValue);
        }
    }

}