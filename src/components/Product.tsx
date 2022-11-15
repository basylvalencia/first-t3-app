import React, {FunctionComponent, useState} from 'react';
import ProductVariant, {IVariant} from "./ProductCard/ProductVariant";

export interface IProductProps {
    title: string;
    featuredImage: {
        url: string;
    };
    description: string;
    handle: string;
    variants: IVariant[];
}

const Product: FunctionComponent<IProductProps> = ({title, featuredImage, description, handle, variants}) => {
    const [selectedVariant, setSelectedVariant] = useState(0);

    const handleOnClick = (index) => {
        setSelectedVariant(index);
    };

    const productLink = `/product/${handle}`;
    return (
        <section
            className="w-100 mb-5 pb-5 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={featuredImage ? featuredImage.url: ''}/>
            <section className='p-5'>
                <a href={productLink}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <span>
                $ {variants?.edges[selectedVariant].node.price?.amount}
              </span>
              <span>
              </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                
            </section>
            <section>
                {variants && variants?.edges.map(({node}, index) => <ProductVariant title={node.title}
                                                                                    selected={index === selectedVariant}
                                                                                    index={index}
                                                                                    onClick={handleOnClick}/>)}
            </section>
        </section>
    );
};

export default Product;