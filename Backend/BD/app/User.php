<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Product;
use App\Purchase;
use App\State;

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

    public function states()
    {
        return $this->belongsTo('App\State');
    }

    public function createUser($request){
        $this->name = $request->name;
        $this->password = $request->password;
        $this->email = $request->email;
        $this->state_id = $request->state_id;
        $this->save();
    }
}
