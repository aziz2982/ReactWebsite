import React from 'react'
import { FooterSt } from './style'

const Footer = () => {
  return (
   <FooterSt>
    <div className='FooterF'>
        <div className='FooterS'>SQ R3</div>
        <div className='FooterH H'>
        +8801760-007083
        </div>
        <div className='FooterH H'>uiuxmdomith@gmail.com</div>
    </div>
    <div className='FooterF'>
        <div className='FooterS'>Usefull Links</div>
        <div className='FooterH H'>Home</div>
        <div className='FooterH'>About Us</div>
        <div className='FooterH'>Service</div>
        <div className='FooterH'>Furniture</div>
    </div>
    <div  className='FooterF'>
        <div className='FooterS'>FAQ</div>
        <div className='FooterH H'>Lorem Ipsum Dolar</div>
        <div className='FooterH'>Lorem Ipsum Dolar</div>
        <div className='FooterH'>Lorem Ipsum Dolar</div>
        <div className='FooterH'>Lorem Ipsum Dolar</div>
    </div>
    <div className='FooterF'>
        <div className='FooterS'>Newsletter</div>
        <div className='FooterH H'>
            <input className='input' type="text" placeholder='Enter your mail' />
            <button>Send</button>
        </div>
        <div className='btn'>
        Download App
        </div>
    </div>
   </FooterSt>
  )
}

export default Footer