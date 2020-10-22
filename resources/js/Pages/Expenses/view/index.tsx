import React from "react";
import Layout from "../../../components/common/layout";
import Expense from "../../../interface/Expense";

interface Props {
  expense: Expense;
  expenses: Array<any>;
  paymentMethods: Array<any>;
}

const ExpenseViewPage: React.FC<Props> = ({ expense }) => {
  return (
    <Layout pageTitle="Expense details">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">View expense</div>
            <div className="card-body">{expense.description}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExpenseViewPage;
