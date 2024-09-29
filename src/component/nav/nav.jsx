import React, { useEffect, useRef, useState } from 'react'
import "./nav.css"
import { IoHomeSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import { FaRegBookmark } from "react-icons/fa";
import UseOutSide from '../useClickOut';
const Nav = ({modal,setmodal}) => {
  const [active,setactive]=useState("#");
  const [color,setcolor]=useState(false);
  const modalref=useRef();
 UseOutSide(()=>{
  setcolor(false);
 },modalref)

  return (
    <>
    {
      color?(<div className='modal'>
        <div ref={modalref} className="modal__content">
          <div className="modal__close" onClick={()=>{
            setcolor(!color);
          }}><IoClose className='modal__close__icon'/></div>
          <div className="modal__title">
            <h2>Change Color</h2>
          </div>
          <div className="modal__body">
            <ul className="colors">
              <li  onClick={()=>{
                setmodal("green_mode");
              }}><button className='btn primary green'></button></li>
              <li  onClick={()=>{
                setmodal("blue_mode")
              }}><button className='btn primary blue'></button></li>
              <li  onClick={()=>{
                setmodal("red_mode")
              }}><button className='btn primary red'></button></li>
              <li  onClick={()=>{
                setmodal("purple_mode")
              }}><button className='btn primary purple'></button></li>

            </ul>
        </div>
      </div>
      </div>):null
    }
    <nav className='nav__menu'>

          <a onClick={()=>{
            setactive("#");
          }} className={active=="#"?"active":""} href='#'><IoHomeSharp/></a>
          <a onClick={()=>{
            setactive("#about");
          }} className={active=="#about"?"active":""} href='#about'><FaUser/></a>
          <a onClick={()=>{
            setactive("#experience");
          }} className={active=="#experience"?"active":""} href='#experience'><FaRegBookmark/></a>
          <a 
          onClick={()=>{
            setactive("#services");
          }} className={active=="#services"?"active":""} href='#services'><RiServiceLine/></a>
          <a onClick={()=>{
            setactive("#contact");
          }} className={active=="#contact"?"active":""} href='#contact'><BiMessageRoundedDetail/></a>
          <a className='modal__btn' onClick={()=>{
            setcolor(!color);
            console.log(color);
          }} ><IoIosColorPalette/></a>
    </nav>
    </>
  )
}

export default Nav
