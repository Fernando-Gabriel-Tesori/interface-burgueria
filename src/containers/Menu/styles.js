import styled from 'styled-components';
import BannerHamburger from '../../assets/bannerburguer.svg'; // Import explícito da imagem

const colors = {
  background: '#f7f9fc',
  primaryText: '#ffffff',
  bannerBg: '#24292e',
  buttonBg: '#ff6363',
  buttonText: '#ffffff',
  buttonHover: '#ff4b4b',
  activeBorder: '#ff9999',
};

const sizes = {
  bannerHeight: '400px',
  mobileBreakpoint: '768px',
  smallMobileBreakpoint: '480px',
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  padding: 20px;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.bannerHeight};
  width: 100vw;
  position: relative;
  background: url(${BannerHamburger}) no-repeat center/cover;
  background-color: ${colors.bannerBg};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 72px;
    line-height: 65px;
    color: ${colors.primaryText};
    position: absolute;
    right: 10%;
    top: 30%;

    span {
      display: block;
      color: ${colors.primaryText};
      font-size: 18px;
      margin-top: 10px;
    }

    @media (max-width: ${sizes.mobileBreakpoint}) {
      font-size: 56px;
      right: 8%;
      top: 25%;
    }

    @media (max-width: ${sizes.smallMobileBreakpoint}) {
      font-size: 38px;
      right: 5%;
      top: 20%;

      span {
        font-size: 14px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 30px;

  @media (max-width: ${sizes.mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const CategoryButton = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.buttonText};
  padding: 14px 28px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${colors.activeBorder}`};

  &:hover {
    background-color: ${colors.buttonHover};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${sizes.smallMobileBreakpoint}) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  max-width: 1280px;
  margin: 50px auto;

  @media (max-width: ${sizes.mobileBreakpoint}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    gap: 25px;
  }

  @media (max-width: ${sizes.smallMobileBreakpoint}) {
    grid-template-columns: 1fr;
    padding: 10px;
    gap: 15px;
  }

  /* Adicionando um efeito moderno ao hover dos produtos */
  & > div {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    }
  }
`;
