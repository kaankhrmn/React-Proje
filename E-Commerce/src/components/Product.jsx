import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Product.css'
import Button from '@mui/material/Button';

function Product({ product }) {
    const { id, price, image, title, description } = product

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt='' />
            <div>
                <p style={{ textAlign: 'center', height: '50px', fontSize: 'bolder' }}>{title}</p>
                <h3>{price} $</h3>
            </div>
            <div>
                <Button onClick={() => navigate("/product-details/" + id)} variant="contained" color="secondary">
                    Detay
                </Button>
            </div>
        </div>
    )
}

export default Product
