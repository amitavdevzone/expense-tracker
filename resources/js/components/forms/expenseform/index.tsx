import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React from "react";
import route, { Router } from "ziggy-js";
import Expense from "../../../interface/Expense";

interface Props {
  expense: Expense;
  paymentMethods: Array<string>;
  expenseCategories: Array<string>;
  submitUrl: Router;
}

const ExpenseForm: React.FC<Props> = ({
  expense,
  expenseCategories,
  paymentMethods,
  submitUrl
}) => {
  const page: any = usePage();
  const [state, setState] = React.useState({
    id: expense.id,
    description: expense.description,
    date: expense.date,
    amount: expense.amount || 0,
    category: expense.category || expenseCategories[0],
    payment_method: expense.payment_method || paymentMethods[0]
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.post(submitUrl.url(), state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={state.description}
          onChange={handleChange}
        />
        {page.props.errors?.description && (
          <div className="error-feedback">
            {page.props.errors.description[0]}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={state.date}
          onChange={handleChange}
        />
        {page.props.errors?.date && (
          <div className="error-feedback">{page.props.errors.date[0]}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          className="form-control"
          value={state.amount}
          onChange={handleChange}
        />
        {page.props.errors?.amount && (
          <div className="error-feedback">{page.props.errors.amount[0]}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="form-control"
          value={state.category}
          onChange={handleChange}
        >
          {expenseCategories.map((category: string, index: number) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>
        {page.props.errors?.category && (
          <div className="error-feedback">{page.props.errors.category[0]}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="paymentMethod">Payment method</label>
        <select
          name="payment_method"
          id="payment_method"
          className="form-control"
          value={state.payment_method}
          onChange={handleChange}
        >
          {paymentMethods.map((payment_method: string, index: number) => {
            return (
              <option value={payment_method} key={index}>
                {payment_method}
              </option>
            );
          })}
        </select>
        {page.props.errors?.payment_method && (
          <div className="error-feedback">
            {page.props.errors.payment_method[0]}
          </div>
        )}
      </div>

      <button className="btn btn-success mr-3">Save</button>
      <a href="{{ route('expense.list') }}"></a>
      <InertiaLink href={route("expense.list").url()}>Back</InertiaLink>
    </form>
  );
};

export default ExpenseForm;
