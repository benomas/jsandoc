<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jsandoc extends Model
{
    protected $table = 'json_data';

    public static function getJsandoc($namespace)
    {
        return JsAnDoc::where('namespace', $namespace)->first()->information;
    }
}
