import React from "react";
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
                        <a
                          href="{{ route('expense.view', $expense->id) }}"
                          className="mr-3"
                        >
                          View
                        </a>
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
