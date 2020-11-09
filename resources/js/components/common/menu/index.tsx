import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import route from "ziggy-js";

const Menu: React.FC = () => {
  const SharedData: any = usePage();
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          {SharedData.props.app.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route("expense.list").url()}
              >
                Expenses
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route("expense.add").url()}
              >
                Expense add
              </InertiaLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                id="navbarDropdown"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {SharedData.props.auth.user.name}
              </a>

              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
