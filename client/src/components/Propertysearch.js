import React, {Component} from "react";
import '../CSS_pages/Propertysearch.css';
import {Checkbox} from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import {Menu} from '@material-ui/core';
import {Select,MenuItem} from '@material-ui/core';
import {InputLabel} from "@material-ui/core";
import {FormControl} from "@material-ui/core";



class Propertysearch extends Component{
    render(){
            return (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className ="Propertysearch">
=======
                <div className ="Propertysearch">
>>>>>>> 999c7a70c5cb79c41603b7e2679ffbfb3f2a7927
=======
                <div className ="Propertysearch">
>>>>>>> 2141f5af748b9834b9721f4bb2386bfa17ad23ac
                <div className="social_filters">
                    <div className = "text_box2"> </div>
                    <span className = "social_filter_text">Property Filters</span>
                    <span className = "parks_text">Price</span>
                    <span className = "min">Min</span>
                    <span className = "max">Max</span>
                    <span className = "pets_text">Bathrooms</span>
                    <span className = "bedroom_text">Bedrooms</span>
                    <span className = "keyword_search">Keyword search</span>
                    <input className = "text_box" type="text" placeholder="Pools, karate, fish market, music, venue, fishing...."/>
                    <div className="grey_block"></div>
                    <span className = "supermarkets_text">Property Type</span>
                    <div className = "grey_box2"></div>
                </div>
                <div className = "supermarkets">
                    <FormGroup className="form_group_supermarkets">
                        <FormControlLabel control={<Checkbox defaultChecked  color="black"/>} label="All" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Apartment" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Villa" />
                    </FormGroup>
                    <FormGroup className="form_group_supermarkets2">
                        <FormControlLabel control={<Checkbox color="black"/>} label="House" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Disabled" />
                    </FormGroup>
                </div>
                <div className = "line"></div>
                <div className = "Price">
                    <Select className="min_price" label="min" displayEmpty  inputProps={{id: "hey"}}> 
                        <MenuItem value={1}>$500</MenuItem>
                        <MenuItem value={2}>$600</MenuItem>
                        <MenuItem value={3}>$700</MenuItem>
                        <MenuItem value={4}>$800</MenuItem>
                        <MenuItem value={5}>$900</MenuItem>
                    </Select>
                    <Select className="max_price" label="max" displayEmpty>
                        <MenuItem value={1}>$500</MenuItem>
                        <MenuItem value={2}>$600</MenuItem>
                        <MenuItem value={3}>$700</MenuItem>
                        <MenuItem value={4}>$800</MenuItem>
                        <MenuItem value={5}>$900</MenuItem>
                    </Select>
                </div>
                <div className = "line2"></div>
                <div className = "bathroom">
                    <FormGroup className="form_group_bathroom">
                        <FormControlLabel control={<Checkbox defaultChecked  color="black"/>} label="Any" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="1" />
                    </FormGroup>
                    <FormGroup className="form_group_bathroom2">
                        <FormControlLabel control={<Checkbox color="black"/>} label="2" />
                    </FormGroup>
                </div>
                <div className = "bedrooms">
                    <FormGroup className="form_group_bedrooms">
                        <FormControlLabel control={<Checkbox defaultChecked  color="black"/>} label="Any" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="1" />
                    </FormGroup>
                    <FormGroup className="form_group_bedrooms2">
                        <FormControlLabel control={<Checkbox color="black"/>} label="2" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="3" />
                    </FormGroup>
                </div>
                <div className = "line3"></div>
                <div className = "line4"></div>
                <button className = "search_button">SEARCH</button>
            </div>
        )
    }
}


export default Propertysearch;