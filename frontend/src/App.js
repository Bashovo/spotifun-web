import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      albums:[],
      isAlbumLoaded:false,
      

    }
}
  componentDidMount() {
    fetch("http://127.0.0.1:8000/albums/")
        .then(res => res.json())
        .then(json=>{
          this.setState({
            isAlbumLoaded : true,
            albums : json
          })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
       
}


  render(){
    var {isAlbumLoaded , albums} = this.state;
    if(!isAlbumLoaded){
      return <div>Loading...</div>;
    }
    
  return (<div className = "App">

    <ul>
      {albums.map(album=>(
          <li key = {album.id}>
         <h2>Album Name : {album.albumName} | Artist : {album.artist} | Songs: {album.songs+", "}</h2> 
          
          </li>
      ))}
    </ul>
  </div>)
  }
}

export default App;
