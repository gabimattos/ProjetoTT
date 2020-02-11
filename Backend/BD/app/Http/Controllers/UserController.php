<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Resources\User as UserResource;
use App\User;

class UserController extends Controller
{
    public function storeUser(UserRequest $request){
        $user = new User;
        $user->createUser($request);
        return response()->json([$user]);
    }

    public function listUser(){
        $paginator = User::paginate(10);
        $user = UserResource::collection($paginator);
        $last = $paginator->lastPage();
        return response()->json(['data'=> [$user,$last]]);
    }

    public function showUser($id){

        $user = User::findOrFail($id);
        return response()->json(UserResource::collection([$user]));
    }


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
}
