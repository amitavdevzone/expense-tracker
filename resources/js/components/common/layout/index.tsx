import React from "react";
import Menu from "../menu";

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = props => {
  const { pageTitle, children } = props;
  return (
    <div className="layout">
      <Menu />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h1 className="page-title">{pageTitle}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
