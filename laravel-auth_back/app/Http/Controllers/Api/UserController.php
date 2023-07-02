<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsers()
    {
        return response()->json([
            'users' => UsersResource::collection(User::orderByDesc('created_at')->get()),
        ]);
    }

    public function editUser(Request $request)
    {
        /** @var \App\Models\User $user **/
        $user = Auth::user();

        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->pronoun = $request->input('pronoun');
        $user->nationality = $request->input('nationality');
        $user->organization = $request->input('organization');
        $user->post = $request->input('post');
        $user->birthday = $request->input('birthday');
        $user->email = $request->input('email');

        $user->save();

        return response()->json([
            'user' => $user,
        ]);
    }
}
