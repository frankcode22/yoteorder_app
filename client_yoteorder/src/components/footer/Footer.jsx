import React from 'react'
import Footbody from './Footbody'
import Footbottom from './Footbottom'
import Foothead from './Foothead'
import './FooterStyles.css'

export default function Footer() {
    return (
        <div>
           <Foothead />
            <Footbody />
            <Footbottom />

        </div>
    )
}
