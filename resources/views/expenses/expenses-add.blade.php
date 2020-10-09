@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Add expense</div>
                <div class="card-body">
                <form action="{{ route('expense.save') }}" method="post">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" name="description" class="form-control" value="{{old('description')}}">
                        <div class="error">{{$errors->first('description')}}</div>
                    </div>

                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" name="date" class="form-control">
                        <div class="error">{{$errors->first('date')}}</div>
                    </div>

                    <div class="form-group">
                        <label for="amount">Amount</label>
                        <input type="text" name="amount" class="form-control" value="{{old('amount')}}">
                        <div class="error">{{$errors->first('amount')}}</div>
                    </div>

                    <div class="form-group">
                        <label for="category">Category</label>
                        <select name="category" id="category" class="form-control">
                            @foreach($expenses as $expense)
                                <option value="{{$expense}}">{{$expense}}</option>
                            @endforeach
                        </select>
                        <div class="error">{{$errors->first('category')}}</div>
                    </div>

                    <div class="form-group">
                        <label for="payment_method">Payment Method</label>
                        <select name="payment_method" id="payment_method" class="form-control">
                            @foreach($paymentMethods as $paymentMethod)
                                <option value="{{$paymentMethod}}">{{$paymentMethod}}</option>
                            @endforeach
                        </select>
                    </div>

                    <button class="btn btn-primary">Save</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
