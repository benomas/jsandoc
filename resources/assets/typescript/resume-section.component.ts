import {Component,EventEmitter, OnInit }     from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import {AddElementComponent}        from './add-element.component';
import {LangService}                from './lang.service';

@Component({
    selector: 'resume-section',
    templateUrl: 'templates/resume-section.html',
    inputs: ['section','sectionTitle','sectionParent','editionActive'],
    outputs: ['childover','childleave'],
    styles: [`
                .section-title
                {
                  font-weight:bold;
                }
                .with-child-over
                {
                    text-decoration:underline;
                    color:#204D74;
                }
                .clickeable
                {
                    cursor:pointer;
                }
                .border-left
                {
                    border-left:2px solid #FFFFFF;
                }
                .border-left:hover
                {
                    border-left:2px solid #204D74;
                }

                `
            ],
    directives:[ResumeSectionComponent,NgClass,AddElementComponent],
})
export class ResumeSectionComponent implements OnInit
{
    public childover = new EventEmitter();
    public childleave = new EventEmitter();
    section;
    keys;
    dataType;


    sectionTitle;
    sectionParent;
    editionActive;
    editionOnElement;
    childElementOver;
    overThisElement = false;
    hiddens = [];
    newElement;

    constructor(private _langService: LangService)
    {
        this.editionOnElement=[];
    }

    ngOnInit()
    {
        this.dataType = this.getCase(this.section);
        this.setDataType();
    }

    doubleLevelArray(level):boolean
    {
        var hasDoubleArray = false;
        if(this.isArray(level))
        {
            level.forEach((subLevel) =>
            {
                if(this.isArray(subLevel))
                {
                    hasDoubleArray = true;
                    return true;
                }
            });
        }
        return hasDoubleArray;
    }

    isObject(level):boolean
    {
        if(typeof level ==='object')
            return true;
        return false;
    }

    isArray(level):boolean
    {
        return Object.prototype.toString.call( level ) === '[object Array]';
    }

    panelToggle(position):void
    {
        if( typeof this.hiddens[position]==='undefined')
            this.hiddens[position] = true;
        else
            this.hiddens[position] = !this.hiddens[position];
    }

    hiddenPosition(position)
    {
        if( typeof this.hiddens[position]==='undefined')
            return false;
        return this.hiddens[position];
    }

    overThis(emitter)
    {
        this.overThisElement=emitter;
        this.childover.next(this.section);
    }

    leaveThis(emitter)
    {
        this.overThisElement=null;
        this.childleave.next(this.section);
    }

    notifyOverToParent(parent)
    {
        this.childElementOver = parent;
        this.childover.next(this.section);
    }

    notifyLeaveToParent(parent)
    {
        this.childElementOver = null;
        this.childleave.next(this.section);
    }

    overArrayChild(level)
    {
        if(level === this.childElementOver)
            return true;
        var arrayChild=false;
        level.forEach((subLevel) =>
        {
            if(subLevel===this.childElementOver)
            {
                arrayChild = true;
            }
        });
        return arrayChild;
    }

    getCase(item):string
    {
        if(!this.isObject(item))
            return "primitive";
        /*
        if(this.doubleLevelArray(this.section))
            return 'array-array';*/

        if(this.isArray(item))
            return "array";

        return "property-value";
    }

    add(jsonInsert)
    {
        if(this.dataType === 'array')
            this.section.splice(jsonInsert.position,0 ,jsonInsert.jsonValue );
        if(this.dataType === 'property-value')
        {
            this.section[jsonInsert['newProperty']] = jsonInsert['newValue'];
        }
        this.setDataType();
    }

    setEditionOnElement(position):void
    {
        if( typeof this.editionOnElement[position]==='undefined')
            this.editionOnElement[position]= true;
        else
            this.editionOnElement[position] = !this.editionOnElement[position];
    }

    getEditionOnElement(position):boolean
    {
        if(typeof this.editionOnElement[position]==='undefined')
            return false;
        return this.editionOnElement[position];
    }

    setDataType()
    {
     if( this.dataType ==='property-value' ||
        this.dataType ==='property-array'
        )
        {
            this.keys = Object.keys(this.section).sort();
        }
    }
}