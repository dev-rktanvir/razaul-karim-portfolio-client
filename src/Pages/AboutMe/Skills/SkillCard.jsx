import React from 'react';

const SkillCard = ({ name, logo, description }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg shadow bg-secondary/15">
      <img src={logo} alt={name} className="w-10 h-10" />
      <div>
        <h5 className="font-semibold text-secondary">{name}</h5>
        <p className="text-sm text-accent">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
