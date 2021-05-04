import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Container} from '../../../GlobalStyle'
import './Header.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const Header = () => {
    const [click, setClick] = useState(false)
    const clickHandeler = () => {
        setClick(!click)
    }
    
   
    return (
        <>
            <nav>
                <Container>
                    <ul className={click?  'nav-manu' : 'nav-manu active'}>
                        <li className="adict" onClick={clickHandeler}>
                            <Link >HOMEPAGE</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >STYLE DEMO</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >FULL WIDTH</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >DROPDOWN</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >GALLERY</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >PORTFOLIO</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >LINK TEXT</Link>
                        </li>
                        <li onClick={clickHandeler}>
                            <Link >LONG LINK TEXT</Link>
                        </li>
                    </ul>
                    <div className="manu-icon" onClick={clickHandeler}>
                        {click ? <AiOutlinePlus /> : <AiOutlineMinus />}                       
                        
                    </div>
                </Container>
            </nav>
        </>
    )
}
