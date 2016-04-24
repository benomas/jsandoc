import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class DocService
{
    constructor (private http: Http)
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

    postDoc()
    {
        return this.http.get(this._docUrl).map((res:Response) => JSON.parse(res.json().data));
    }

    putDoc()
    {

    }

    deleteDoc()
    {

    }

}