import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Layout from './Layout';
import './style.css'


 const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

const Home = () => {
    return(
        <div>
            <Layout>
                <div style={{   borderCollapse: "separate",borderSpacing: "15px" , border: "5px solid lightblue"}}>
                    <Carousel
                            swipeable={true}
                            draggable={false}
                            responsive={responsive}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                        
                            <div>
                                <img width="200px"  alt="" src={require("../Resources/Images/img5.png").default} className="responsive"/>
                            </div>
                    </Carousel>
                </div>
            </Layout>
        </div>
    )
}

export default Home;