import { Paper } from '@mui/material';
import React from 'react';

import logo1 from '../images/logo1.png';
export default class Header extends React.Component{
    //class components
    render(){

        //return jsx
        return(<Paper elevation={10}>
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <div>
                <h1> demo app</h1>
                <img src={logo1} width="400px" alt='no image'/>
                
            
            </div>
            </div>
        </Paper>
            
        )
         


    }
 }