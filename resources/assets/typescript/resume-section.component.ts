import {Component,PipeTransform}      from 'angular2/core';
import {LangService}    from './lang.service';

@Component({
    selector: 'resume-section',
    templateUrl: 'templates/resume-section.html',
    inputs: ['section']
})
@Pipe({ name: 'values',  pure: false })
export class ResumeSectionComponent implements PipeTransform
{
    transform(value: any, args: any[] = null): any
    {
        return Object.keys(value).map(key => value[key]);
    }
    section;
}