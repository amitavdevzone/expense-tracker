import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Menu from "../menu";

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = props => {
  const { pageTitle, children } = props;
  const page: any = usePage();
  return (
    <div className="layout">
      <Menu />
      <div className="container">
        {page.props.success ? (
          <div className="alert alert-success mt-3" role="alert">
            {page.props.success}
          </div>
        ) : (
          <div className="mt-3">&nbsp;</div>
        )}
        <div className="row mt-2">
          <div className="col-sm-12">
            <h1 className="page-title">{pageTitle}</h1>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
