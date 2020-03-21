import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import places from './places';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Title = styled.h3`
    width: 100%;
    margin-left: 8rem;
    text-transform: uppercase;
    font-size: 2.5rem;
    padding-bottom: 1rem;

    font-weight: 200;
    border-bottom: 2px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.blue2};
`;

const Map = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    return (
        <GoogleMap defaultZoom={7} defaultCenter={{ lat: 51.919437, lng: 19.145136 }}>
            {places.map(place => (
                <Marker
                    key={place.id}
                    position={{ lat: place.coords[0], lng: place.coords[1] }}
                    onClick={() => setSelectedPlace(place)}
                >
                    {/* <h1>hihihih</h1> */}
                </Marker>
            ))}
            {selectedPlace && (
                <InfoWindow
                    position={{ lat: selectedPlace.coords[0], lng: selectedPlace.coords[1] }}
                    onCloseClick={() => setSelectedPlace(null)}
                >
                    <div>Park details</div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

const MapFull = () => {
    return (
        <Container>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Container>
    );
};
export default MapFull;
