<?php

use Inertia\Inertia;
use App\Models\Expense;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpenseController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth']], function() {
    Route::get('/expenses', [ExpenseController::class, 'index'])->name('expense.list');
    Route::get('/expense/add', [ExpenseController::class, 'add'])->name('expense.add');
    Route::post('/expense/save', [ExpenseController::class, 'store'])->name('expense.save');
    Route::get('/expense/view/{expense}', [ExpenseController::class, 'view'])->name('expense.view');
    Route::post('/expense/update', [ExpenseController::class, 'update'])->name('expense.update');
    Route::get('/expense/delete/{expense}', [ExpenseController::class, 'delete'])->name('expense.delete');
});

Route::get('check-inertia', function() {
    $expenses = Expense::all();

    return Inertia::render('Home/index', [
        'expenses' => $expenses,
    ]);
});
