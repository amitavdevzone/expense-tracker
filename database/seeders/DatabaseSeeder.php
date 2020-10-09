<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'Amitav Roy',
            'email' => 'reachme@amitavroy.com',
            'password' => \bcrypt('password'),
        ]);

        User::create([
            'name' => 'Jhon Doe',
            'email' => 'jhon@amitavroy.com',
            'password' => \bcrypt('password'),
        ]);

        $this->call([
            ExpenseSeeder::class,
        ]);
    }
}
