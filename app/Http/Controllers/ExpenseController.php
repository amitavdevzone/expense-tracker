<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::orderByDesc('id')
            ->paginate(5);

        return view('expenses.expense-index')
            ->with('expenses', $expenses);
    }

    public function add()
    {
        $expenseCategories = \config('expense.expense_category');
        $paymentMethods = \config('expense.payment_method');

        return view('expenses.expenses-add')
            ->with('expenses', $expenseCategories)
            ->with('paymentMethods', $paymentMethods);
    }

    public function store(Request $request)
    {
        $expenseCategories = \config('expense.expense_category');
        $paymentMethods = \config('expense.payment_method');

        $postData = $this->validate($request, [
            'description' => ['required', 'min:3'],
            'date' => ['required', 'date'],
            'amount' => ['required', 'min:1'],
            'category' => ['required', Rule::in($expenseCategories)],
            'payment_method' => ['required', Rule::in($paymentMethods)],
        ]);

        $postData['user_id'] = Auth::user()->id;

        Expense::create($postData);

        return \redirect()->back();
    }
}
