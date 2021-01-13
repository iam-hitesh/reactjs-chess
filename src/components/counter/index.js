import React from 'react';
import { connect } from 'react-redux';

import * as counterActions from "../../actions/counter";
import {
    CounterButton,
    CounterDiv,
    CountersContainer,
    DecrementButton,
    DeleteButton,
    IncrementButton,
    StyledCounter
} from "./styles";
import {PrimaryButton} from "../counters/styles";


const Counter = (props) => {
    const { counter, onUpdateCounter, onDeleteCounter } = props;
    return (
        <CountersContainer>
            {
                counter.counters &&
                counter.counters.map((count, id) => {
                    return (
                        <StyledCounter key={id}>
                            <CounterDiv>
                                {
                                    count.value > 0 ? (
                                        <PrimaryButton>
                                            { count.value }
                                        </PrimaryButton>
                                    ) : (
                                        <CounterButton>
                                            Zero
                                        </CounterButton>)
                                }
                            </CounterDiv>

                            <IncrementButton
                                onClick={() => onUpdateCounter(count.id, count.value + 1)}
                            >
                                <i className="fa fa-plus-circle"></i>
                            </IncrementButton>

                            <DecrementButton
                                onClick={() => onUpdateCounter(count.id, count.value - 1)}
                                disabled={count.value === 0}
                            >
                                <i className="fa fa-minus-circle"></i>
                            </DecrementButton>

                            <DeleteButton onClick={() => onDeleteCounter(count.id)}>
                                <i className="fa fa-trash-o"></i>
                            </DeleteButton>
                        </StyledCounter>
                    )
                })
            }

        </CountersContainer>
    )
};


function mapStateToProps(state){
    return {
        ...state
    }
}


function mapDispatchToProps(dispatch){
    return {
        onUpdateCounter: (id, value) => dispatch(counterActions.updateCounter(id, value)),
        onDeleteCounter: (id) => dispatch(counterActions.deleteCounter(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);