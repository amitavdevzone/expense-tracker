@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h1>Add Expense</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Add expense</div>
                <div class="card-body">
                <form action="{{ route('expense.save') }}" method="post">
                    @include('expenses.expense-form-partial')
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
