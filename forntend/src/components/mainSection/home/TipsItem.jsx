import React from 'react';

const TipsItem = ({ tip }) => {
  return (
    <div className="item active">
      <h3 className="page-header"> {tip.title}</h3>
      {tip.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TipsItem;
