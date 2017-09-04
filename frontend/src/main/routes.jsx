import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Task from '../task/task'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path="/task" component={Task} />
        <Route path="/about" component={About} />
        <Redirect from="*" to='/task' />
    </Router>
)