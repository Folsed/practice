<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user_number' => $this->user_number,
            'name' => $this->name,
            'surname' => $this->surname,
            'pronoun' => $this->pronoun,
            'nationality' => $this->nationality,
            'organization' => $this->organization,
            'post' => $this->post,
            'birthday' => $this->birthday,
            'email' => $this->email,
            'created_at' => $this->created_at,
        ];
    }
}
