<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Lindsey',
            'email' => 'lindsey@example.com',
            'password' => bcrypt('pizza123'),
            'email_verified_at' => now(),
        ]);

        Project::factory()
                ->count(10)
                ->hasTasks(4)
                ->create();
    }
}
