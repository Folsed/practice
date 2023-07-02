<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'surname' => 'required|string',
            'pronoun' => 'required|string',
            'nationality' => 'required|string',
            'organization' => 'required|string',
            'post' => 'required|string',
            'birthday' => 'required|date',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed',
            ]
        ];
    }
}
