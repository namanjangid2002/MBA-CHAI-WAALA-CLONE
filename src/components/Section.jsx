import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ h3, text, hasBtn = true, btnTxt, imgsrc, imgsize = "70%", bgcolor, headingcolor, textcolor, btnbgcolor, btncolor }) => {
    return (
        <section style={{ backgroundColor: bgcolor }} className='section'>
            <div>
                <motion.h3 style={{ color: headingcolor }} data-cursorpointer={true} initial={{ y: "100%",opacity:0, }} whileInView={{y:0,opacity:1}}>{h3}</motion.h3>
                <p style={{ color: textcolor }}>{text}</p>
                {
                    hasBtn && <button style={{ color: btncolor, backgroundColor: btnbgcolor, borderRadius: "7px" }}>{btnTxt}</button>
                }
                <div>
                    <img style={{ width: imgsize }} src={imgsrc} alt="ImgSrc" />
                </div>
            </div>
        </section>
    )
}

export default Section
