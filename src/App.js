import "./App.css";
import Sidebar from "./Sidebar";
import serviceLists from "./assets/List";
import ServiceList from "./ServiceList";
import { useState } from "react";

function App() {
  // State to manage the list of services
  const [Lists, setLists] = useState(serviceLists);

  // State to toggle between edit and view mode
  const [isEditing, setIsEditing] = useState(false);

  // State to track which service is being edited (if any)
  const [updateList, setUpdateList] = useState(null);

  // Function to toggle edit mode
  function handleOnEdit(service = null) {
    if (service) {
      setUpdateList(service); // Set the service to be edited
    } else {
      setUpdateList(null); // Clear the edit state for adding a new service
    }
    setIsEditing((previousState) => !previousState);
  }

  // Function to delete a service by its id
  function handleDelete(id) {
    setLists((previousList) =>
      previousList.filter((list) => !(list.id === id))
    );
  }

  // Function to add or update a service
  function handleAddService(e, data, id = null) {
    e.preventDefault();
    const { name, description, price } = data;

    if (id) {
      // Update an existing service
      setLists((previousList) => {
        let updatedLists = [...previousList];
        const index = updatedLists.findIndex((list) => list.id === id);

        // Update the service details
        updatedLists[index] = { id, name, description, price };

        handleOnEdit(); // Exit edit mode after updating
        return updatedLists;
      });
    } else {
      // Add a new service
      setLists((previousList) => {
        const newService = {
          id: previousList.length,
          name,
          description,
          price,
        };

        return [...previousList, newService];
      });
      handleOnEdit(); // Exit edit mode after adding
    }
  }

  return (
    <div className="App">
      <div className="sidebarContainer">
        {/* Render the Sidebar with the list of services and edit toggle function */}
        <Sidebar Lists={Lists} onEdit={() => handleOnEdit()} />
      </div>

      {/* Render the service list component with various props for service management */}
      <ServiceList
        Lists={Lists}
        onDelete={handleDelete}
        isEditing={isEditing}
        onEdit={handleOnEdit}
        onAddService={handleAddService}
        updateList={updateList} // Pass the service being edited
      />
    </div>
  );
}

export default App;
