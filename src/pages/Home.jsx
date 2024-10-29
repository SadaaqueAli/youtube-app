import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four cards per row */
  gap: 20px; /* Adjust spacing between cards */
  width: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.text};

`;


export default function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}
