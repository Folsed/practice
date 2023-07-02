<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function () {
    Route::post('api/register', 'register')->name('api.register');
    Route::post('api/login', 'login')->name('api.login');


    Route::middleware('auth:sanctum')->group(function () {
        Route::post('api/logout', 'logout')->name('api.logout');
    });
});

Route::middleware('auth:sanctum')->controller(UserController::class)->group(function () {
    Route::get('api/get/users', 'getUsers')->name('api.get.users');

    Route::post('api/user/edit', 'editUser')->name('api.edit.user');
});