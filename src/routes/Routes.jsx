import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {Music} from "../components/navbar"
import {SongsList} from "../components/songs";
import {LoginPage} from "../components/login";
import {SigninPage} from "../components/signup";
function Routes() {
  return (
    <>
 
    

      <Switch>
        <Route exact path="/">
          <Music />
          </Route>
          <Route path='/productss/:id'>
          <SongsList/>
        </Route>
        
        
        {/* <Route path='/songlist'>
          <SongsList/>
        </Route> */}
       
      
        <Route path="/login">
          <LoginPage /> 
        </Route>
        <Route path="/register">
          <SigninPage /> 
        </Route>
        <Route>
          <h3>Error</h3>
        </Route>
        
      </Switch>
     
    </>
  );
}

export { Routes };
