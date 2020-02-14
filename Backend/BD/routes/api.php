<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listaVendedores','UserController@listSellers');
Route::get('listaUsers','UserController@listUser');
Route::get('mostraUser/{id}','UserController@showUser');
Route::get('userProdutos/{id}', 'UserController@userProducts');
Route::get('visualizar/{id}','UserController@visualize');
Route::get('listaProdutos/{id}', 'UserController@userProducts');
Route::post('registraUser','API\PassportController@registerUser');
Route::post('loginUser','API\PassportController@login');
Route::put('atualizaUser/{id}','UserController@updateUser');
Route::delete('deletaUser/{id}','UserController@deleteUser');


Route::get('listaTodosProdutos/','ProductController@listProduct');
Route::get('mostraProduto/{id}', 'ProductController@showProduct');

Route::get('ProdutosUsuario/{id}', 'ProductController@produtosUser');


Route::group(['middleware'=>'auth:api'],function(){
    Route::get('logoutUser','API\PassportController@logout');
    Route::post('getDetailsUser','API\PassportController@getDetails');
    Route::put('criaProduto','UserController@postarProduto');
    Route::put('atualizaPerfil','API\PassportController@update');
    Route::put('compraProduto/{id}','UserController@sale');

});
