@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h1>Expenses <div class="float-right"><a href="{{ route('expense.add') }}" class="btn btn-primary">Add Expense</a></div></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-header">My Expenses</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                            <th>View/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($expenses as $expense)
                            <tr>
                                <td>{{$expense->id}}</td>
                                <td>{{$expense->description}}</td>
                                <td>{{$expense->category}}</td>
                                <td>{{$expense->payment_method}}</td>
                                <td>{{$expense->date}}</td>
                                <td>
                                    <a href="{{ route('expense.view', $expense->id) }}" class="mr-3">View</a>
                                    <a href="{{ route('expense.delete', $expense->id) }}" class="mr-3">Delete</a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            {{$expenses->render()}}
        </div>
    </div>
</div>
@endsection
