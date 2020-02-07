<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Storage;
use App\Product;
use App\Purchase;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens; 

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function products()
    {
        return $this->hasMany('App\Product');
    }
    
    public function purchases()
    {
        return $this->hasMany('App\Purchase');
    }

    public function createUser($request){
        $this->name = $request->name;
        $this->password = $request->password;
        $this->email = $request->email;
        $this->state = $request->state;
        $this->save();
    }

    public function updateProfile($request){
        if($request->name){
            $this->name = $request->name;
        }
        if($request->email){
            $this->email = $request->email;
        }
        if($request->password){
            $this->password = $request->password;
        }
        if($request->state){
            $this->state = $request->state;
        }
        if($request->delivery_price){
            $this->delivery_price = $request->delivery_price;
        }
        if($request->photo){
            if(!Storage::exists('localPhotos/'))
                Storage::makeDirectory('localPhotos/',0775,true);
            $file = $request->file('photo');
            $filename = $this->id.'.'.$file->getClientOriginalExtension();
            $path = $file->storeAs('localPhotos',$filename);
            $this->photo = $path;
        }
        $this->save();
    }
}
