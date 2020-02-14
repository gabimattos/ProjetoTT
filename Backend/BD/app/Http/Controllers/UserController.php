<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Resources\User as UserResource;
use App\User;
use Auth;
use App\Product;

class UserController extends Controller
{

//Lista todos os Vendedores
  public function listSellers(Request $request){
      $user=User::where('typeuser', 'true')->get();
      return response()->json([$user]);
  }

// chama a função que cria um usuário
    public function storeUser(UserRequest $request){
        $user = new User;
        $user->createUser($request);
        return response()->json([$user]);
    }

//lista usuários
    public function listUser(){
        $paginator = User::paginate(10);
        $user = UserResource::collection($paginator);
        $last = $paginator->lastPage();
        return response()->json(['data'=> [$user,$last]]);
    }

//Mostra usuário específico
    public function showUser($id){
        $user = User::findOrFail($id);
        return response()->json(UserResource::collection([$user]));
    }

//Apaga usuário
    public function deleteUser($id){
        $user = User::findOrFail($id);
        Storage::delete($user->photo);
        User::destroy($id);
        return response()->json(['Usuario deletado']);
    }

    public function visualize($id){
        $user = User::findOrFail($id);
        return Storage::download($user->photo);
    }

     public function userProducts($id) {
    $user = User::with('products')->find($id);
    return $user;
}

//Comprar produto
    public function sale($idProduct){
      $user=Auth::user();
      $product=Product::findOrFail($idProduct);
      $user->products()->attach($idProduct);
      $product->quantity--;

      $user->save();
      $product->save();

      return response()->json("Compra efetuada");
    }
// Posta Produto
     public function postarProduto(Request $request){

       $user=Auth::user();
       $produto=new Product;
       $produto->createProduct($request);
       $produto->user_id = $user->id;

       $produto->save();
       return response()->json($produto);

     }
}
