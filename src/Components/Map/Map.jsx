import React from 'react'
import "./Map.css"

import mapIcon1 from "./../../assets/map_icon01.svg"
import mapIcon2 from "./../../assets/map_icon02.svg"
import mapIcon3 from "./../../assets/map_icon03.svg"

const Map = () => {
  return (
    <div className='Map_wrapper'>
        <h2 className='section_title'> We Are To <br></br>
        Get You <span>Your Dream House</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <div className='cards'>
            <div className='card'>
                <img src={mapIcon1} alt='Map-icon'/>
                <h3>Create Your Account <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, id sunt? Nobis ea dolorem eius reiciendis, asperiores vitae modi iste.</span></h3>
            </div>
            <div className='card'>
                <img src={mapIcon2} alt='Map-icon'/>
                <h3>Find Home<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, id sunt? Nobis ea dolorem eius reiciendis, asperiores vitae modi iste.</span></h3>
            </div>
            <div className='card'>
                <img src={mapIcon3} alt='Map-icon'/>
                <h3>Quick Process <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, id sunt? Nobis ea dolorem eius reiciendis, asperiores vitae modi iste.</span></h3>
            </div>
        </div>
    </div>
  )
}

export default Map