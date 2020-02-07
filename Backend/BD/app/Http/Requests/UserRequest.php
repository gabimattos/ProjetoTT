<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\User;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->isMethod('post')){
            return [
                'name' => 'required|string',
                'password' => 'required|string',
                'email' => 'required|email|unique:users',
                'state' => 'required|string',
                'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048',
                'store_name' => 'string',
                'CNPJ' => 'cnpj',
                'product_type' => 'string',
                'description' => 'string'
            ];
        }

    }

    public function messages(){
        return [
            'nome.alpha' => 'O nome deve ter apenas de letras',
            'email.unique' => 'Ja existe uma conta com esse email',
            
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new
        HttpResponseException(response()->json($validator->errors(),422));
    }
}
