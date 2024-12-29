import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSellers = () => {
    const { products } = useContext(ProductsContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller)
        setBestSellers(bestProducts.slice(0, 4));
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='BEST' text2='SELLERS' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur possimus itaque tempore impedit ad quidem, quo placeat expedita harum laboriosam, sint doloremque facere,
                    ut quam odit distinctio modi assumenda nemo?
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    bestSellers.map((item, index) => (
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSellers