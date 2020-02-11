<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Product;

class ProductRequest extends FormRequest
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
                'productName' => 'required|string',
                'price' => 'required|number',
                'quantity' => 'required|number',
                // 'type' => 'required|string',
                // 'state_id' => 'required|integer',
                'photo' => 'file|image|mimes:jpeg,png,gif,webp|max:2048',
            ];
        }
    }

    protected function failedValidation(Validator $validator)
    {
        throw new
        HttpResponseException(response()->json($validator->errors(),422));
    }

    public function messages(){
        return [
            'nome.alpha' => 'O nome deve ter apenas letras',
            'email.unique' => 'Ja existe uma conta com esse email',

        ];
    }


}
