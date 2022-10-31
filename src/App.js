import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return(
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () =>{
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState ("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  let {info, results} = fetchData; // se desestructura para sacar la información de card y de paginación del arrya de la.

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=> {
    (async function(){  // IIFE: Expresión de función ejecutada inmediatamente
      let data = await fetch(api).then(res=> res.json());
      updateFetchData(data);
    })()
  },[api])

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search 
        setPageNumber={setPageNumber} //para que reinicie la busqueda desde la pagina 1
        setSearch={setSearch} 
      />
      <div className="container">
        <div className="row">
          <Filters 
            setStatus={setStatus}
            setPageNumber={setPageNumber} //para que reinicie la busqueda desde la pagina 1
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
          <div className="row">
            <Cards 
              page="/"
              results={results} 
            />
          </div>
          </div>
        </div>
      </div>
      <Pagination 
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
