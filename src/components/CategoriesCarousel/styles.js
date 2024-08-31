import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 40px;

    .carousel-item {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding-right: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #5b3464;
    padding-bottom: 20px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    margin: 40px 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #5b3464;
        left: calc(50% - 28px);
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const ContainerItems = styled.div`
    background: url('${props => props.imageUrl}') center / cover no-repeat;
    border-radius: 30px;
    display: flex;
    align-items: flex-end;
    padding: 20px 10px;
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    p {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 20px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
        position: relative;
        z-index: 2;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        border-radius: inherit;
        z-index: 1;
    }

    @media (max-width: 768px) {
        height: 150px;

        p {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        height: 120px;

        p {
            font-size: 18px;
        }
    }
`;
