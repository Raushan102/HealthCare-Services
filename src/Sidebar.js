import React from "react";

function Sidebar({ Lists, onEdit }) {
  return (
    <aside className="sidebar">
      <h3>Your Services</h3>
      <button className="add-product" onClick={() => onEdit()}>
        + Add Services
      </button>
      {Lists.length > 0 ? (
        <ul>
          {Lists.map((list) => (
            <li className="sidebar-menu-list" key={list.id}>
              {list.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="sidebar-menu-list">No list found</p>
      )}
    </aside>
  );
}

export default Sidebar;
