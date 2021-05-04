import React from 'react'
import { TopHeader } from './TopHeader/TopHeader'
import {HeaderData, HeaderIcon} from './TopHeader/HeaderData'
import { Header } from './Header/Header'
import { HeaderArea } from './HeaderArea/HeaderArea'
import {HeaderAreaData} from './HeaderArea/HeaderAreaData'

export const Navbar = () => {
    return (
        <div>
           <TopHeader data={HeaderData} icon={HeaderIcon}/>
           <Header  />
           <HeaderArea data={HeaderAreaData} />
        </div>
    )
}
