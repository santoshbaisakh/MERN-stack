import React from 'react'

const ServiceCard = ({image,title,description}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl duration-300">
        <img src={image} alt={title} className="w-16" />
        <h3 className="text-2xl font-bold mt-8">{title}</h3>
        <p className="text-gray-500 mt-4 leading-7">{description}</p>
    </div>
  );
};

export default ServiceCard
