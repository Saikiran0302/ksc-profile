import React from "react"
import HomeImg from "./images/saikiran_image21.jpeg"

const Home = () => {
    return (
        <>
            {/* custom cursors */}
            <div className="cursor-1"></div>
            <div className="cursor-2"></div>

            <div id="menu-bars" className="fas fa-bars"></div>

            {/* Header section */}

            <header>

                <a href="#" className="logo"> <span>KATEPALLI</span> SAIKIRAN </a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#Myskills">My skills</a>
                    <a href="#eductaion">Education</a>
                    <a href="#contact">contact</a>
                </nav>

                <div className="follow">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                </div>

            </header>

            <section className="home" id="home">

                <div className="content">
                    <span className="hi"> Hi There... </span>
                    <h3> I am <span> KATEPALLI SAIKIRAN </span> </h3>
                    <p className="info"> intrested in front-end web development </p>
                    <p className="text"> Self-motivated and hardworking fresher seeking for an opportunity to work in a
                        challenging environment to prove my skills and utilize my knowledge and intelligence in the growth
                        of the organization.</p>
                    <a href="#about" className="btn">about me</a>
                </div>

                <div className="image">
                    <img src={HomeImg} alt="" />
                </div>

            </section>

        </>
    )
}
export default Home