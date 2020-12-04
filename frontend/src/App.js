import './App.css';
import React, {Component} from 'react';
import {useQuery,gql} from '@apollo/client'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Header from './components/header';
import Footer from './components/footer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Background = styled(Box)({
  background: 'linear-gradient(to bottom,#f90038, #1c1c1c 90%)',
  // background: 'linear-gradient(tp bottom 90deg, rgba(245,1,55,1) 0%, rgba(188,21,38,1) 35%, rgba(192,46,23,1) 70%)',
  color: 'black',
});

const ALL_ALBUMS = gql`{
  albums {
    id
    albumName
    imageUrl
  }
}`;
function FrameGrid(props) {
  const { classes } = props;
  const {loading, error, data}= useQuery(ALL_ALBUMS);

  var emptySquares = 0;
  emptySquares = 6 - data.albums.length;
  var emptyFrames = [];
for (var i = 0; i < emptySquares; i++) {
  emptyFrames.push(
<Grid item xs={3} sm={3} md={4} style={{maxWidth:"100%"}}>
    <img src={'frame.png'} style={{ width:"170px"}} alt={"frame"}/> 
    </Grid>
    
    );
}

  return (
    <React.Fragment>
        <Grid container justify="space-between" spacing={4} style={{maxWidth:"100%"}}>
      {
    data.albums.map((
      album,id
    )=>(
        <Grid item xs={3} sm={3} md={4} style={{maxWidth:"100%"}} >
        <img key={album.id} src={album.imageUrl} width="170" ></img>
    </Grid>
    
    ))}

        {emptyFrames}

    </Grid>
    </React.Fragment>
  );
}
function App(props) { 
  const { classes } = props;
  const {loading, error, data}= useQuery(ALL_ALBUMS);
  if(loading) return <p>Loading...</p>
  if(error) return <p>something is wrong!</p>
  
  return (
    
    <div >
   
<Header></Header>
    <Background width="100%" py={14}>
      <Grid container>
    <Grid item md={1} s={1} xs={1} lg={1}></Grid>
  <Grid item md={4} s={11} xs={11} lg={4}>
    <Grid container
  >
      <Grid item md={6} s={12} xs={12}>
        <h1 style={{fontSize:"66px",color:"white"}}>AMP UP <br></br> THOSE DBS  </h1>
      
        <h2>MAKE MUSIC ON THE GO.</h2>
      </Grid>
      <Grid container>
        <Box pb={2}>
        <img src={'hit-it.png'} style={{ width:"180px"}} alt={"hit it"}/> 

        </Box>
      </Grid>
    </Grid>
        </Grid>
        <Grid item xs={1} sm={1} ></Grid>
        <Grid item xs={6} sm={6} md={6} style={{maxWidth:"100%"}}>
        <Grid container>
          <FrameGrid classes={classes} /> 
        
        </Grid></Grid>
      </Grid>
    </Background>
    <Box height={400} width="100%" pt={12} >
      <Grid container
  alignItems="flex-start"
  spacing={1}>
      <Grid item md={1} s={1} xs={1}></Grid>
      <Grid item md={11} s={11} xs={11}>
      <Grid item md={11} s={11} xs={10}>
        <h1 style={{fontSize:"50px"}}>GET PRODUCIN WITH MUSICDB</h1>
      </Grid>
      <Grid item md={11} s={11} xs={11}>

        <h1 style={{marginBottom:"unset"}}>PICK YOUR PREFERED INSRUMENT</h1>
      </Grid>
      <Grid item md={11} s={11} xs={11}>

        <h5 style={{marginTop:"unset"}}>PICK THE INSTRUMENT YOU NEED TO COMPOSE YOUR PIECE</h5>
        <h5 style={{color:"red"}}>START COMPOSING</h5>
      </Grid>
      </Grid>
      </Grid>
    </Box>
    <Footer></Footer>
    </div>
  );
 }
export default App;
