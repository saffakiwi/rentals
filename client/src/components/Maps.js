import React from 'react'
import { useState, useEffect } from 'react';
import ReactMapGL,  {Marker, Popup } from 'react-map-gl';
import {Room} from '@material-ui/icons';
import axios from 'axios';
import Paper from '@material-ui/core/paper';
import Typography from '@material-ui/core/typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../CSS_pages/Droppin.css';
import zIndex from '@material-ui/core/styles/zIndex';
import Filtersearch from './Filtersearch';

const useStyles = makeStyles((theme) => ({
  price: {
    backgroundColor: "red",
    color: "white",
    padding: "3px",
    display: "flex",
    marginBottom: "-11px",
  },
  amenity: {
    backgroundColor: "blue",
    color: "white",
    padding: "3px",
    display: "flex",
    marginBottom: "-11px",
  },
  pic: {
    height: "100px",
    width: "100px",
  }
}));

function Map() {
  const classes = useStyles();
  

  const [viewport, setViewport] = useState({
    borderRadius: "20px",
    marginTop: 300,
    width: '100%',
    height: 700,
    latitude: -36.8872772,
    longitude: 174.7473766,
    zoom: 12,
    zIndex: -1
  });

  const [rental, setRental] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [amenity, setAmenity] = useState([]);
 
//Getting data from server for the rentals
  useEffect(() => {
    const getRental = async () => {
      try {
        const res = await axios.get("http://localhost:4002/rentals");
        setRental(response => res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getRental()
  }, []);

  //getting data from the server for the amenities
  useEffect(() => {
    const getAmenity = async () => {
      try {
        const res = await axios.get("http://localhost:4002/amenities");
        setAmenity(response => res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getAmenity()
  }, []);

  const handleMarkerClick = (id) =>{
    setCurrentPlaceId(id)
  }


  return (
    <div>

        <ReactMapGL
  {...viewport}
  
  mapboxApiAccessToken='pk.eyJ1Ijoia2l3aXNhZmZhIiwiYSI6ImNrd3Z0OW5yeTBleXgyc2xheHNkY21sbGkifQ.OVCpkkwscJHa0NSEzoQN8Q'
  onViewportChange={nextViewport => setViewport(nextViewport)}
  mapStyle= "mapbox://styles/kiwisaffa/ckwvtde2o6adp14mnxz8vd8jd">  


{rental.map(rental => (
  <>
  <Marker 
    latitude={rental.Latitude} 
    longitude={rental.Longitude} 
    offsetLeft={-20} 
    offsetTop={-10}>
      <Paper className={classes.price}>
        <Typography >
        ${rental.Price}
        </Typography>
        </Paper>
      <Room className={classes.pins}
        style={{color: "red"}}
        onClick={() => handleMarkerClick(rental._id)}/>
      </Marker>
      {rental._id === currentPlaceId &&
      <Popup
        latitude={rental.Latitude}
        longitude={rental.Longitude}
        closeButton={true}
        closeOnClick={false}
        anchor="bottom"
        onClose={() => setCurrentPlaceId(null)}>

        <div>
          <img className={classes.pic} src="lounge.jpeg" alt="hero"/>
          <h4 style={{color: "black"}}>${rental.Price}</h4>
          <p style={{color: "black"}}>{rental.Bedrooms} Beds | {rental.Bathrooms} Baths</p>
        </div>

        </Popup>
   }
   </>
))}

{amenity.map(amenity => (
  <>
  <Marker 
    latitude={amenity.Latitude} 
    longitude={amenity.Longitude} 
    offsetLeft={-20} 
    offsetTop={-10}>
      <Paper className={classes.amenity}>
        <Typography >
        {amenity.Name}
        </Typography>
        </Paper>
      <Room className={classes.pins}
        style={{color: "blue"}}
        onClick={() => handleMarkerClick(amenity._id)}/>
      </Marker>
      {amenity._id === currentPlaceId &&
      <Popup
        latitude={amenity.Latitude}
        longitude={amenity.Longitude}
        closeButton={true}
        closeOnClick={false}
        anchor="bottom"
        onClose={() => setCurrentPlaceId(null)}>

        <div>
          <img className={classes.pic} src="dogs.jpeg" alt="hero"/>
          <h4 style={{color: "black"}}>{amenity.Name}</h4>
          <p style={{color: "black"}}>{amenity.Suburb}</p>
        </div>

        </Popup>
   }
   </>
))}
  </ReactMapGL>
    </div>
   
);
}

export default Map;