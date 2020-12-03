import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function Footer(){
    return (<Box height={400} width="100%" style={{backgroundColor:"#1b191a"}} >
    <Box pt={10}>
    <Grid
container
alignItems="flex-start"
direction="row"
spacing={1}>
 
     <Grid item md={1} s={1} xs={1}></Grid>
     <img src={'logo-white.png'} style={{ width:"150px", }} alt={"logo white"}/> 

      </Grid>
    <Grid
container
alignItems="flex-start"
direction="row"
spacing={40}>
 
     <Grid item md={4} s={1} xs={1}></Grid>

     <Grid item md={1} s={4} xs={4}>
     <Grid
container

spacing={2}>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>PROFILE</a>
  </Grid>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>SIGN IN</a>
  </Grid>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>MUSIC</a>
  </Grid>
</Grid>
     </Grid>
      </Grid>
<Box  pt={14}>
 <Grid container justify="space-evenly">
 <Grid item md={1} s={0} xs={0}></Grid>
 <Grid item md={9} >
    <Grid container>
   <Grid item md={1} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>LEGAL</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>PRIVACY CENTER</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>PRIVACY POLICY</a></Grid>
<Grid item md={1} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>COOKIES</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>ABOUT ADS</a>
   </Grid>
   </Grid>
   </Grid>
  <Grid item md={2} s={10} xs={10}>
<a href="" style={{textDecoration:"none"}}>©2019 MUSICDB</a>

   </Grid>

 </Grid>

</Box>

    </Box>
   </Box>);
}
export default Footer;