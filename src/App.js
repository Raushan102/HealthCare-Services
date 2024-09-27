import "./App.css";
import Sidebar from "./Sidebar";
import serviceLists from "./assets/List";
import ServiceList from "./ServiceList";
import { useState } from "react";
function App() {
  const [Lists, setLists] = useState(serviceLists);
  const [isEditing, setIsEditing] = useState(false);

  function handleOnEdit() {
    setIsEditing((previousState) => !previousState);
  }

  function handleDelete(id) {
    setLists((previousList) =>
      previousList.filter((list) => !(list.id === id))
    );
  }
  function handleUpdate(id) {
    console.log("update function called", id);
  }

  function handleAddService(e, data, id = null) {
    console.log(id);
    e.preventDefault();
    const { name, description, price } = data;

    if (id) {
      setLists((previousList) => {
        console.log("yes1");

        let updatedLists = [...previousList];
        let updatedList = updatedLists.filter((list) => list.id === id);

        console.log("List", updatedList);
        const index = updatedLists.findIndex((list) => list.id === id);
        console.log('""updatedList', index);
        updatedList.name = name;
        updatedList.description = description;
        updatedList.price = price;
        updatedLists[index] = updatedList;
        handleOnEdit();
        return updatedLists;
      });
    } else {
      setLists((previousList) => {
        let updatedLists = [...previousList];

        updatedLists = [
          ...updatedLists,
          { id: previousList.length, name, description, price },
        ];
        handleOnEdit();
        return updatedLists;
      });
    }
  }

  return (
    <div className="App">
      <div className="sidebarContainer">
        <Sidebar Lists={Lists} onEdit={handleOnEdit} />
      </div>
      <ServiceList
        Lists={Lists}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        isEditing={isEditing}
        onEdit={handleOnEdit}
        onAddService={handleAddService}
      />
    </div>
  );
}

export default App;
