<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Exceptions\HttpResponseException;

use App\Product;


class ProductController extends Controller {

//Lista todos os Produtos
  public function listProduct(){
      $product=Product::where('quantity', '>=', 1)->get();
      return response()->json([$product]);
  }

//Mostra um produto específico
  public function showProduct($id){
      $product = Product::findOrFail($id);
      return response()->json($product);
  }
//Apaga Produto
  public function deleteProduct($id){
      $product = Product::findOrFail($id);
      Storage::delete($product->photo);
      Product::destroy($id);
      return response()->json(['Produto deletado']);
  }

  public function visualize($id){
      $product = Product::findOrFail($id);
      return Storage::download($product->photo);
  }

  public function produtosUser($user_id){
    $product=Product::where('user_id',$user_id)->where('quantity','>=',1)->get();
    return response()->json([$product]);

  }
}
