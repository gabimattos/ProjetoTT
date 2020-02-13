<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Exceptions\HttpResponseException;

use App\Product;


class ProductController extends Controller
{
  // public function storeProduct(Request $request){
  //     $product = new Product;
  //     $product->createProduct($request);
  //     return response()->json([$product]);
  // }

  public function listProduct(){
      return response()->json(Product::all());
  }

  public function showProduct($id){

      $product = Product::findOrFail($id);
      return response()->json($product);
  }


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
    $produto=User::find($user_id);
    return $produto->produto;
  }
}
