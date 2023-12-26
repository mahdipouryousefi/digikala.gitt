import React from 'react'
import logo from './images.png'
import img1 from "./Screenshot (34).png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { HiOutlineLogin } from "react-icons/hi";

const Navbare = () => {
    return (
        <React.Fragment>
            <div className="nav" >
                <div className='right-nav'>

                    <img className='image' src={logo} style={{ width: '150px' }} />
                    <input className='input' placeholder='  جستجو ' />
                    <input className='input2' placeholder='  جستجو در' />
                    <span className='inputimge' > دیجی کالا</span>
                    <FontAwesomeIcon className='fasearch' icon={faSearch} />
                </div>
                <div className='left-nav' style={{ padding: ' 6px', margin: ' 3px' }}>

                    <span className='border' style={{ border: 'solid 1px #7D7C7C', margin: '10px', padding: '6px', borderRadius: '5px' }}  >
                    <HiOutlineLogin className='shop'  style={{ cursor: 'pointer' }} />
                        <span style={{ margin: '4px', cursor: 'pointer' }}> ورود  </span>
                        <span style={{ margin: '4px', cursor: 'pointer' }}>ثبت نام</span>
                    </span>
                    <span style={{ borderRight: '1px solid #7D7C7C', margin: '15px' }}></span>
                    <FontAwesomeIcon className='shop' icon={faShoppingCart} style={{ background: 'none', margin: ' 2px', cursor: "pointer" }} />
                </div>

            </div>

        </React.Fragment>
    )
}
export default Navbare