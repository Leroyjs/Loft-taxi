import React from 'react'
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
    constructor(props){
      super(props);
      this.mapContainer = React.createRef();
    }

    componentDidMount() {
      console.log(this.mapContainer.current);
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9'
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
  