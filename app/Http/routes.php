<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function ()
{
    // Authentication routes...
    Route::get('auth/login', 'Auth\AuthController@getLogin');
    Route::post('auth/login', 'Auth\AuthController@postLogin');
    Route::get('auth/logout', 'Auth\AuthController@getLogout');

    // Registration routes...
    Route::get('auth/register', 'Auth\AuthController@getRegister');
    Route::post('auth/register', 'Auth\AuthController@postRegister');

    /*Route::get('jsandoc', function()
    {
        return 'lala';
    });*/

    Route::get('doc/{user_namespace}/{doc_namespace}', 'DocController@doc_data');

    Route::get('/{user_namespace}/shared/{doc_namespace}', function ()
    {
        return view('main');
    });

    Route::get('{user_namespace}/shared', function ()
    {
        return redirect('auth/login');
    });
});


Route::group(['middleware' => ['web','auth']], function ()
{
    Route::get('/', function ()
    {
        return redirect(Auth::user()->user_namespace.'/home');
    });

    Route::get('{user_namespace}/home', function ($user_namespace)
    {
        if(Auth::user()->user_namespace!== $user_namespace)
            return redirect(Auth::user()->user_namespace.'/home');

        return view('main');
    });
    Route::get('{user_namespace}/new', function ($user_namespace)
    {
        if(Auth::user()->user_namespace!== $user_namespace)
            return redirect(Auth::user()->user_namespace.'/new');

        return view('main');
    });

    Route::get('{user_namespace}/edit/{doc_namspace}', function ($user_namespace,$doc_namspace)
    {
        if(Auth::user()->user_namespace!== $user_namespace)
            return redirect(Auth::user()->user_namespace.'/home');

        return view('main');
    });

    Route::get('{user_namespace}/edit', function ()
    {
        return redirect(Auth::user()->user_namespace.'/home');
    });


    Route::get('{user_namespace}/show/{doc_namspace}', function ($user_namespace,$doc_namspace)
    {
        if(Auth::user()->user_namespace!== $user_namespace)
            return redirect(Auth::user()->user_namespace.'/home');

        return view('main');
    });

    Route::get('{user_namespace}/show', function ()
    {
        return redirect(Auth::user()->user_namespace.'/home');
    });

    Route::get('user/docs', 'UserController@docs');
    Route::get('user/profile', 'UserController@profile');
    Route::resource('user', 'UserController');
    Route::resource('doc', 'DocController');

});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/
