/* eslint-disable react/prop-types */

import { useState } from "react";

const HobbiesList = ({ hobbies, setHobbies }) => {
   const [addHob, setAddHob] = useState("");

   const handleDelete = (id) => {
      fetch(`http://localhost:3000/hobbies/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      });
   };

   const addHobbObj = {
      hobbies: addHob,
   };

   function handleAddHobby(e) {
      e.preventDefault();
      fetch("http://localhost:3000/hobbies", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(addHobbObj),
      })
         .then((res) => res.json())
         .then((data) => {
            setHobbies([...hobbies, data]);
            setAddHob("");
         });
   }

   return (
      <div className="hobby-list">
         <h1 className="title">Hobbies App</h1>
         <div className="card-container">
            {hobbies.map((hobby) => (
               <div className="list-container" key={hobby.id}>
                  <li>{hobby.hobbies}</li>
                  <button onClick={() => handleDelete(hobby.id)}>Delete</button>
               </div>
            ))}
         </div>

         <form className="add-btn" onSubmit={handleAddHobby}>
            <input type="text" placeholder="Add hobby" value={addHob} onChange={(e) => setAddHob(e.target.value)} />
            <button>Add</button>
         </form>
      </div>
   );
};

export default HobbiesList;
