import React from "react";
import route from "ziggy-js";
import Layout from "../../../components/common/layout";
import ExpenseForm from "../../../components/forms/expenseform";
import Expense from "../../../interface/Expense";

interface Props {
  expense: Expense;
  expenses: Array<any>;
  paymentMethods: Array<any>;
}

const ExpenseAddPage: React.FC<Props> = ({
  expense,
  expenses,
  paymentMethods
}) => {
  return (
    <Layout pageTitle="Add expense">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Add expense</div>
            <div className="card-body">
              <ExpenseForm
                expense={expense}
                expenseCategories={expenses}
                paymentMethods={paymentMethods}
                submitUrl={route("expense.save")}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExpenseAddPage;
