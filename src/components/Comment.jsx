import React from 'react'
import styled from 'styled-components';
import  CommentName from '../images/chanel.jpg';

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
gap:10px;
`;

const Name = styled.span`
font-size:13px;
font-weight:500;
`;
const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.textSoft};
margin-left:5px;
`;
const Text = styled.span``;

const Comment = () => {
    return (
        <Container>
            <Avatar src={CommentName}/>
            <Details>
                <Name>Sadaqat</Name>
                <Date>1 day ago</Date>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
            </Details>
        </Container>
    )
}

export default Comment
