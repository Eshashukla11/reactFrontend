import React from 'react'

function Card({data}) {
  return (
    <div className="section-3-card-wrap">
      <div className="section-3-card-heading">
        <p className="section-3-text-heading">
         {data.heading}
        </p>
      </div>
      <div className="section-3-card-sub-heading">
        <p className="section-3-text-sub-heading">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default Card