<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;

class Type extends Model
{
    public function products()
    {
        return $this->hasMany('App\Product');
    }
}
