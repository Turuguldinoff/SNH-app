import React, {Component} from 'react'; 
import styled from 'styled-components'; 
import { Link}  from 'react-router-dom';

const Item=styled.ul`
    width: 100%; 
    height : 8%; 
    box-sizing: border-box;
    max-width:500px;
    margin-top: 2%!important;
    margin: 0 auto; 
    padding: 1em; 
    border-radius: 5px;
    border-left: 10px solid black; 
    -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    transition: 0.3s all linear;
    letter-spacing: 3px; 
    &:hover{ 
        border-left: 10px solid transparent;
        border-right: 10px solid black;
    }
`


export default class ItemList extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <Item>
            <Link to='/inspect'> 
            {this.props.title}
            </Link>
            </Item>
        )
    }

}