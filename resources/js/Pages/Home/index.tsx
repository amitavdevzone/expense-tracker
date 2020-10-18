import React from "react";
import Layout from "../../components/common/layout";
import Expense from "../../interface/Expense";

interface Props {
  expenses: Array<Expense>;
}

const HomePage = (props: Props) => {
  const { expenses } = props;
  return (
    <Layout pageTitle="My expenses">
      <div>
        <p>Welcome to home</p>
        <ul>
          {expenses.map((value: Expense, index) => {
            return <li key={index}>{value.description}</li>;
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default HomePage;
