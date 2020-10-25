import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";
import Expense from "../../../interface/Expense";

interface Props {
  expense: Expense;
  paymentMethods: Array<string>;
  expenseCategories: Array<string>;
}

const ExpenseForm: React.FC<Props> = ({
  expense,
  expenseCategories,
  paymentMethods
}) => {
  return (
    <form>
      <input type="hidden" name="id" value={expense.id} />
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={expense.description}
        />
        <div className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={expense.date}
        />
        <div className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          className="form-control"
          value={expense.amount}
        />
        <div className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" className="form-control">
          {expenseCategories.map((category: string, index: number) => {
            return (
              <option
                value={category}
                selected={category === expense.category}
                key={index}
              >
                {category}
              </option>
            );
          })}
        </select>
        <div className="error"></div>
      </div>

      <div className="form-group">
        <label htmlFor="paymentMethod">Payment method</label>
        <select
          name="payment_method"
          id="payment_method"
          className="form-control"
        >
          {paymentMethods.map((payment_method: string, index: number) => {
            return (
              <option
                value={payment_method}
                selected={payment_method === expense.payment_method}
                key={index}
              >
                {payment_method}
              </option>
            );
          })}
        </select>
        <div className="error"></div>
      </div>

      <button className="btn btn-success mr-3">Save</button>
      <a href="{{ route('expense.list') }}"></a>
      <InertiaLink href={route("expense.list").url()}>Back</InertiaLink>
    </form>
  );
};

export default ExpenseForm;
