import React from 'react'
import { useState, useEffect } from 'react';
import ReactMapGL,  {Marker} from 'react-map-gl';
import {Room} from '@material-ui/icons';
import axios from 'axios';
import Paper from '@material-ui/core/paper';
import Typography from '@material-ui/core/typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../CSS_pages/Droppin.css';
import zIndex from '@material-ui/core/styles/zIndex';

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
  const [suburbName, setSuburbName] = useState('');
  const [suburbData, setSuburbData] = useState();
  const [data, setData] = useState([]);

  {/*useEffect(() => {
    axios.get('http://localhost:4002/rentals')
    .then(rental => rental.data)
    console.log(rental)
    .then(rentalData => {
      setRental(suburbData)
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  useEffect(() => {
    setSuburbData(data.filter(i => i.suburb === suburbName)[0])
  }, (data, suburbName))*/}

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

  {/*useEffect(() => {
    setRental(data.filter(rental => rental.suburb === suburbName)[0])
  }, [data, suburbName])*/}

  const handleMarkerClick = (suburb) =>{
    setCurrentPlaceId("mt eden")
  }


  return (
    <div>
        <ReactMapGL
  {...viewport}
  
  mapboxApiAccessToken='pk.eyJ1Ijoia2l3aXNhZmZhIiwiYSI6ImNrd3Z0OW5yeTBleXgyc2xheHNkY21sbGkifQ.OVCpkkwscJHa0NSEzoQN8Q'
  onViewportChange={nextViewport => setViewport(nextViewport)}
  mapStyle= "mapbox://styles/kiwisaffa/ckwvtde2o6adp14mnxz8vd8jd">  


{rental.map(rental => (

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
        onClick={()=>handleMarkerClick(rental.suburb)}
      />
    
      </Marker>
      ))}
  </ReactMapGL>
    </div>
   
)
}

export default Map;