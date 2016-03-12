import {Component}      from 'angular2/core';
import {LangService}    from './lang.service';

@Component({
    selector: 'resume-section',
    templateUrl: 'templates/resume-section.html',
    inputs: ['section','sectionTitle'],
    directives:[ResumeSectionComponent],
})
export class ResumeSectionComponent
{
    section;
    sectionTitle;
    visible: boolean = true;

    constructor(private _langService: LangService)
    {
    }
    canBeRendered(level):boolean
    {
        return !this.isObject(level);
    }

    isPureArray(level):boolean
    {
        if(this.isArray(level))
        {
            level.forEach((subLevel) =>
            {
                if(typeof subLevel ==='object' && !this.isArray(subLevel))
                    return false;
            });
        }
        return true;
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

    panelToggle():void
    {
        this.visible = !this.visible;
    }
}