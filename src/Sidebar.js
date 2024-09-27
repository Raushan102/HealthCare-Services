import React from "react";

function sideBar({ Lists, onEdit }) {
  return (
    <aside className="sidebar">
      <h3>your services</h3>
      <button className="add-product" onClick={onEdit}>
        + add services
      </button>
      <ul>
        {Lists.map((list) => {
          return (
            <li className="sidebar-menu-list" key={list.id}>
              {list.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default sideBar;
