<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Jsandoc AS Jsandoc;

use App\Http\Requests;

class JsandocController extends Controller
{
    public function show($namespaceUrl)
    {
        return response()->json(['status'=>'ok','data'=>Jsandoc::getJsandoc($namespaceUrl)], 200);
    }
}
