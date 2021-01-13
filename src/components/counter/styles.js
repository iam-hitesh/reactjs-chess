import styled from "styled-components";
import {theme} from "../../styles";


export const CountersContainer = styled.div`
    padding: 10px 0px;
`;

export const StyleButton = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: none;
    border-style: solid;
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-image: initial;
    
    &:hover{
        opacity:0.9;
    }
`;

export const StyledCounter = styled.div`
    margin: 0;  
`;

export const CounterDiv = styled.div`
    display: inline-block;
    min-width: 100px;
`;

export const CounterButton = styled(StyleButton)`
    color: ${theme.colors.lightBlack};
    background-color: ${theme.colors.warning};
    border-color: ${theme.colors.warning};
    box-shadow: none;
    margin: 8px;
    margin-right: 25px;
    font-size: ${theme.fontSizes.xl};
    padding: 3px 10px;
`;

export const IncrementButton = styled(StyleButton)`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
    box-shadow: none;
`;

export const DecrementButton = styled(StyleButton)`
    color: ${theme.colors.white};
    background-color: ${theme.colors.info};
    border-color: ${theme.colors.info};
    box-shadow: none;
    margin: 8px;
    
    &:disabled{
        opacity:0.5;
        cursor: default;
    }
`;

export const DeleteButton = styled(StyleButton)`
    color: ${theme.colors.white};
    background-color: ${theme.colors.danger};
    border-color: ${theme.colors.danger};
    box-shadow: none;
`;