import React, { useState } from 'react'
import '../css/Header.css'
import '../App.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';


function Header() {
    const [theme, settheme] = useState(false)

    const changeTheme = () => {
        const root = document.getElementById("root")
        settheme(!theme)
        if (theme) {
            root.style.backgroundColor = "black"
            root.style.color = "white"
        }
        else {
            root.style.backgroundColor = "white"
            root.style.color = "black"
        }
        settheme(!theme)
    }

    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket)

    return (
        <>
            <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <div className='row-flex' onClick={() => navigate("/")}>
                    <img className='logo' src='./src/images/logo.png' />
                    <p className='icon-text'>Kaan A.Ş</p>
                </div>
                <div className='row-flex'>
                    <input className='search-input' placeholder='Bir şeyler ara' type='text' />
                    <div>
                        {theme ? <IoMoonSharp className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}

                        <Badge badgeContent={products.length} color="error">
                            <CiShoppingBasket className='icon' />
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
