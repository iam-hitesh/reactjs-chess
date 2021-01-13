import React from 'react';
import { connect } from 'react-redux';

import {CountBadge, StyledNavBar, StyledNavBarCart} from "./styles"


const NavBar = (props) => {
    const { counter } = props;

    const getTotalCounters = () => {
        let sum = 0;

        counter.counters.map((c) => {
            if (c.value > 0) {
                sum++;
            }
        });

        return sum;
    };

    return (
        <StyledNavBar>
            <StyledNavBarCart>
                <i className="fa fa-shopping-cart fa-lg"></i>

                <CountBadge>
                    { getTotalCounters() }
                </CountBadge>

                Items
            </StyledNavBarCart>
        </StyledNavBar>
    )
};


function mapStateToProps(state) {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(NavBar);