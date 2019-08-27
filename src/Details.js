import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class Details extends Component {
    
    constructor() {
        super();
        this.state = {
            welcomeMsg : 'Hello, this will be the details page for each Movie & TV show'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState ( {
                welcomeMsg: 'Huraaaah!!! The title changes after 3 seconds -:)'
            });
        }, 3000);
    }

    render () {
        return (
            <>
                <h1>{this.state.welcomeMsg}</h1>
                <Link to='/'>  Back to home  </Link>
            </>
        );
    }
}