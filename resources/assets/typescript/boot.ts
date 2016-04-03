import {bootstrap}          from 'angular2/platform/browser'
import {AppComponent}       from './app.component'
import { HTTP_PROVIDERS }   from 'angular2/http';
import { ResumeService }    from './resume.service';
import 'rxjs/Rx';

bootstrap(AppComponent,[HTTP_PROVIDERS,ResumeService]);
