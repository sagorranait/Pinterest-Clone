import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

const Mainboard = ({pins}) => {
  return (
    <Wrapper>
      <Container>
        {
          pins.map((pin, index) =>{
            let {urls} = pin;
            return <Pin key={index} urls={urls} />
          })
        }
      </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`
const Container = styled.div`
  column-gap: 5px;
  column-count: 5;
  margin: 0 auto;
  max-width: 1260px;
  height: 100%;
  background-color: #fff;
`