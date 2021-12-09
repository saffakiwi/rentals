import React from "react";
import '../CSS_pages/Homepage.css';
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
                        

                    </div>
                    <div className = "contact_us">
                        

                    </div>
                </nav>
            </div>
        </div>
        <div className = "sea_img">
           

        </div>
        <span className = "find_rental_property"> Find Your Rental Property</span>
        <span className = "property_listings"> Property Listings and Local Reviews</span>
        <button className = "search_listings" onClick={()=> {navigate("/Droppin")}}>
            

            
            <div className = "search_original">SEARCH LISTINGS</div>
        </button>
        <Footer />
    </div>
    )
}

export default Homepage;