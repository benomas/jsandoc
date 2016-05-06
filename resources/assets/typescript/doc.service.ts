import {Injectable}                             from 'angular2/core';
import {Http, Response,Headers, RequestOptions} from 'angular2/http';
import {Observable}                             from 'rxjs/Observable';
import { ExRequestOptions }                     from './ex-request.options';
import { BrowserDomAdapter }                    from 'angular2/platform/browser';
@Injectable()
export class DocService
{
    constructor (private http: Http,private _domAdapter: BrowserDomAdapter)
    {
    }

    private _docUrl = 'doc/';  // URL to web api
    doc;

    getDoc(user_namespace,doc_namespace)
    {
        /*if(typeof docUrl!=='string')
            return Promise.resolve(null);*/
        return this.http.get(this._docUrl+user_namespace+'/'+doc_namespace).map((res:Response) => JSON.parse(res.json().data));
    }

    private handleError (error: Response)
    {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    postDoc(doc)
    {
        let options = new ExRequestOptions();
        options.appendHeaders('Content-Type', 'application/json');
        doc._token =this._domAdapter.getAttribute(this._domAdapter.query('meta'),'content');
        options.appendHeaders('X-CSRF-TOKEN',doc._token);
        return this.http.post('doc',JSON.stringify(doc),options).map((res:Response) => res.json().status);
    }

    putDoc()
    {

    }

    deleteDoc()
    {

    }

}