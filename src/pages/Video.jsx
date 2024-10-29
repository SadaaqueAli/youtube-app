import React, { useEffect } from 'react';
import styled from 'styled-components';
import VideoTube from '../images/video.mp4'
import Chaneliamge from '../images/chanel.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ShareIcon from '@mui/icons-material/Share';
import Comments from '../components/Comments';
import Card from '../components/Card'



const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  flex: 5;
`;

const Videowrapper = styled.div`
  iframe {
    width: 100%;
    height: 400px;
    border-radius: 12px; /* Add border-radius for rounded corners */
  }
`;

const Title = styled.h1`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({ theme }) => theme.text}; 
`;

const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Info = styled.span`
 color: ${({ theme }) => theme.textSoft}; 
 `;

const Buttons = styled.div`
display:flex;
gap:20px;
color:${({ theme }) => theme.text}; 

`;

const Button = styled.div`
display:flex;
align-items:center;
gap:5px;
cursor: pointer;
`;

const Hr = styled.hr`
margin:15px 0px;
border:0.5px solid ${({ theme }) => theme.soft}; 
`;

const Recomendation = styled.div`
  flex: 2;
`;
const Chanel = styled.div`
  display:flex;
  justify-content:space-between;
`;

const ChanelInfo = styled.div`
display:flex;
`;
const Image = styled.img`
width:50px;
height:50px;
border-radius:50%;
`;
const ChanelDetail = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
color:${({ theme }) => theme.text}; 
`;
const ChanelName = styled.span`
font-weight:500;
`;
const ChanelCounter = styled.span`
margin-top:5px;
margin-bottom:10px;
color:${({ theme }) => theme.textSoft};
font-size:12px;
`;
const Discription = styled.div`
font-size:14px;
`;
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight:500;
color:white;
border:none;
border-radius:3px;
height:max-content;
padding:10px 20px;
cursor: pointer;
`;


export default function Video() {
  useEffect(() => {
    console.log("Video component rendered");
  }, []);

  return (
    <Container>
      <Content>
        <Videowrapper>
          <iframe
            width="100%"
            height="400"
            src={VideoTube} // Change to your own video source or ID
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Videowrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,456,154 views . jun 22,2024</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon />Like</Button>
            <Button><ThumbDownOffAltIcon />DisLike</Button>
            <Button><LibraryAddIcon />Save</Button>
            <Button><ShareIcon />Share</Button>
          </Buttons>
        </Details>
        <Hr />
        <Chanel>
          <ChanelInfo>
            <Image src={Chaneliamge} />
            <ChanelDetail>
              <ChanelName>code with sada</ChanelName>
              <ChanelCounter>200k flowers</ChanelCounter>
              <Discription>Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Fugit, placeat.</Discription>
            </ChanelDetail>
          </ChanelInfo>
          <Subscribe>SUBSCRIPBE</Subscribe>
        </Chanel>
        <Hr />
        <Comments />
      </Content>
      <Recomendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomendation>
    </Container>
  );
}
