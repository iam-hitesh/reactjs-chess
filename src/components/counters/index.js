import React from 'react';
import { connect } from 'react-redux';

import * as counterActions from "../../actions/counter";
import Counter from "../counter";
import {ReloadButton, ResetButton, StyledCountersContainer} from "./styles";


const Counters = (props) => {
    const { counter, onResetCounters } = props;

    const reloadWindow = () => {
        window.location.reload();
    };

    return (
        <StyledCountersContainer>
            <ResetButton
                onClick={() => onResetCounters()}
                disabled={counter.counters.length === 0}
            >
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </ResetButton>

            <ReloadButton
                onClick={() => reloadWindow()}
                disabled={counter.counters.length !== 0}
            >
                <i className="fa fa-recycle"></i>
            </ReloadButton>

            <Counter />
        </StyledCountersContainer>
    )
};


function mapStateToProps(state){
    return {
        ...state
    }
}


function mapDispatchToProps(dispatch){
    return {
        onResetCounters: () => dispatch(counterActions.resetCounters())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counters);