import styled from "styled-components";
import {theme} from "../../styles";

export const StyledCountersContainer = styled.div`
    width: 100%;
    padding: 10px 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1100px;
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
    
    &:disabled{
        opacity:0.5;
        cursor: default;
    }
`;

export const ResetButton = styled(StyleButton)`
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
    border-color: ${theme.colors.success};
    box-shadow: none;
    margin: 0 8px;
    
    &:disabled{
        opacity:0.5;
        cursor: default;
    }
`;

export const PrimaryButton = styled(StyleButton)`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    box-shadow: none;
    margin: 0 8px;
`;

export const ReloadButton = styled(PrimaryButton)`
    opacity: 1;
`;
