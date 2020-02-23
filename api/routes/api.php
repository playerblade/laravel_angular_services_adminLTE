<?php

use Illuminate\Http\Request;
//use JWTAuth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([

    'middleware' => 'auth.jwt',
    'prefix' => 'auth'

], function () {
    // Route::post('register', 'AuthController@register');
    Route::post('me', 'AuthController@me');
});

//routes not auth.jwt not protected

Route::group([

    'prefix' => 'auth'

], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
//    Route::post('me', 'AuthController@me');

});


