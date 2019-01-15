import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is add expense page
    </div>
)

const EditExpensePage = () => (
    <div>
        This is edit expense page
    </div>
)

const HelpPage = () => (
    <div>
        This is help expense page
    </div>
)

const NotFoundPage = () => (
    <div>
        404!
    </div>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
