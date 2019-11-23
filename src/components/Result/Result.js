import React, { useEffect, useState } from 'react';
import {  CardContent, Card, ListItem, 
    ListSubheader, ListItemText, Typography 
 } from '@material-ui/core';import List from '@material-ui/core/List';


import api from '../../service/api';


const Result = (props) => { 

    const [char, setChar] = useState({});
    let name = '';

    useEffect(() => {
        if(props.location.data) {
            name = props.location.data[0].charName;
        }

        async function loadChar() {
            const response = await api.get(`/api/people/?search=${name}`);
            setChar(response.data.results[0]);
        }
        loadChar();
    }, []);
    
    return (
        <Card>
            <CardContent style={{padding: "20px", display: "grid"}}>
                <List style={{
                        width: '100%',
                        maxWidth: 1000
                    }}>
                    <ListSubheader component="div" style={{fontSize: "3rem"}}>{char.name}</ListSubheader>  
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Gênero"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.gender}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Cor do olho"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.eye_color}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Cor do cabelo"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.hair_color}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Altura"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.height}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Peso"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.mass}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary="Cor da pele"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={{display: 'inline'}}
                                    color="textPrimary"
                                >
                                    {char.skin_color}
                                </Typography>
                                
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}   

export default Result;