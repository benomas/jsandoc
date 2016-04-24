<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class Doc extends Model
{
    protected $table = 'doc';

    public static function getDoc($user_namespace,$doc_namespace)
    {
        //return Doc::where('namespace', $doc_namespace)->first()->information;

        return DB::table('doc AS d')
                    ->join('user_profile AS up', function($join) use ($user_namespace)
                    {
                        $join->where('up.namespace', '=', $user_namespace );
                    })
                    ->select(   'd.id',
                                'd.name',
                                'd.title',
                                'up.namespace AS user_namespace',
                                'd.namespace AS doc_namespace',
                                'd.information AS doc',
                                'd.created_at',
                                'd.updated_at')
                    ->where('d.namespace', '=', $doc_namespace)
                    ->first();
    }
}
