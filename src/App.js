import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Grid, } from '@material-ui/core';

import User from './components/User/User';
import Order from './components/Order/Order';
import Char from './components/Char/Char';
import Result from './components/Result/Result';

import './App.css';

class App extends Component {
  render(){
        return (
            <Container fixed>
                <Grid container direction="row" alignItems="center" justify="center" style={{height:"100vh"}}>
                    <Grid container direction="column" alignItems="center" justify="center">
                        <Switch>
                            <Route exact path="/" component={User}/>
                            <Route path="/order" component={Order}/>
                            <Route path="/char" component={Char}/>
                            <Route path="/result" component={Result}/>
                        </Switch>
                    </Grid>
                </Grid>
            </Container>

        );
    }
}


export default App;
