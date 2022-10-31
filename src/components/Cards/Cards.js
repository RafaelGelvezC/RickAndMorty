import React from 'react';
import styleCard from './Cards.module.scss';


const Cards = ({ results } ) => {
  
  let display;
  console.log(results)
  if(results){
    display = results.map((x)=>{
      let {id, name, image, location, status} = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={styleCard.cards}>
            <img src={image} alt="" className={`${styleCard.img} img-fluid`} />
            <div style={{padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{   //se crea la Funcion en IIFE par que se autoinvoque
            if(status === "Dead"){
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-danger`} >{status}
                </div>
              )
            }
            else if(status === "Alive"){
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-success`} >{status}
                </div>
              )
            }
            else{
              return(
                <div className={`${styleCard.badge} position-absolute badge bg-secondary`} >{status}
                </div>
              )
            }
          })()}
          
        </div>
      )
    });
  }else{
    display = "Not Found :/"
  }

  return (
    <>{display}</>
  )
}

export default Cards
