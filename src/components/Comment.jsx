import React from 'react'
import styled from 'styled-components';
import CommentName from '../images/chanel.jpg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Container = styled.div`
    display:flex;
    gap:10px;
    margin:30px 0px;

`

const Avatar = styled.img`
width:60px;
height:60px;
border-radius:50%;
`;
const Details = styled.div`
display:flex;
flex-direction:column;
gap:5px;
`;

const Name = styled.span`
font-size:15px;
font-weight:500;
color:${({ theme }) => theme.text}; 
`;
const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.textSoft};
margin-left:5px;
`;
const Text = styled.span`
color:${({ theme }) => theme.textSoft}; 
`;

const Buttuns = styled.div`
display:flex;
gap:20px;
color:${({ theme }) => theme.text}; 

`;

const Buttun = styled.div`
display:flex;
align-items:center;
gap:5px;
cursor: pointer;
`
const Comment = () => {
    return (
        <Container>
            <Avatar src={CommentName} />
            <Details>
                <Name>Sadaqat</Name>
                <Date>1 day ago</Date>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                <Buttuns>
                    <Buttun><ThumbUpOffAltIcon />2</Buttun>
                    <Buttun><ThumbDownOffAltIcon /></Buttun>
                </Buttuns>
            </Details>
        </Container>
    )
}

export default Comment
