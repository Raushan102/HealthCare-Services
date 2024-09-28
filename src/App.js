import "./App.css";
import Sidebar from "./Sidebar";
import serviceLists from "./assets/List"; // Initial service list
import ServiceList from "./ServiceList";
import { useState } from "react";

function App() {
  const [Lists, setLists] = useState(serviceLists);
  const [isEditing, setIsEditing] = useState(false);
  const [updateList, setUpdateList] = useState(null);

  function startEditing(service = null) {
    if (service) {
      setUpdateList(service);
    } else {
      setUpdateList(null);
    }
    setIsEditing(true); // Always set to true when starting to edit
  }

  function stopEditing() {
    setIsEditing(false);
    setUpdateList(null); // Clear the service being edited
  }

  function handleDelete(id) {
    setLists((previousList) => previousList.filter((list) => list.id !== id));
  }

  function handleAddService(e, data, id = null) {
    e.preventDefault();
    const { name, description, price } = data;

    if (id) {
      setLists((previousList) => {
        const updatedLists = [...previousList];
        const index = updatedLists.findIndex((list) => list.id === id);
        updatedLists[index] = { id, name, description, price };
        stopEditing(); // Exit edit mode after updating
        return updatedLists;
      });
    } else {
      setLists((previousList) => {
        let id;
         if(previousList.length ===0){
          id=1
         }
         if(previousList.length > 0){
          id=previousList.length+1
         }


        const newService = {
          id,
          name,
          description,
          price,
        };
        return [...previousList, newService];
      });
      stopEditing(); // Exit edit mode after adding
    }
  }

  return (
    <div className="App">
      <div className="sidebarContainer">
        <Sidebar Lists={Lists} onEdit={startEditing} />
      </div>

      <ServiceList
        Lists={Lists}
        onDelete={handleDelete}
        isEditing={isEditing}
        onEdit={startEditing}
        onAddService={handleAddService}
        updateList={updateList}
        stopEditing={stopEditing} // Pass stopEditing to the ServiceList
      />
    </div>
  );
}

export default App;
