import React from 'react'
import { useState, useEffect } from 'react';
import ReactMapGL,  {Marker} from 'react-map-gl';
import {Room} from '@material-ui/icons';
import axios from 'axios';
import Paper from '@material-ui/core/paper';
import Typography from '@material-ui/core/typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  price: {
    backgroundColor: "red",
    color: "white",
    padding: "3px",
    display: "flex",
    marginBottom: "-11px",
  },
  pins: {
    
    
  }
}));

function Map() {
  const classes = useStyles();
  

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: -36.8872772,
    longitude: 174.7473766,
    zoom: 12
  });

  const [rental, setRental] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  
  useEffect(() => {
    const getRental = async () => {
      try {
        const res = await axios.get("http://localhost:4002/rentals");
        setRental(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getRental()
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

{rental.map(rental=>(

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
        onClick={()=>handleMarkerClick(rental._id)}
      />
      </Marker>
      ))}
  </ReactMapGL>
    </div>
   
)
}

export default Map;