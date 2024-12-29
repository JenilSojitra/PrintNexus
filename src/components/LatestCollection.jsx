import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const { products } = useContext(ProductsContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(4, 10));
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center py-8 text-3xl'>
                <Title text1='LATEST' text2='COLLECTIONS' />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur possimus itaque tempore impedit ad quidem, quo placeat expedita harum laboriosam, sint doloremque facere,
                    ut quam odit distinctio modi assumenda nemo?
                </p>
            </div>

            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection