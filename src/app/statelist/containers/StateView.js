import {connect} from "react-redux";
import StateView from "../components/Stateview";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    console.log("xx",state.stateView)
    return {
        viewState: state.stateView.viewState,
        status: state.stateView.status,
        error: state.stateView.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStateById: function(id) {
        //let id = this.props.match.params.id;
        let actionFn=actions.fetchStateById(id);
        dispatch(actionFn);
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateView)