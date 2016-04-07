<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $table = 'resume';

    public static function getResume($url_name)
    {
        return Resume::where('url_name', $url_name)->first()->information;
    }
}
