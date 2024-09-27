import React, { useState } from "react";
import MainSection from "./MainSection";
import Form from "./Form";
function ServiceList({
  Lists,
  onDelete,
  onUpdate,
  isEditing,
  onEdit,
  onAddService,
}) {
  const [updateList, setUpdateList] = useState(undefined);

  let content = (
    <center>
      <h1>No service list </h1>
    </center>
  );

  function handleUpdate(list) {
    setUpdateList(list);
    onEdit();
  }
  if (Lists.length > 0) {
    content = isEditing ? (
      updateList !== undefined ? (
        (content = (
          <Form onEdit={onEdit} onsubmit={onAddService} data={updateList} />
        ))
      ) : (
        <Form onEdit={onEdit} onsubmit={onAddService} />
      )
    ) : (
      <ul className="service-lists">
        {Lists.map((list) => {
          const local = navigator.language;
          let calculatedPrice = new Intl.NumberFormat(local, {
            // format the price
            style: "currency",
            currency: "INR",
          }).format(list.price);

          return (
            <li key={list.id} className="service-list">
              <h2 className="product-title">{list.name}</h2>
              <p className="product-description">{list.description}</p>
              <p className="product-price">{calculatedPrice}</p>
              <span className="button-container">
                <button
                  className="List-button"
                  onClick={() => onDelete(list.id)}
                >
                  Delete
                </button>
                <button
                  className="List-button"
                  onClick={() => handleUpdate(list)}
                >
                  Update
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className="mainContainer">
      <MainSection />
      <div className="list-container">{content}</div>
    </div>
  );
}

export default ServiceList;
