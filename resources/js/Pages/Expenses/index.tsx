import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";
import Layout from "../../components/common/layout";
import Expense from "../../interface/Expense";
import PaginatedData from "../../interface/PaginatedData";

interface Props {
  expenses: PaginatedData;
}

const ExpenseListPage: React.FC<Props> = ({ expenses }) => {
  return (
    <Layout pageTitle="My Expense List">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-header">My Expenses</div>
            <table className="table">
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
                {expenses.data.map((expense: Expense, index: any) => {
                  return (
                    <tr key={index}>
                      <td>{expense.id}</td>
                      <td>{expense.description}</td>
                      <td>{expense.category}</td>
                      <td>{expense.payment_method}</td>
                      <td>{expense.date}</td>
                      <td>
                        <InertiaLink
                          href={route("expense.view", { id: expense.id }).url()}
                          className="mr-3"
                        >
                          View
                        </InertiaLink>
                        <a
                          href="{{ route('expense.delete', $expense->id) }}"
                          className="mr-3"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExpenseListPage;
