import {Component,EventEmitter}     from 'angular2/core';
import {NgClass}                    from 'angular2/common';
import {AddElementComponent}        from './add-element.component';
import {LangService}                from './lang.service';

@Component({
    selector: 'resume-section',
    templateUrl: 'templates/resume-section.html',
    inputs: ['section','sectionTitle','sectionParent'],
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
export class ResumeSectionComponent
{
    public childover = new EventEmitter();
    public childleave = new EventEmitter();
    section;
    sectionTitle;
    sectionParent;
    childElementOver;
    overThisElement = false;
    hiddens = [];
    newElement;

    constructor(private _langService: LangService)
    {
    }

    doubleLevelArray(level):boolean
    {
        var pureArray = true;
        if(this.isArray(level))
        {
            level.forEach((subLevel) =>
            {
                if(!this.isArray(subLevel))
                {
                    pureArray = false;
                    return false;
                }
            });
        }
        return pureArray;
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

    panelToggle(level):boolean
    {
        if(!this.isArray(level.value))
            return false;
        var position =this.hiddenPosition(level);
        if(position!==null)
            this.hiddens.splice(position, 1);
        else
            this.hiddens.push(level);
    }

    hiddenPosition(level)
    {
        var levelHidden = null;
        this.hiddens.forEach((subLevel,index) =>
        {
            if(level===subLevel)
                levelHidden = index;
        });
        return levelHidden;
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

        if(this.doubleLevelArray(this.section))
            return 'array-array';

        if(this.isArray(item))
            return "array";

        if(!this.isArray(item.value))
            return "property-value";


        return "property-array";
    }

    add(value)
    {
        this.section.push(value);
    }
}