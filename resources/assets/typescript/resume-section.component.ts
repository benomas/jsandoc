import {Component,EventEmitter}      from 'angular2/core';
import {NgClass} from 'angular2/common';
import {LangService}    from './lang.service';

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
                .section-iterator
                {
                    border-left:2px solid #FFFFFF;
                    border-bottom:1px solid #FFFFFF;
                }
                .section-iterator:hover
                {
                    border-left:2px solid #CCCCCC;
                    border-bottom:1px solid #CCCCCC;
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
                `
            ],
    directives:[ResumeSectionComponent,NgClass],
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
    constructor(private _langService: LangService)
    {
    }
    canBeRendered(level):boolean
    {
        return !this.isObject(level);
    }

    isPureArray(level):boolean
    {
        var pureArray = true;
        if(this.isArray(level))
        {
            level.forEach((subLevel) =>
            {
                if(!this.isArray(subLevel))
                    pureArray = false;
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
}