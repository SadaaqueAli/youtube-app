import React from 'react'
import styled from 'styled-components'
import VideoTube from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const Container = styled.div`
  flex: 1;
  background-color: #202020;
  color: white;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 15px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 0;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div`
  margin-top: 10px;
  font-size:15px;
`;

const Button = styled.div`
  display:flex;
  align-items:center;
  gap:7px;
  padding: 3px 5px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;


export default function Menu() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={VideoTube} />
                    VideoTube
                </Logo>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscriptions
                </Item>
                <Hr />
                <Item>
                    <VideoLibraryIcon />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sigin in to like videos, comment, and subscribe.
                    <Button><AccountCircleIcon /> Sign In</Button>
                </Login>
                <Item>
                    <LibraryMusicIcon />
                    Music
                </Item>
                <Item>
                    <SportsSoccerIcon />
                    Sports
                </Item>
                <Item>
                    <VideogameAssetIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationIcon />
                    Movies
                </Item>
                <Item>
                    <FeedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <FlagIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon />
                    Help
                </Item>
                <Item>
                    <SettingsBrightnessIcon />
                    Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
