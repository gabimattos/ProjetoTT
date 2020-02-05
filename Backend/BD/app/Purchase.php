<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Product;

class Purchase extends Model
{
    public function users()
    {
        return $this->belongsTo('App\User');
    }

    public function products()
    {
        return $this->belongsTo('App\Product');
    }
}
