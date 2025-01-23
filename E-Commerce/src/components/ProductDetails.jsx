import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setselectedProduct } from '../redux/slices/productSlice'
import '../App.css'
import { LuCirclePlus } from "react-icons/lu";
import { BiMinusCircle } from "react-icons/bi";
import Button from '@mui/material/Button';


function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();

    const { price, image, title, description } = selectedProduct

    const [count, setcount] = useState(0)

    const plus = () => {
        setcount(count + 1)
    }
    const minus = () => {
        if (count > 0) {
            setcount(count - 1)
        }
    }


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setselectedProduct(product))
            }
        })
    }

    return (
        <>
            <div className='row-flex'>
                <div style={{ marginTop: '40px' }}>
                    <img src={image} className='pd-img' />
                </div>
                <div style={{ marginLeft: '50px' }}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h2>{price} $</h2>
                    <div className='pd-button'>
                        <LuCirclePlus onClick={plus} />
                        <span style={{ fontSize: '30px', margin: '5px' }}>{count}</span>
                        <BiMinusCircle onClick={minus} />
                    </div>
                    <div>
                        <Button style={{ marginTop: '15px' }} variant="contained" color="error">
                            Sepete Ekle
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
