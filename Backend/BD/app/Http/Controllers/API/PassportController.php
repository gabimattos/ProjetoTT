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
        $newUser->city = $request->city;
        $newUser->state = $request->state;
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

    public function logout(){
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json(null,204);
    }
}
