import * as React from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../../actions';
import { bindActionCreators } from 'redux';

const RemoveCounter: React.SFC<any> = (props) => {

    return (
        <div>
            <form>
                <div>
                    <div>
                        <button onClick={(e) => { e.preventDefault(); props.dispatch(removeCounter())}}>
                            Remove
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(removeCounter, dispatch)
    };
}

export default connect(mapDispatchToProps)(RemoveCounter);