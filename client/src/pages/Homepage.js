import React from "react";
import '../CSS_pages/Homepage.css';
import screenShot from '../components/images/Screen Shot 2021-12-05 at 12.10 1.png';
import danFreeman from '../components/images/dan-freeman-hIKVSVKH7No-unsplash 1.png';
import fields from '../components/images/fields.png';
import search from '../components/images/Vector (4).png';
import {useNavigate} from "react-router-dom";
import Footer from '../components/Footer';

function Homepage() {
    let navigate = useNavigate();
    return (
    <div className = "Homepage">
        <div className = "nav-container">
            <div className = "wrapper">
                <nav>
                    <div className = "logo">
                        <img src={screenShot} alt=""/>
                    </div>
                    <div className = "contact_us">
                        <img src={fields} alt=""/>
                    </div>
                </nav>
            </div>
        </div>
        <div className = "sea_img">
            <img src={danFreeman} alt=""/>
        </div>
        <span className = "find_rental_property"> Find Your Rental Property</span>
        <span className = "property_listings"> Property Listings and Local Reviews</span>
        <button className = "search_listings" onClick={()=> {navigate("/Droppin")}}>
            <img className = "search_icon" src={search} alt=""/>
            <div className = "search_original">SEARCH LISTINGS</div>
        </button>
        <Footer />
    </div>
    )
}

export default Homepage;