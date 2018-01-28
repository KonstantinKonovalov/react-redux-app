import * as React from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../../actions';
import { bindActionCreators } from 'redux';

const AddCounter: React.SFC<any> = (props) => {

    return (
        <div>
            <form>
                <div>
                    <div>
                        <button onClick={(e) => { e.preventDefault(); props.dispatch(addCounter())}}>
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(addCounter, dispatch)
    };
}

export default connect(mapDispatchToProps)(AddCounter);