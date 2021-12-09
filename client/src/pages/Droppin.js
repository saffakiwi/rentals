import React from "react";
import { useState } from "react";
import Footer from '../components/Footer';
import '../CSS_pages/Droppin.css';
import Header from '../components/Header';
import {Select,MenuItem} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Menu} from '@material-ui/core';
import { Container } from "@material-ui/core";
import Filtersearch from '../components/Filtersearch';
import Propertysearch from '../components/Propertysearch';
import Map from '../components/Maps';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import searchIcon from '../components/images/Vector (5).png'
import filter from '../components/images/Vector (6).png';

const useStyles = makeStyles((theme) => ({
    searchfilter: {
      height: "300px"
    },
    map: {
        height: "600px",
        borderRadius: "20px"
    },
}));


function Droppin() {
    const classes = useStyles();

    function social_click() {
        console.log("clicked");
        setIsSelected(!isSelected);
        setPropertyIsSelected(false);
        handleClose();
    }

    function property_click() {
        console.log("clicked");
        setPropertyIsSelected(!propertyIsSelected);
        setIsSelected(false);
        handleClose();
    }

    const[suburb, setSuburb] = React.useState(1);
    const[property_type, setPropertyType] = React.useState(1);
    const[rent_per_week, setRentPerWeek] = React.useState(1);
    const[bathroom_number, setBathroomNumber] = React.useState(1);
    const[bedroom_number, setBedroomNumber] = React.useState(1);
    const[isSelected, setIsSelected] = useState(false);
    const[propertyIsSelected, setPropertyIsSelected] = useState(false);

    const updateSuburb=(e)=>{
        setSuburb(e.target.value);
    }

    const updateProperty=(e)=>{
        setPropertyType(e.target.value);
    }

    const updateRent=(e)=>{
        setRentPerWeek(e.target.value);
    }

    const updateBathroom=(e)=>{
        setBathroomNumber(e.target.value);
    }

    const updateBedroom=(e)=>{
        setBedroomNumber(e.target.value);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <div>
    <Container className={classes.searchfilter}>
    <div className = "Droppin">
        <Header/>
            <div className = "filter" >
                <Select className="suburb_select" value={suburb} displayEmpty onChange={updateSuburb}>
                    <MenuItem value={1} disabled>Suburb</MenuItem>
                    <MenuItem value={2}>Mount Eden</MenuItem>
                    <MenuItem value={3}>Howick</MenuItem>
                    <MenuItem value={4}>Epson</MenuItem>
                    <MenuItem value={5}>Glendowie</MenuItem>
                    <MenuItem value={6}>One Tree Hill</MenuItem>
                    <MenuItem value={7}>New Market</MenuItem>
                </Select>
            </div>
            <div className = "hold" >
                <Select className="property_select" value={property_type} displayEmpty onChange={updateProperty}>
                    <MenuItem value={1} disabled>Property Type</MenuItem>
                    <MenuItem value={2}>Furnished Apartment</MenuItem>
                    <MenuItem value={3}>Studio Apartment</MenuItem>
                </Select>
                <Select className="rent_selected" value={rent_per_week} displayEmpty onChange={updateRent}>
                    <MenuItem value={1} disabled>Rent</MenuItem>
                    <MenuItem value={2}>$500 - $560</MenuItem>
                    <MenuItem value={3}>$560 - $570</MenuItem>
                    <MenuItem value={4}>$570 - $580</MenuItem>
                    <MenuItem value={5}>$580 - $590</MenuItem>
                    <MenuItem value={6}>$590 - $600</MenuItem>
                </Select>
                <Select className="bathroom_select" value={bathroom_number} displayEmpty onChange={updateBathroom}>
                    <MenuItem value={1} disabled>Bathrooms</MenuItem>
                    <MenuItem value={2}>1</MenuItem>
                    <MenuItem value={3}>2</MenuItem>
                </Select>
                <Select className="bedroom_select" value={bedroom_number} displayEmpty onChange={updateBedroom}>
                    <MenuItem value={1} disabled>Bedrooms</MenuItem>
                    <MenuItem value={2}>1</MenuItem>
                    <MenuItem value={3}>2</MenuItem>
                </Select>
                <button class="search">
                    <img src={searchIcon}/>
                </button>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    className = "filter_button"
                    onClick={handleClick}
                >
                    <img src={filter}/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={property_click}>Property Filters</MenuItem>
                    <MenuItem onClick={social_click}>Social Filters</MenuItem>
                </Menu>
            </div>
            {isSelected && <Filtersearch/>}
            {propertyIsSelected && <Propertysearch/>}
       </div>
       </Container>

       <Container className={classes.map}>
        <div>
            <Map/>
            </div>

        </Container>
            <Footer/>
    
    </div>
    );
}

export default Droppin;