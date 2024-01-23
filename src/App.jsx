import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';

import {
  ADD_ONE,
  CE,
  EQUALS,
  applyNumber,
  typeOnScreen,
  changeOperationV2,
  MEMORY_PLUS,
  MEMORY_CLEAR,
  MEMORY_RECALL,
} from './store/actions';

import reducer, { initialState } from './store/reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numberHandler = (e) => dispatch(typeOnScreen(e.target.value));
  const operationHanler = (e) => dispatch(changeOperationV2(e.target.value));
  const clearHandler = () => {
    console.log('başka işlemler');
    dispatch({ type: CE });
  };
  const equalHandler = () => dispatch({ type: EQUALS });
  const memoryPlusHandler = () => dispatch({ type: MEMORY_PLUS });
  const memoryRecallHandler = () => dispatch({ type: MEMORY_RECALL });
  const memoryClearHandler = () => dispatch({ type: MEMORY_CLEAR });
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Basic Calculator PoC</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              {/*  <span>
                <b>Temp:</b> {state.temporary}
              </span> */}
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton onClick={memoryPlusHandler} value={'M+'} />
              <CalcButton onClick={memoryRecallHandler} value={'MR'} />
              <CalcButton onClick={memoryClearHandler} value={'MC'} />
            </div>
            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: ADD_ONE })}
                value={1}
              />
              <CalcButton onClick={numberHandler} value={2} />
              <CalcButton onClick={numberHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={numberHandler} value={4} />
              <CalcButton onClick={numberHandler} value={5} />
              <CalcButton onClick={numberHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={numberHandler} value={7} />
              <CalcButton onClick={numberHandler} value={8} />
              <CalcButton onClick={numberHandler} value={9} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHanler} value={'+'} />
              <CalcButton onClick={numberHandler} value={0} />
              <CalcButton onClick={operationHanler} value={'-'} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHanler} value={'*'} />
              <CalcButton onClick={operationHanler} value={'/'} />
              <CalcButton onClick={clearHandler} value={'CE'} />
            </div>

            <div className="row eq_button">
              <CalcButton onClick={equalHandler} value={'='} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
