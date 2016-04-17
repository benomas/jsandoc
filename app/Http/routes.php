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

    Route::get('jsandoc', function()
    {
        return 'lala';
    });
/*
    Route::get('jsoandoc/cda', function()
    {
        return 'test1';
    });
    Route::get('/jsoandoc/cda', function()
    {
        return 'test2';
    });
    Route::get('jsoandoc/', function()
    {
        return 'test3';
    });
    Route::get('/jsoandoc/cda', function()
    {
        return 'test4';
    });
    Route::get('/jsoandoc/jsoandoc/cda', function()
    {
        return 'test5';
    });
    Route::get('/jsoandoc/jsoandoc/cda', function()
    {
        return 'test6';
    });
    Route::get('/jsoandoc/jsoandoc/jsandoc', function()
    {
        return 'test7';
    });
*/
    Route::resource('jsandoc', 'JsandocController');

    Route::get('shared/{url_name}', function ()
    {
        return view('main');
    });
});

Route::group(['middleware' => ['web','auth']], function ()
{
    //Route::get('/', 'ResumeViewController@index');

    Route::get('/', function ()
    {
        return view('main');
    });

    Route::get('new/', function ()
    {
        return view('main');
    });

    Route::get('edit/{url_name}', function ()
    {
        return view('main');
    });

    Route::get('show/{url_name}', function ()
    {
        return view('main');
    });

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
