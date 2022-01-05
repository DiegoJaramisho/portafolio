<?php

use App\Http\Controllers\emailController;
use App\Mail\ContactoMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('contactar',function(){
    $correo = new ContactoMailable();
    Mail::to('diegojaramillo473@gmail.com')->send($correo);
    return "mensaje enviado";

});

Route::get('email',[emailController::class,'email']);
