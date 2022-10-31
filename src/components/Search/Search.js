import React from 'react';
import StylesSearch from './Search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input 
        onChange={e=> {
          setPageNumber(1) // Para que busque los resultados desde la pagina 1
          setSearch(e.target.value)
        }}
        placeholder="Search for Characters" 
        type="text" 
        className={StylesSearch.input} 
      />
      <button 
        onClick={(e)=> {
          e.preventDefault(); // Para prevenir que la pagina se refresque
        }} 
        className={`${StylesSearch.btn} btn btn-primary fs-5`}
      >
      Search
      </button>
    </form>
  )
}

export default Search
