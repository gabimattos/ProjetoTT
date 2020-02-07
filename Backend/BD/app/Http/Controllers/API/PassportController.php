<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\User;
use App\Product;
use Auth;
use DB;

class PassportController extends Controller
{
    public $successStatus = 200;

    //User

    public function registerUser(UserRequest $request){
        $newUser = new User;
        
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);
        $newUser->state = $request->state; 
        if($newUser->seller == True){
            $newUser->store_name = $request->store_name;
            $newUser->CNPJ = $request->CNPJ;
            $newUser->product_type = $request->product_type;
            $newUser->description = $request->description;
        }
        $newUser->save();
        $success['token'] = $newUser->createToken('MyApp')->accessToken;
        $success['name'] = $newUser->name;
        return response()->json(['success' => $success], $this->successStatus);
    } 
   
    public function login(){
        if(Auth::attempt(['email' => request('email'),'password' => request('password')])){
            $user = Auth::user();
            $success['token'] = $user -> createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function getDetails(){
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }   

    public function update(Request $request){

        $user = Auth::user();

        if($user){
            $user->updateProfile($request);
            return response()->json([$user]);
        }
        else{
            return response()->json(['Este usuario nao existe']);
        }
        
    }

    public function logout(){
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json(null,204);
    }

    //Product

    public function registerProduct(Request $request){
        $user = Auth::user();
        $product = new Product;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        if(!Storage::exists('localPhotos/'))
                Storage::makeDirectory('localPhotos/',0775,true);
            $file = $request->file('photo');
            $filename = $product->id.'.'.$file->getClientOriginalExtension();
            $path = $file->storeAs('localPhotos',$filename);
            $product->photo = $path;
        if($request->description){
            $product->description = $request->description;
        }
        if($request->type){
            $product->type = $request->type;
        }
        $product->seller_id = $user->id;
        $product->save();
        return response()->json(['Produto criado com sucesso!']);
    }

    
}
