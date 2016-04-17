import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class ResumeService
{
    constructor (private http: Http)
    {
    }

    private _resumeUrl = '/resume/resume/';  // URL to web api
    resume;

    getResume(resumeUrlParam)
    {
       /* if(typeof resumeUrlParam!=='string')
            return Promise.resolve(null);*/
        return this.http.get('/resume/resume/'+resumeUrlParam).map((res:Response) => JSON.parse(res.json().data));
    }

    private handleError (error: Response)
    {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    postResume()
    {
        return this.http.get(this._resumeUrl).map((res:Response) => JSON.parse(res.json().data));
    }

    putResume()
    {

    }

    deleteResume()
    {

    }

}