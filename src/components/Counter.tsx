import * as React from 'react';
import { connect } from 'react-redux';

interface ICounter {
    count: number;
}

class Counter extends React.Component<ICounter> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        {this.props.count}
                    </h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        count: state.counterReducer,
    };
}

export default connect(mapStateToProps)(Counter);