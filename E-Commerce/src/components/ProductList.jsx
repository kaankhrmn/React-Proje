import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';
import '../css/Product.css'

function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)
    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='list'>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }

        </div>
    )
}

export default ProductList