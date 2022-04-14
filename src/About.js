import React from "react"
import AboutImg from "./images/saikiran_image.jpeg"
import Myresume from "./pdf/katepalli_sai_resume1.pdf"
const About=()=>{
 return(
     <>
     <section class="about" id="about">

<h1 class="heading"> about <span> me </span> </h1>

<div class="row-1">

    <div class="image">
        <img src={AboutImg} alt=""/>
    </div>
    <div class="content">
        <h3> my name is katepalli saikiran & i am a front-end developer </h3>
        <p>Along with my degree i have learnt new technologies related to front-end web development. my skillset is <span style={{color:"blue"}}>Html, Css, Javascript, Reactjs</span></p>
        <div class="box-container">
            <div class="box">
                <p> <span> dob : </span> 17-08-1997 </p>
                <p> <span> gender : </span> male </p>
                <p> <span> language : </span> telugu, english </p>
                <p> <span> work : </span> front-end developer </p>
            </div>
            <div class="box">
                <p> <span> freelance : </span> available </p>
                <p> <span> phone : </span> +91 7989323072 </p>
                <p> <span> email : </span> saikatepalli1997@gmail.com </p>
                <p> <span> country : </span> india </p>
            </div>
        </div>
        <a href={Myresume} class="btn">download CV</a>
        <a href="mailto:saikatepalli1997@gmail.com" title="send me a mail" class="btn">hire me</a>
    </div>

</div>

</section>
     </>
 )
}
export default About