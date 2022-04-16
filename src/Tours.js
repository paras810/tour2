import React from 'react';
import Tour from './Tour';
const Tours = ({tours , removeTour}) => {
  return <section>
      <div className="title">
          <h2>our title</h2>
          <div className="underline"></div>
      </div>
      {tours.map((e)=>{
          return (
              <>
              <Tour key ={e.id} {...e} removeTour={removeTour}/>
              </>
          )
      })}
  </section>;
};

export default Tours;
