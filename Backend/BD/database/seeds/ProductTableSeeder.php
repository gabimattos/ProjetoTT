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
          'price'=>'5.99',
          'quantity'=>'5',
          'user_id'=>'1'
        ]);
        DB::table('products')->insert([
          'productName'=>'Banana',
          'price'=>'4.99',
          'quantity'=>'4',
          'user_id'=>'2'
        ]);
        DB::table('products')->insert([
          'productName'=>'Maçâ',
          'price'=>'3.99',
          'quantity'=>'1',
          'user_id'=>'3'
        ]);
        DB::table('products')->insert([
          'productName'=>'Beterraba',
          'price'=>'7.90',
          'quantity'=>'3',
          'user_id'=>'2'
        ]);
    }
}
