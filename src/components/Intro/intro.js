import React from "react";
import './intro.css';
import {Link} from 'react-scroll'
const Intro = () =>{
    return (
     <section id='intro'>
        <div className="introContent">
        <sapn className='hello'> Hello </sapn>
        <sapn className='introTest'> I am <sapn className='introName'> Gourav Jain </sapn> <br/> Website Designer</sapn>
        <sapn className='introPara'> I am skilled as a web developer, Video editor and Voice over Artist.  </sapn>
        <Link><button></button></Link>
        </div>
        <img src="" alt="profile" className="bg"/>
     </section>
    )
}
export default Intro;