import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import {useDispatch} from 'react-redux'
import {storeUser} from '../features/userSlice'
import PinterestIcon from '@material-ui/icons/Pinterest'

const Login = () => {
  const dispatch = useDispatch()

  const signIn = () => {
    auth.signInWithPopup(provider).then((result)=>{
      dispatch(storeUser({
          user: result.user
      }))
    }).catch((error)=> alert(error.message))
  }
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <h1>Sign up to get your ideas</h1>
        </LeftSide>
        <RightSide>
          <PinterestIcon />
          <h2>Welcome to Pinterest Clone</h2>
          <p>Find new ideas to try</p>
          <button type="submit" onClick={signIn}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google icon" /> Continue with Google</button>
        </RightSide>
      </Container>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/login-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  height: 100vh;
`
const Container = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LeftSide = styled.div`
    h1{
      min-width: 30%;
      max-width: 80%;
      font-size: 70px;
      font-weight: 600;
      color: #fff;
    }
`
const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
  border-radius: 25px;
  background-color: #fff;
  text-align: center;
    .MuiSvgIcon-root{
      color: #e60023;
      font-size: 85px;
      cursor: pointer;
      margin: 0px 0px 15px;
    }
    h2{
      color: rgb(51, 51, 51);
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -1.2px;
      word-break: break-word;
    }
    p{
      text-align: center;
      color: rgb(51, 51, 51);
      font-size: 16px;
      font-weight: normal;
      margin: 0px 0px 32px;
    }
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #333;
      background-color: #fff;
      padding: 10px 15px;
      border: 1px solid #e60023;
      border-radius: 35px;
      cursor: pointer;
      img{
        width: 25px;
        margin-right: 10px;
      }
    }
`