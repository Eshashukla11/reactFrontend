import React from 'react'

const EmpCard = ({NameCard}) => {
  return (
    <div className="section-6-card-wrap">
      <div className="section-6-img-wrap">
        <img src={NameCard.img} alt="" />
      </div>
      <div className="section-6-card-text">
        <p className="section-6-text-heading">{NameCard.name}</p>
        <p className="section-6-text-sub-heading">{NameCard.designation}</p>
      </div>
    </div>
  );
}

export default EmpCard