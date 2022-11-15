import React from 'react';

export interface IVariant {
    title: string;
    price: {
        amount: string;
    };
}


const ProductVariant = ({title, selected, index, onClick}) => {
    const classes = 'mb-4 uppercase inline-flex items-center mx-2 px-5 py-2.5 text-sm font-small text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

    return (
        <span
          onClick={() => onClick(index)}
          className={`${classes} ${selected ? 'bg-blue-700' : 'bg-red-600'}`}>
        {title}
        </span>
    );
}

export default ProductVariant;