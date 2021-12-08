import React, {Component} from "react";
import '../CSS_pages/Filtersearch.css';
import {Checkbox} from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';



class Filtersearch extends Component{

    constructor(props){
        super(props)

        this.state = {
            selected: true
        }
    }

    render(){
        if(this.state.selected){
            return (
                <div className ="Filtersearch">
                <div className="social_filters">
                    <div className = "text_box2"> </div>
                    <span className = "social_filter_text">Social Filters</span>
                    <span className = "parks_text">Parks</span>
                    <span className = "pet_text">Pets</span>
                    <span className = "keyword_search">Keyword search</span>
                    <input className = "text_box" type="text" placeholder="Pools, karate, fish market, music, venue, fishing...."/>
                    <div className="grey_block"></div>
                    <span className = "supermarkets_text">Supermarkets</span>
                    <div className = "grey_box2"></div>
                </div>
                <div className = "supermarkets">
                    <FormGroup className="form_group_supermarkets">
                        <FormControlLabel control={<Checkbox defaultChecked  color="black"/>} label="All types" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Countdown" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Four Square" />
                    </FormGroup>
                    <FormGroup className="form_group_supermarkets2">
                        <FormControlLabel control={<Checkbox color="black"/>} label="New World" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Pack N' Save" />
                    </FormGroup>
                </div>
                <div className = "Line"></div>
                <div className = "parks">
                    <FormGroup className="form_group_parks">
                        <FormControlLabel control={<Checkbox defaultCecked  color="black"/>} label="All types" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Bushland" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Cricket Ground" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Playground" />
                    </FormGroup>
                    <FormGroup className="form_group_parks2">
                        <FormControlLabel control={<Checkbox  color="black"/>} label="Soccer Pitch" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Skate Park" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Beach" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Dog Park" />
                    </FormGroup>
                </div>
                <div className = "Line2"></div>
                <div className = "pet">
                    <FormGroup className="form_group_pet">
                        <FormControlLabel control={<Checkbox defaultChecked  color="black"/>} label="Dog Parks" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Vet Clinics" />
                    </FormGroup>
                    <FormGroup className="form_group_pets">
                        <FormControlLabel control={<Checkbox  color="black"/>} label="Off Leash Areas" />
                        <FormControlLabel control={<Checkbox color="black"/>} label="Social Clubs" />
                    </FormGroup>
                </div>
                <div className = "Line3"></div>
                <button className = "search_button">SEARCH</button>
            </div>
            )
        }
        else {
            return(
                <div>Not Selected</div>
            )
        }
    }
}

export default Filtersearch;