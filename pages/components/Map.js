import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFmYW96dHVyazM0IiwiYSI6ImNrdm1iNXd2dTA5NWIycGpwYWJrbWt5Y2kifQ.TtejJBtK0J0XU85fgsO6eg';

const map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
    });

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default map

const Wrapper = tw.div`
flex-1
`
