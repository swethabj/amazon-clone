import React from 'react'
import './Home.css'
import Product from './Product.js'
import mouse from './images/mouse.PNG'
import headset from './images/headset.PNG'
import lapi from './images/lapi.PNG'
import keyboard from './images/keyboard.PNG'
import setbox from './images/setbox.PNG'
import xbox from './images/xbox.PNG'


function Home() {
    return (
        <div className='home'>
                <div className='home_container'>
                        <img className='home_image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png" />
                </div>
                <div className='home_row'>
                        <Product
                                 id = "1"
                                 title="Xbox Wireless Controller – Aqua Shift Special Edition"
                                 price ={799.99} 
                                 rating = {4}
                                 image = {xbox}
                        />
                        <Product 
                                 id = "2"
                                 title="Cosmic Byte GS410 Wired Headphones with Mic and for PS5, PS4, Xbox One, Laptop, PC, iPhone and Android Phones (Black/Blue, Pack Of 1)"
                                 price ={780} 
                                 rating = {3}
                                 image = {headset}
                        />
                </div>
                <div className='home_row'>
                        <Product 
                                 id = "3"
                                 title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)"
                                 price ={495.00} 
                                 rating = {4}
                                 image = {mouse}
                        />
                        <Product 
                                 id = "4"
                                 title="Redgear MP35 Speed-Type Gaming Mousepad (Black/Red)"
                                 price ={200} 
                                 rating = {2}
                                 image = {lapi}
                        />
                        <Product 
                                 id = "5"
                                 title="Razer Huntsman Mini 60% Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Classic Black"
                                 price ={4000.00} 
                                 rating = {5}
                                 image = {keyboard}
                        />
                </div>
                <div className='home_row'>
                <Product 
                                 id = "6"
                                 title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                                 price ={3650.00} 
                                 rating = {5}
                                 image = {setbox}
                        />
                </div>
        </div>
    )
}

export default Home
