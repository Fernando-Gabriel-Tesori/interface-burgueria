import styled from 'styled-components';

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5b3464;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    outline: none;
    position: relative;

    img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    &:hover {
        background-color: #4a2d56;
        transform: scale(1.05);
    }

    &:active {
        background-color: #3a1d42;
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;
