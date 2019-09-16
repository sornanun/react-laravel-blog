<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/**
**Basic Routes for a RESTful service:
**Route::get($uri, $callback);
**Route::post($uri, $callback);
**Route::put($uri, $callback);
**Route::delete($uri, $callback);
**
*/
 
 
Route::get('products', 'ProductsController@index');
 
Route::get('products/{product}', 'ProductsController@show');
 
Route::post('products','ProductsController@store');
 
Route::put('products/{product}','ProductsController@update');
 
Route::delete('products/{product}', 'ProductsController@delete');