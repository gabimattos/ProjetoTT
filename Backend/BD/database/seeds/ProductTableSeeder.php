<?php

use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
          'productName'=>'Pera',
          'price'=>'3',
          'quantity'=>'5',
          'user_id'=>'1'
        ]);
        DB::table('products')->insert([
          'productName'=>'Pera',
          'price'=>'3',
          'quantity'=>'5',
          'user_id'=>'2'
        ]);
        DB::table('products')->insert([
          'productName'=>'Pera',
          'price'=>'3',
          'quantity'=>'5',
          'user_id'=>'3'
        ]);
        DB::table('products')->insert([
          'productName'=>'Pera',
          'price'=>'3',
          'quantity'=>'5',
          'user_id'=>'2'
        ]);
    }
}
