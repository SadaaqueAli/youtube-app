import React from 'react'
import Chaneliamge from '../images/chanel.jpg'
import styled from 'styled-components'
import Comment from './Comment';



const Container = styled.div``;
const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;
`;
const Avatar = styled.img`
width:60px;
height:60px;
border-radius:50%;
`;
const Input = styled.input`
border:none;
border-bottom: 2px solid ${({ theme }) => theme.soft};
background-color:transparent;
outline:none; 
padding:5px;
width:100px;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src={Chaneliamge} />
                <Input placeholder='Add a comment...' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments
