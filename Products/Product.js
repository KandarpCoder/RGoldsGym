import React from "react";
import { render } from "react-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../images/products/img1.jpg'
import img2 from '../../images/products/img2.jpg'
import img3 from '../../images/products/img3.jpg'
import img4 from '../../images/products/img4.jpg'
import img5 from '../../images/products/img5.jpg'
import img6 from '../../images/products/img6.jpg'




export default function Products() {
    return (
        <div className="Product">
            <Carousel autoPlay>
                <div>
                    <img alt="" src={img1} />
                    <p className="legend">Fat Burner</p>
                </div>
                <div>
                    <img alt="" src={img2} />
                    <p className="legend">Warrior BCAA PRO</p>
                </div>
                <div>
                    <img alt="" src={img3} />
                    <p className="legend">Weight Gainer</p>
                </div>
                <div>
                    <img alt="" src={img4} />
                    <p className="legend">Weight Isolate</p>
                </div>
                <div>
                    <img alt="" src={img5} />
                    <p className="legend">Product Combo</p>
                </div>
                <div>
                    <img alt="" src={img6} />
                    <p className="legend">Whey Protein</p>
                </div>
            </Carousel>
        </div>


    );



}
// export default Products;