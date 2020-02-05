<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Resources\User as UserResource;
use App\User;

class UserController extends Controller
{
    public function storeUser(UserRequest $request){
        $user = new App\User;
        $user->createUser($request);
        return response()->success($user);
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

    public function updateUser(UserRequest $request, $id){

        $user = User::find($id);

        if($user){
            if($request->name){
                $user->name = $request->name;
            }
            if($request->email){
                $user->email = $request->email;
            }
            if($request->password){
                $user->password = $request->password;
            }
            if($request->city){
                $user->city = $request->city;
            }
            if($request->state){
                $user->state = $request->state;
            }
            if($request->delivery_price){
                $user->delivery_price = $request->delivery_price;
            }
            $user->save();
            return response()->json([$user]);
        }
        else{
            return response()->json(['Este usuario nao existe']);
        }
    }

    public function deleteUser($id){

        User::destroy($id);
        return response()->json(['Usuario deletado']);
    }
}
