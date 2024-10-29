import React from 'react';
import styled from 'styled-components';
import cardImage from '../images/cardImage.jpg';
import VideoTube from '../images/video.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: ${(props) => (props.type !== "sm" ? "235px" : "100%")};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => (props.type === "sm" ? "flex" : "block")};
  gap:10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "110px" : "180px")};
  background-color: #999;
  flex: 1;
  border-radius:12px;
`;

const Detail = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const ChanelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === "sm" && "none")};
`;

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

export default function Card({ type }) {
  return (
    <Link to="video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={cardImage} />
        <Detail type={type}>
          <ChanelImage type={type} src={VideoTube} />
          <Text>
            <Title>Test Video</Title>
            <ChanelName>Code with sada</ChanelName>
            <Info>656,621 views 1 day ago</Info>
          </Text>
        </Detail>
      </Container>
    </Link>
  );
}
