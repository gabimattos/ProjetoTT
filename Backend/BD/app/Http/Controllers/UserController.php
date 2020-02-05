<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            if($request->photo){
                if(!Storage::exists('localPhotos/'))
                    Storage::makeDirectory('localPhotos/',0775,true);
                $file = $request->file('photo');
                $filename = $user->id.'.'.$file->getClientOriginalExtension();
                $path = $file->storeAs('localPhotos',$filename);
                $user->photo = $path;
            }
            $user->save();
            return response()->json([$user]);
        }
        else{
            return response()->json(['Este usuario nao existe']);
        }
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
}
