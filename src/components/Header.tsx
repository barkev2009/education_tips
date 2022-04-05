import React, { useState } from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {

    const [classes, setClasses] = useState({about: 'header-item', services: 'header-item', contacts: 'header-item'})
    const initialClasses = {about: 'header-item', services: 'header-item', contacts: 'header-item'}

    const handleClasses = (e: any) => {
        setClasses({...initialClasses, [e.target.id]: 'header-item active-header-item'})
    }

  return (
        <div className='header' onClick={(e: any) => handleClasses(e)}>
            <HeaderItem textValue='О нас' id='about' className={classes['about']}/>
            <HeaderItem textValue='Услуги' id='services' className={classes['services']}/>
            <HeaderItem textValue='Контакты' id='contacts' className={classes['contacts']}/>
        </div>
    )
}

export default Header