<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('state');
            $table->integer('delivery_price')->default('8');
            $table->string('photo')->default('storage/localPhotos/PerfilDefault.png');
            $table->boolean('admin')->default('0');
            $table->boolean('seller')->nullable();
            $table->string('store_name')->nullable();
            $table->string('CNPJ')->nullable();
            $table->string('product_type')->nullable();
            $table->longText('description')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
