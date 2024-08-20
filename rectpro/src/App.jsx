import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import chekiing from '../src/components/chekiing'
import '../src/App.css'; 
function App() {
  return (
     <StrictMode>
      <Header />
      <Home/>
      <Footer />
      </StrictMode>
 
  );
}
// import { useState} from "react";
// function App(){
//   const[person,setPerson] = useState({
//     name : 'john Doe',
//     artWork: {
//       title: 'Blue nana',
//       city: 'Yaounde',
//       image:'https://www.pexels.com/fr-fr/photo/fermer-la-photographie-de-rose-rouge-et-rose-56866/',
//     }

//   });
//   function HandleNameChange(e){
//     setPerson({
//       ...person,
//       name:e.target.value,
//     });
//   }

//   function HandleTitleChange(e){
//     setPerson({
//       ...person,
//       artWork:{
//         ...person.artWork,
//         title:e.target.value,
//       }
    
//     });
//   }

//     function HandleCityChange(e){
//       setPerson({
//         ...person,
//         artWork:{
//           ...person.artWork,
//           city:e.target.value,
//         }
      
//       });
//     }
//       function HandleImageChange(e){
//         setPerson({
//           ...person,
//           artWork:{
//             ...person.artWork,
//             image:e.target.value,
//           }
        
//         });
//       }

//         return(
//           <>
//           <label>
//             Name:<input value={person.name}
//             onChange = {HandleNameChange}/>
//           </label>

//           <label>
//             Title:<input value={person.artWork.title}
//             onChange = {HandleTitleChange}/>
//           </label>

//           <label>
//             City:<input value={person.artWork.city}
//             onChange = {HandleCityChange}/>
//           </label>

//           <label>
//             Image:<input value={person.artWork.image}
//             onChange = {HandleImageChange}/>
//           </label>

//           <p>{person.artWork.title} {'done by'} {person.name}<br/>
//           <img src={person.artWork.image}/>
//           {'located in'} {person.artWork.city}
//           </p>        
//           </>
//         ); 
//       }
  
 export default App;
