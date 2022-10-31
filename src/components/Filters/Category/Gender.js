import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                key={index}
                name="gender"
                index={index}
                input={items}
                setPageNumber={setPageNumber}
                task={setGender}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
