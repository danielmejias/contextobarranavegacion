import React, { useContext, useState } from "react";
import { AppContext } from "../context";

const AddUser = () => {
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState("");

  const handleAddUser = () => {
    const user = { id: Math.random(), name };
    dispatchUserEvent("ADD_USER", { newUser: user });
  };

  return (
    <div>
   
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="name"
      />
      <br />
  
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
