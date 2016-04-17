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
            $table->string('name', 254);
            $table->string('title', 254);
            $table->string('namespace', 254)->unique();
            $table->text('information');
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
        Schema::drop('json_data');
    }
}
