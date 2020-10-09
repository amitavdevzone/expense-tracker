<?php

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
});
