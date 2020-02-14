<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
        'name'=>'Gabriela',
        'email'=>'gabi@gmail.com',
        'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'typeuser'=>'true',
      ]);

      DB::table('users')->insert([
        'name'=>'Gabriel',
        'email'=>'gabriel@gmail.com',
        'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'typeuser'=>'true',
      ]);

      DB::table('users')->insert([
        'name'=>'Alvaro',
        'email'=>'alvaro@gmail.com',
        'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'typeuser'=>'true',
      ]);

      DB::table('users')->insert([
        'name'=>'Sabrina',
        'email'=>'sabrina@gmail.com',
        'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'typeuser'=>'true',
      ]);

      DB::table('users')->insert([
        'name'=>'Mileny',
        'email'=>'mileny@gmail.com',
        'password'=>'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'typeuser'=>'false',
      ]);

    }
}
