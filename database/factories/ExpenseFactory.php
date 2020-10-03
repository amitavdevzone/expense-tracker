<?php

namespace Database\Factories;

use App\Models\Expense;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Expense::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $expenseCategory = config('expense.expense_category');
        $paymentMethods = config('expense.payment_method');

        return [
            'description' => $this->faker->sentence(4),
            'date' => $this->faker->date('Y-m-d'),
            'amount' => $this->faker->numberBetween(50, 500),
            'category' => $this->faker->randomElement($expenseCategory),
            'user_id' => 1,
            'payment_method' => $this->faker->randomElement($paymentMethods),
        ];
    }
}
