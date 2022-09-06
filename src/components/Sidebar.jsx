import React, {useState} from 'react'
import * as AiIcons from "react-icons/ai"
import * as TbIcons from "react-icons/tb"
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import {  NavLink } from "react-router-dom"


const Sidebar = () => {
   

  return (
    <>
        <div className='side-bar'>
            <div className="profile-part">
                <img src="image.png" alt="profile-image" />
                <h3 className='name-tag'>Murat Turan</h3>
                <p>Tedarik Zinciri Yöneticisi</p>
            </div>
            <div className="menu-part">
                <h4>Menü</h4>
                <ul className='menu-part-items'>
                    <li className='nav-text'>
                        <NavLink to="/educations" className="nav-text-link">
                            <AiIcons.AiOutlinePieChart className='icon-text'/> <span>Eğitimler</span>
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink to="/analysis" className="nav-text-link">
                           <TbIcons.TbVector className='icon-text' /> <span>Analiz</span>
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink to="/reports" className="nav-text-link">
                           <AiIcons.AiOutlineFile className='icon-text' /> <span>Raporlar</span>
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink to="/" className="nav-text-link">
                           <GrIcons.GrUser className='icon-text' />
                           <span>Profil</span>
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink to="/" className="nav-text-link">
                            <BsIcons.BsChatLeft className='icon-text' />
                            <span>TIM'e Yaz</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="menu-part">
                <h4>Tercihler</h4>
                <ul className='menu-part-items'>
                        <li className='nav-text'>
                            <NavLink to="/" className="nav-text-link">
                                <AiIcons.AiOutlineUser className='icon-text' />
                                <span>Yetkilendirme</span>
                            </NavLink>
                        </li>
                        <li className='nav-text'>
                            <NavLink to="/" className="nav-text-link">
                                <AiIcons.AiOutlineLock className='icon-text' />
                                <span>Şifremi Değiştir</span>
                            </NavLink>
                        </li>
                        <li className='nav-text'>
                            <NavLink to="/" className="nav-text-link">
                                <FiIcons.FiSettings className='icon-text' />
                                <span>Gizlilik Politikası</span>
                            </NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    
    </>
  )
}

export default Sidebar