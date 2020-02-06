<?php

use Illuminate\Database\Seeder;
use App\State;

class StateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        State::create([
            'name' => 'Acre'
        ]);

        State::create([
            'name' => 'Alagoas'
        ]);

        State::create([
            'name' => 'Amapá'
        ]);

        State::create([
            'name' => 'Amazonas'
        ]);

        State::create([
            'name' => 'Bahia'
        ]);

        State::create([
            'name' => 'Ceará'
        ]);

        State::create([
            'name' => 'Distrito Federal'
        ]);

        State::create([
            'name' => 'Espírito Santo'
        ]);
        
        State::create([
            'name' => 'Goiás'
        ]);

        State::create([
            'name' => 'Maranhão'
        ]);

        State::create([
            'name' => 'Mato Grosso'
        ]);
        
        State::create([
            'name' => 'Mato Grosso do Sul'
        ]);

        State::create([
            'name' => 'Minas Gerais'
        ]);

        State::create([
            'name' => 'Pará'
        ]);

        State::create([
            'name' => 'Paraíba'
        ]);

        State::create([
            'name' => 'Paraná'
        ]);

        State::create([
            'name' => 'Pernambuco'
        ]);

        State::create([
            'name' => 'Piauí'
        ]);

        State::create([
            'name' => 'Rio de Janeiro'
        ]);

        State::create([
            'name' => 'Rio Grande do Norte'
        ]);

        State::create([
            'name' => 'Rio Grande do Sul'
        ]);

        State::create([
            'name' => 'Rondônia'
        ]);

        State::create([
            'name' => 'Roraima'
        ]);

        State::create([
            'name' => 'Santa Catarina'
        ]);

        State::create([
            'name' => 'São Paulo'
        ]);

        State::create([
            'name' => 'Sergipe'
        ]);

        State::create([
            'name' => 'Tocantins'
        ]);
    }
}
