import React from 'react'

const FeatureCard = ({FeatureCardData}) => {
  return (
    <div className="section-5-card-wrap">
      <div className="section-5-img-wrap">
        <img src={FeatureCardData.img} alt="" />
      </div>
      <div className="section-5-card-heading">
        <p className="section-5-text-heading">{FeatureCardData.heading}</p>
      </div>
      <div className="section-5-card-sub-heading">
        <p className="section-5-text-sub-heading">
         {FeatureCardData.desc}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard