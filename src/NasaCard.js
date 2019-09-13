import React from "react";
import NasaInfo from "../src/NasaInfo"
import styled from 'styled-components';
// import { Alert } from 'reactstrap';

const WrapperDiv = styled.div`


text-align: center;
width: 100%;
margin-top: 5%;

`;
const PhotoH1 = styled.h1`
color: red;
font-size: 1.5rem;
`;

const ImgStyle = styled.img`
width: 40%;
border-radius: 5px;
`;
const NasaCard = props => {
    console.log(props)

    return (
        
        <WrapperDiv>
            <div key={props.id}>

                <PhotoH1>Camera Name: {props.rovername}</PhotoH1>



                <ImgStyle src={props.banana} alt="NASA photo"></ImgStyle>

            </div>
        </WrapperDiv>
    )
}

export default NasaCard