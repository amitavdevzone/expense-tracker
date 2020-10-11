<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class ExpenseController extends Controller
{
    private $expenseCategories;
    private $paymentMethods;
    private $rules = [];

    public function __construct()
    {
        $this->expenseCategories = config('expense.expense_category');
        $this->paymentMethods = config('expense.payment_method');

        $this->rules = [
            'description' => ['required', 'min:3'],
            'date' => ['required', 'date'],
            'amount' => ['required', 'min:1'],
            'category' => ['required', Rule::in($this->expenseCategories)],
            'payment_method' => ['required', Rule::in($this->paymentMethods)],
        ];
    }

    public function index()
    {
        $expenses = Expense::orderByDesc('id')
            ->paginate(5);

        return view('expenses.expense-index')
            ->with('expenses', $expenses);
    }

    public function add()
    {
        return view('expenses.expenses-add')
            ->with('expense', new Expense)
            ->with('expenses', $this->expenseCategories)
            ->with('paymentMethods', $this->paymentMethods);
    }

    public function store(Request $request)
    {
        $postData = $this->validate($request, $this->rules);

        $postData['user_id'] = Auth::user()->id;

        Expense::create($postData);

        return redirect()->back();
    }

    public function view(Expense $expense)
    {
        return view('expenses.expense-view')
            ->with('expense', $expense)
            ->with('expenses', $this->expenseCategories)
            ->with('paymentMethods', $this->paymentMethods);;
    }

    public function update(Request $request)
    {
        $this->rules['id'] = ['required','exists:expenses,id'];
        $postData = $this->validate($request, $this->rules);

        $expenseId = $postData['id'];
        unset($postData['id']);

        Expense::where('id', $expenseId)
            ->update($postData);

        return redirect()->back();;
    }

    public function delete(Expense $expense)
    {
        if ($expense->user_id !== Auth::user()->id) {
            abort(401, 'You cannot delete any other user\'s entry.');
        }

        $expense->delete();

        return redirect()->route('expense.list');
    }
}
