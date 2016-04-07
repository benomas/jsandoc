<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Resume AS Resume;

use App\Http\Requests;

class ResumeController extends Controller
{
    public function show($url_name)
    {
        return response()->json(['status'=>'ok','data'=>Resume::getResume($url_name)], 200);
    }
}
