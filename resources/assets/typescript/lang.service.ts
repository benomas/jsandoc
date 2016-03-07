import {Injectable} from 'angular2/core';
@Injectable()

export class LangService
{
    currentLeng: string = "es";
    currentContext: string ="resume";
    languages = {"es":
                    {
                        "resume":
                        {
                            "resume":"Resumen",
                            "app_title":"Resumen personal"
                        }
                    }
                }
    getSentence(sentence:string)
    {
        try
        {
            return this.languages[this.currentLeng][this.currentContext][sentence];
        }
        catch(err)
        {
        };
        return sentence;
    }
}