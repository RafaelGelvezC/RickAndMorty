import React from 'react';
import ReactPaginate from 'react-paginate';

  const Pagination = ({ info, setPageNumber, pageNumber}) => {

  return <ReactPaginate 
    className="pagination justify-content-center my-4 gap-4"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    nextLabel="Next"
    previousLabel="Prev"
    nextclassName="btn btn-outline-primary fs-5 next"
    previousclassName="btn btn-outline-primary fs-5 prev"
    pageclassName="page-item"
    pageLinkclassName="page-link"
    activeclassName="active" //para que se coloque en azul donde esta la apgian seleccionada
    onPageChange={(data)=> {
      setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages} />; //el "?" espara para preguntar si la "info" existe, si existe  que pase al .page
  }

export default Pagination
