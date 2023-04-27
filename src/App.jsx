import HobbiesList from "./components/HobbiesList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
   const [hobbies, setHobbies] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/hobbies")
         .then((res) => res.json())
         .then((data) => {
            setHobbies(data);
         });
   }, [hobbies]);

   return (
      <div>
         <HobbiesList hobbies={hobbies} setHobbies={setHobbies} />
      </div>
   );
}

export default App;
