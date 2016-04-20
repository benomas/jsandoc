<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJsonDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('json_data', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('users_id')->unsigned();
            $table->string('name', 254);
            $table->string('title', 254);
            $table->string('namespace', 254)->unique();
            $table->text('information');
            $table->timestamps();
            $table->foreign('users_id')->references('id')
            ->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('json_data');
    }
}
