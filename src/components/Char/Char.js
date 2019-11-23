import React from 'react';
import { Link } from 'react-router-dom';
import { GridList, CardContent, Card,
    GridListTile, ListSubheader, GridListTileBar 
} from '@material-ui/core';

import Image from '../Image/Image';


const Char = (props) => { 
    let data = {
        name: "",
        gender: "",
        order: ""
    }

    if(props.location.data) {
        data = props.location.data[0];
    }

    const characters = require('../../assets/characters.json').chars.filter(c => {
        return c.gender === data.gender && c.order === data.order;
    });
    
    return (
        <Card>
            <CardContent style={{padding: "20px", display: "block"}}>
                <GridList cellHeight={180} style={{width: 800, height: 600,}}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Personagens</ListSubheader>
                    </GridListTile>
                {characters.map(c => {
                        return(
                                <GridListTile key={c.picture}>
                                    <Link to={{
                                            pathname: "/result",
                                            data: [{
                                                name: data.name,
                                                charName: c.name
                                            }]
                                        }}>
                                        <Image name={c.picture} />
                                    </Link>
                                    <GridListTileBar
                                        title={c.name}
                                    />
                                </GridListTile>
                            );
                    })
                }
                </GridList>
            </CardContent>
        </Card>
    );
}   

export default Char;