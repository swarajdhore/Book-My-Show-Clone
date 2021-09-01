import React from "react";
/* import {Route} from 'react-router-dom' */
import DeafultHOC from "./HOC/Default.HOC"

function HomePage(){
  return(<h1>Home Page</h1>)
}
function Component(){
  return(<h1>Contact Page</h1>)
}

function App(){
  return ( <> 
    {/* <h1 className='text-8xl'>Tailwind Integrated</h1>
    <button className='border-2 px-2 py-1 border-swaraj-500 md:border-red-500 rounded bg-blue-500 md:bg-red-500 text-white hover:bg-transparent hover:border-2 hover:text-blue-500 md:hove:text-red-500 outline-none focus:outline-none focus:ring focus:border-blue-300 md:focus:boder-red-300 lg:bg-green-500 lg:border-green-500 lg:hover:text-green-500 lg:focus:border-green-500'>
      Click !!
      </button> */}
      {/* <Route path='/' exact component={HomePage} />
      <Route path='/contact' exact component={Contact} /> */}
      <DeafultHOC path='/' exact component={HomePage} />
      <DeafultHOC path='/contact' exact component={Component} />
  </>
  );
}

export default App;
