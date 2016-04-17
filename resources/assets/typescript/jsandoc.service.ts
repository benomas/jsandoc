import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class JsandocService
{
    constructor (private http: Http)
    {
    }

    private _jsandocUrl = 'jsandoc/';  // URL to web api
    jsandoc;

    getJsandoc(jsandocUrlParam)
    {
        /*if(typeof jsandocUrlParam!=='string')
            return Promise.resolve(null);*/
        return this.http.get(this._jsandocUrl+jsandocUrlParam).map((res:Response) => JSON.parse(res.json().data));
    }

    private handleError (error: Response)
    {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    postJsandoc()
    {
        return this.http.get(this._jsandocUrl).map((res:Response) => JSON.parse(res.json().data));
    }

    putJsandoc()
    {

    }

    deleteJsandoc()
    {

    }

}