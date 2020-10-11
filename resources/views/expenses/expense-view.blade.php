@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">View expense</div>
                <div class="card-body">
                <form action="{{ route('expense.update') }}" method="post">
                    @include('expenses.expense-form-partial')
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
