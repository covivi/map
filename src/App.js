import React from 'react'
import './App.css'

import Map from  './component/Map'
//import SearchableMap from './components/SearchableMap';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/map" component={Map} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App