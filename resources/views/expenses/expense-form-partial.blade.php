{{csrf_field()}}
<input type="hidden" name="id" value="{{ $expense->id }}">
<div class="form-group">
    <label for="description">Description</label>
    <input type="text" name="description" class="form-control" value="{{old('description', $expense->description)}}">
    <div class="error">{{$errors->first('description')}}</div>
</div>

<div class="form-group">
    <label for="date">Date</label>
    <input type="date" name="date" class="form-control" value="{{ old('date', Carbon\Carbon::parse($expense->date)->format('Y-m-d')) }}">
    <div class="error">{{$errors->first('date')}}</div>
</div>

<div class="form-group">
    <label for="amount">Amount</label>
    <input type="text" name="amount" class="form-control" value="{{old('amount', $expense->amount)}}">
    <div class="error">{{$errors->first('amount')}}</div>
</div>

<div class="form-group">
    <label for="category">Category</label>
    <select name="category" id="category" class="form-control">
        @foreach($expenses as $exp)
            <option value="{{$exp}}" {{($expense->category === $exp) ? "selected" : null}}>{{$exp}}</option>
        @endforeach
    </select>
    <div class="error">{{$errors->first('category')}}</div>
</div>

<div class="form-group">
    <label for="payment_method">Payment Method</label>
    <select name="payment_method" id="payment_method" class="form-control">
        @foreach($paymentMethods as $paymentMethod)
            <option value="{{$paymentMethod}}" {{($expense->payment_method === $paymentMethod) ? "selected" : null}}>{{$paymentMethod}}</option>
        @endforeach
    </select>
</div>

<button class="btn btn-success mr-3">Save</button>
<a href="{{ route('expense.list') }}">Back</a>
