import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getUser } from '../features/userSlice'
import PinterestIcon from '@material-ui/icons/Pinterest'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import TextsmsIcon from '@material-ui/icons/Textsms'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const Header = ({onSubmit}) => {
  const user = useSelector(getUser)
  const [input, setInput] = useState("")

  const onSearchSubmit = (e) => {
    e.preventDefault()
    onSubmit(input)
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
          <a href="/home">Homepage</a>
      </HomePageButton>
      <FollowingButton>
          <a href="/home">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <form>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              <button type="submit" onClick={onSearchSubmit} ></button>
            </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <TextsmsIcon />
          </IconButton>
          <IconButton>
            <Avatar src={user.photoURL} />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: #fff;
  color: #000;
`
const LogoWrapper = styled.div`
  .MuiSvgIcon-root{
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`
const HeaderButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`

const HomePageButton = styled(HeaderButton)`
  margin-left: 5px;
  background-color: rgb(17, 17, 17);

    a{
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }
`
const FollowingButton = styled(HeaderButton)`
  margin-left: 5px;
  background-color: #fff;

  a{
      text-decoration: none;
      color: #000;
      font-weight: 700;
    }

    :hover{
      background-color: #e1e1e1;
    }
`
const SearchWrapper = styled.div`
  flex: 1;
`
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  margin-left: 10px;

    form{
      display: flex;
      flex: 1;
    }

    form > input{
      background-color: transparent;
      border: none;
      width: 100%;
      margin-left: 5px;
      font-size: 16px;
    }

    form > button {
      display: none;
    }

    input:focus{
      outline: none;
    }

    input:active{
      outline: none;
    }

    input:hover{
      outline: none;
    }
`
const IconsWrapper = styled.div`
  margin-left: 15px;
  
  .MuiAvatar-root {
    width: 30px;
    height: 30px;
  }
`