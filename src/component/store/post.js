

import React from "react";
import { useDispatch} from 'react-redux'
import {increment} from '../actions/index' 
import counter from '../reducers/counter'


function App(){
    // const useSelector = useSelector (state => state.counter);
    
    const dispatch = useDispatch()



return(
    <div>
        <h2>counter{counter}</h2>
        <button onClick={() => dispatch(increment(5))}>click</button>

    </div>
    
);
}
export default App

