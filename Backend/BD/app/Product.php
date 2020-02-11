<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Purchase;
use App\Type;
use Illuminate\Http\Request;

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


    public function createProduct(Request $request){
        $this->productName = $request->productName;
        $this->price = $request->price;
        $this->quantity = $request->quantity;
        $this->type = $request->type;
        $this->user_id = $request->user_id;
        $this->description = $request->description;

        $this->save();


    }


    // public function updateProduct($request){
    //     if($request->name){
    //         $this->name = $request->name;
    //     }
    //     if($request->price){
    //         $this->price = $request->price;
    //     }
    //     if($request->quantity){
    //         $this->quantity = $request->quantity;
    //     }
    //     if($request->description){
    //         $this->description = $description->state;
    //     }
    //
    //     if($request->photo){
    //         if(!Storage::exists('localPhotos/'))
    //             Storage::makeDirectory('localPhotos/',0775,true);
    //         $file = $request->file('photo');
    //         $filename = $this->id.'.'.$file->getClientOriginalExtension();
    //         $path = $file->storeAs('localPhotos',$filename);
    //         $this->photo = $path;
    //     }
    //     $this->save();
    // }

}
