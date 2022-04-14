import React from "react";

const Contact=()=>{
    return(
       <>
       <section class="contact" id="contact">
       <h1 class="heading"> contact <span> me </span> </h1>
       <div class="icons-container">
          <div class="icons">
            <i class="fas fa-envelope"></i>
            <h3>Email Details</h3>
            <p>saikatepalli1997@gmail.com</p>
            <p>katepallisaikiran1997@gmail.com</p>
          </div>
          <div class="icons">
            <i class="fas fa-phone"></i>
            <h3>Mobile Number</h3>
            <p>+91 8951578265</p>
            <p>+91 7989323072</p>
        </div>

        <div class="icons">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Contact Details</h3>
            <p>Venkatapuram village, podalakur mandal,Nellore district, Andhra Pradesh, india - 524345</p>
        </div>
       </div>

       <div class="row">

<form action="">

    <input type="text" placeholder="name" class="box"/>
    <input type="email" placeholder="email" class="box"/>
    <input type="number" placeholder="number" class="box"/>

    <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>

    <input type="submit" class="btn" value="send message"/>

</form>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30920.790811315674!2d79.59349028928447!3d14.363690981334916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cc6f38a3dd913%3A0x7aa22bd43a814e78!2sPulikollu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1649918418607!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

</div>

       </section>
       </>
    )
}
export default Contact