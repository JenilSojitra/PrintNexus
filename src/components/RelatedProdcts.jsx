import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProdcts = ({ category, subCategory }) => {
    const { products } = useContext(ProductsContext);
    const [related, setRelated] = useState([])

    useEffect(() => {

        if (products.length > 0) {
            let pCopy = products.slice();
            pCopy = pCopy.filter((item) => item.category == category);
            pCopy = pCopy.filter((item) => item.subCategory == subCategory);

            setRelated(pCopy.slice(0, 4))
        }

    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1='RELATED' text2='PRODUCTS' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProdcts