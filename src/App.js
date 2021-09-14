import React from "react";
/* import {Route} from 'react-router-dom' */
import DefaultHOC from "./HOC/Default.HOC"
import MovieHOC from "./HOC/Movie.HOC";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Plays from "./pages/Plays.Page";


function App(){
  return ( <> 
    {/* <h1 className='text-8xl'>Tailwind Integrated</h1>
    <button className='border-2 px-2 py-1 border-swaraj-500 md:border-red-500 rounded bg-blue-500 md:bg-red-500 text-white hover:bg-transparent hover:border-2 hover:text-blue-500 md:hove:text-red-500 outline-none focus:outline-none focus:ring focus:border-blue-300 md:focus:boder-red-300 lg:bg-green-500 lg:border-green-500 lg:hover:text-green-500 lg:focus:border-green-500'>
      Click !!
      </button> */}
      {/* <Route path='/' exact component={HomePage} />
      <Route path='/contact' exact component={Contact} /> */}
      <DefaultHOC path='/' exact component={HomePage} />
      <MovieHOC path='/movie/:id' exact component={MoviePage} />
      <DefaultHOC path='/plays' exact component={Plays} />
  </>
  );
}

export default App;
