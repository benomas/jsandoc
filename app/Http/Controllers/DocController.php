<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doc AS Doc;
use Auth;

use App\Http\Requests;

class DocController extends Controller
{
    protected $docModel;

    public function __construct()
    {
        $this->docModel = new Doc;
    }

    public function doc_data($user_namespace='',$doc_namespace='')
    {
        $doc_result = Doc::getDoc($user_namespace,$doc_namespace);
        $doc_result->doc = json_decode($doc_result->doc);
        return response()->json(['status'=>'ok','data'=>json_encode($doc_result)], 200);
    }

    public function store(Request $request)
    {
        $data['name']           = $request->input('name');
        $data['title']          = $request->input('title');
        $data['doc_namespace']  = $request->input('doc_namespace');
        $newDoc = $this->docModel->postDoc($data);
        if($newDoc)
            return response()->json(['status'=>'ok','data'=>[1]], 200);
        return response()->json(['status'=>'error','data'=>[1]], 400);
    }

}
