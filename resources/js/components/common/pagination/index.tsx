import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import PageLink from "../../../interface/PageLink";

interface Props {
  links: Array<any>;
}

const Pagination: React.FC<Props> = ({ links }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {links.map((link: PageLink, index: number) => {
          return (
            <li
              key={index}
              className={`page-item ${link.url === null &&
                "disabled"} ${link.active && "active"}`}
            >
              <InertiaLink className="page-link" href={link.url || "#"}>
                {link.label}
              </InertiaLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
