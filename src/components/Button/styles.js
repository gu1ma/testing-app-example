import styled from 'styled-components';

export const Container = styled.button`
    padding: 8px 25px;
    border-color: transparent;
    border: none;
    border-radius: 8px;
    outline: none;
    background: #ea4c89;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: white;
    margin-top: 15px;

    &:hover {
        background: #ea4c89de;
    }

    &:disabled {
        background: #ea4c895c;
    }
`;
