import styled from 'styled-components';

// Variáveis para cores e tamanhos, para maior consistência e manutenção
const colors = {
  primary: '#029218',
  text: '#000000',
};

const spacing = {
  large: '2.5rem',
  medium: '1.25rem',
  small: '0.625rem',
};

export const Container = styled.div`
  overflow-x: hidden;
  padding-left: ${spacing.large};
  padding-bottom: ${spacing.large};

  .carousel-item {
    padding-right: ${spacing.medium};  // Consistência no espaçamento
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multi-carousel__arrow--left {
    left: 1rem;  // Usando unidades mais flexíveis
    top: 0.625rem;
  }

  .react-multi-carousel__arrow--right {
    top: 0.625rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.primary};
  text-align: center;
  margin: ${spacing.large} 0;  // Margin vertical com espaçamento consistente
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${spacing.small};  // Distância entre o título e o underline
    width: 3.5rem;
    height: 0.25rem;
    background-color: ${colors.primary};
    left: 50%;
    transform: translateX(-50%);
  }

  // Ajuste responsivo de tamanhos
  @media (max-width: 768px) {
    font-size: 1.75rem;  // 28px equivalente
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;  // 24px equivalente
  }
`;
