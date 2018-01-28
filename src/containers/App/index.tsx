import * as React from 'react';
import Counter from '../../components/Counter';
import AddCounter from '../AddCounter/AddCounter';
import RemoveCounter from '../RemoveCounter/RemoveCounter';

require('./app.css')

export const App = () => {
    return (
        <React.Fragment>
            <div className="test">
                App component
            </div>
            <Counter />
            <br/>
            <AddCounter />
            <br/>
            <RemoveCounter />
        </React.Fragment>
    )
}