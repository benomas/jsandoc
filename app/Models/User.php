<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;
use DB;

class User extends Model
{
    protected $table = 'user';

    public static function getUserDocs()
    {
        $usersId = Auth::id();
        $usersDocs = DB::table('doc AS d')
                    ->join('user_profile AS up', function($join) use ($usersId)
                    {
                        $join->where('up.users_id', '=', $usersId );
                    })
                    ->select('d.id', 'd.name', 'd.title','up.namespace AS user_namespace','d.namespace AS doc_namespace')
                    ->where('d.users_id', '=', $usersId)
                    ->get();

        return $usersDocs;
    }

    public static function getUserProfile()
    {
        $usersId = Auth::id();
        $usersProfile = DB::table('users AS u')
                    ->join('user_profile AS up', function($join) use ($usersId)
                    {
                        $join->where('up.users_id', '=', $usersId );
                    })
                    ->select(   'up.id',
                                'up.name',
                                'up.first_last_name',
                                'up.second_last_name',
                                'u.email',
                                'up.namespace AS user_namespace')
                    ->where('u.id', '=', $usersId)
                    ->first();

        return $usersProfile;
    }
}
