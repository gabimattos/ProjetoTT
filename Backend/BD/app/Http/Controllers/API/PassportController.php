<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\User;
use Auth;
use DB;

class PassportController extends Controller
{
    public $successStatus = 200;

    public function registerUser(UserRequest $request){
        $newUser = new User;
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);
        $newUser->typeuser = $request->typeuser;
        $newUser->state = $request->state;
        $newUser->save();
        $success['token'] = $newUser->createToken('MyApp')->accessToken;
        $success['name'] = $newUser->name;
        $success['email'] = $newUser->email;
        return response()->json(['success' => $success], $this->successStatus);
    }



    public function login(){

        if(Auth::attempt(['email' => request('email'),'password' => request('password')])){
            $user = Auth::user();
            $success['token'] = $user -> createToken('MyApp')->accessToken;
            $success['user'] = $user;

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

    public function postarProduto($produto_id){
      $user=Auth::user();
      $produto=Produto::where('id', '$produto_id');

      if(typeuser=="true"){
          $produto->user_id=$user->id;
          $produto->save();
      }
      return response() -> json('Adicionado');

    }
}
