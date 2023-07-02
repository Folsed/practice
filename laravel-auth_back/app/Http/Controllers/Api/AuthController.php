<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;


class AuthController extends Controller
{
    public function register(RegistrationRequest $request)
    {
        $faker = Faker::create();

        $user = User::create([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'pronoun' => $request->input('pronoun'),
            'nationality' => $request->input('nationality'),
            'organization' => $request->input('organization'),
            'post' => $request->input('post'),
            'birthday' => $request->input('birthday'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'user_number' => $faker->unique()->randomNumber(6),
        ]);
        $token = $user->createToken('main')->plainTextToken;

        event(new Registered($user));

        Auth::login($user);

        return response()->json([
            'user' => $user,
            'token' => $token,
            'status' => true,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();

        /** @var \App\Models\User $user **/
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response([
            'status' => true,
        ]);
    }
}
