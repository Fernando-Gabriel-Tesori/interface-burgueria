import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multi-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multi-carousel__arrow--right {
        top: 10px;
    }

    padding-left: 40px;
    padding-bottom: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #029218;
    padding-bottom: 20px;
    text-align: center;
    margin: 70px 0;
    margin-top: 70px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #029218;
        left: calc(50% - 28px);
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;
