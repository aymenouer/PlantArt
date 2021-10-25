
import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Accessoires } from '../components/Accessoires'
import { Slider } from '../components/Slider'
import { Newsletter } from './../components/Newsletter';

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Accessoires/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
