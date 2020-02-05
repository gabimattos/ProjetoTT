<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Purchase;
use App\Type;

class Product extends Model
{
    public function users()
    {
        return $this->belongsTo('App\User');
    }

    public function types()
    {
        return $this->belongsTo('App\Type');
    }
    
    public function purchases()
    {
        return $this->hasMany('App\Purchase');
    }

}
