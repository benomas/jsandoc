import {bootstrap}          from 'angular2/platform/browser'
import { HTTP_PROVIDERS }   from 'angular2/http';
import { AppComponent}       from './app.component'
import { JsandocService }    from './jsandoc.service';
import 'rxjs/Rx';

bootstrap(AppComponent,[HTTP_PROVIDERS,JsandocService]);
