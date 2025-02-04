import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four cards per row */
  gap: 20px; /* Adjust spacing between cards */
  width: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.text};

`;


export default function Home({type}) {

  const [videos, setVideos] = useState([])

  useEffect( () => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      console.log("API Response:", res.data);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
{videos.map(video=>(
  <Card key={video._id} video={video} />
))}
    </Container>
  )
}
