import styled from "styled-components";
import {theme} from "../../styles";


export const StyledNavBar = styled.nav`
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f8f9fa !important;
`;


export const StyledNavBarCart = styled.div`
    display: inline-block;
    padding:10px;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`;

export const CountBadge = styled.span`
    display: inline-block;
    font-size: 75%;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    padding: 5px 25px;
    border-radius: 10rem;
    color: #fff;
    background-color: ${theme.colors.info};
    margin-left: 15px;
    margin-right: 10px;
`;