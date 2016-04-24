<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doc AS Doc;

use App\Http\Requests;

class DocController extends Controller
{
    public function doc_data($user_namespace='',$doc_namespace='')
    {
        $doc_result = Doc::getDoc($user_namespace,$doc_namespace);
        $doc_result->doc = json_decode($doc_result->doc);
        return response()->json(['status'=>'ok','data'=>json_encode($doc_result)], 200);
    }
}
