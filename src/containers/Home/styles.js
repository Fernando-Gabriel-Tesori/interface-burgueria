import styled from "styled-components";
import BannerHome from '../../assets/banner-home.png';
import BackgroundImage from '../../assets/background.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 40px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url('${BackgroundImage}');
  background-size: cover;
  background-position: center;
  height: 500px;
`;

export const Content = styled.div`
 padding: 70px;
`;
