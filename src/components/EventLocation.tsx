import { FC, useRef, useState, useEffect } from 'react';
import { Location } from '../react-app-env';
import {
    Box
} from '@chakra-ui/react';
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {Marker} from 'react-map-gl';

interface IEventLocation {
    location: Location | undefined;
}

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib3pndXJzIiwiYSI6ImNsNG42ZGlscjFhbDkzYm54eDNpanRjYjgifQ.QGFqBYyR3gE1gKUGuzDb3w'; // Set your mapbox token here

const EventLocation: FC<IEventLocation> = ({location}) => {
    if(!location){
        return (<Box></Box>);
    }

    return (
      <Box mt='32'>
      <Map
        initialViewState={{
          latitude: location.center.lat,
          longitude: location.center.lng,
          zoom: location.zoom + 5
        }}
        
        style={{width: '100%', height: '40vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={location.center.lng} latitude={location.center.lat} anchor="center" />
      </Map>
      </Box>
    );
}




export default EventLocation;