import React from "react";

// Sidebar component to display a list of services and an option to add new services
function Sidebar({ Lists, onEdit }) {
  return (
    <aside className="sidebar">
      {/* Sidebar heading */}
      <h3>Your Services</h3>

      {/* Button to add a new service (triggers onEdit to toggle form) */}
      <button className="add-product" onClick={onEdit}>
        + Add Service
      </button>

      {/* List of existing services */}
      <ul>
        {Lists.map((list) => {
          return (
            // Render each service name as a list item
            <li className="sidebar-menu-list" key={list.id}>
              {list.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
