import React from "react";

const FilterBTN = ({ name, index, input, task, setPageNumber }) => {
    return (
        <div>
          <style jsx>
            {`
              .x:checked + label {
                background-color: #0b5ed7;
                color: white;
              }
              input[type="radio"] {
                display: none; //para quitar el chek de la selleción en el filtro
              } 
            `}
          </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            setPageNumber(1);  //para que reinicie la busqueda desde la pagina 1
            task(input);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;