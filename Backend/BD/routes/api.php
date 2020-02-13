<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listaVendedores','UserController@listSellers');
Route::get('listaUsers','UserController@listUser');
Route::get('mostraUser/{id}','UserController@showUser');
Route::get('userProdutos/{id}', 'UserController@userProducts');


Route::put('atualizaUser/{id}','UserController@updateUser');
Route::delete('deletaUser/{id}','UserController@deleteUser');
// Route::post('criaUser','UserController@storeUser');



Route::post('registraUser','API\PassportController@registerUser');
Route::post('loginUser','API\PassportController@login');

Route::get('mostraProduto/{id}', 'ProductController@showProduct');
Route::get('listaProdutos/{id}', 'UserController@userProducts');
Route::get('listaProdutos', 'ProductController@listProduct');


Route::group(['middleware'=>'auth:api'],function(){
    Route::put('criaProduto','UserController@postarProduto');
    Route::get('logoutUser','API\PassportController@logout');
    Route::post('getDetailsUser','API\PassportController@getDetails');
    Route::put('atualizaPerfil','API\PassportController@update');


});

Route::get('visualizar/{id}','UserController@visualize');
