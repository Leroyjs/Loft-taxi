import React from 'react'
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
    constructor(props){
      super(props);
      this.mapContainer = React.createRef();
    }

    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoibGVyb3lqcyIsImEiOiJjazVyd3NudWMwN2xtM2tud2g2bHNxMWF0In0.oEY3_if4FnRim8tQNlJlAA";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [60.6122000, 56.8519000],
        zoom: 11
      });
    }
    
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {

      const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
      };
  
      return <div style={style} ref={this.mapContainer} />;
    }
  }
  