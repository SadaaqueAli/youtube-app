import React from 'react'
import styled from 'styled-components'
import VideoTube from '../images/video.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
width:300px;
margin-bottom:45px;
cursor: pointer;

`
const Image = styled.img`
  width:100%;
  height:202px;
  background-color:#999;
`;

const Detail = styled.div`
display:flex;
margin-top:16px;
gap:12px;
`
const ChanelImage = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text}; 
  margin: 0;
`;

const ChanelName = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft}; 
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft}; 
`;


export default function Card() {
    return (
        <Link to="video/test" style={{textDecoration:"none"}}>
        <Container>
            <Image src={VideoTube} />
            <Detail>
            <ChanelImage src={VideoTube} />
            <Text>
                <Title>Test Video</Title>
                <ChanelName>Code with sada</ChanelName>
                <Info>656,621 views 1 day ago</Info>
            </Text>
            </Detail>
        </Container>
        </Link>
    )
}
