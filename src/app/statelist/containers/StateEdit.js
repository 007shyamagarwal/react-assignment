import {connect} from "react-redux";
import StateEdit from "../components/StateEdit";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        viewState: state.stateView.viewState,
        status: state.stateView.status,
        error: state.stateView.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStateById: function(id) {
        //let id = this.props.match.params.id;
        let actionFn=actions.fetchStateById(id);
        console.log("");
        dispatch(actionFn);
       },

       updateState: function(updatedState) {
        //let id = this.props.match.params.id;
        let actionFn=actions.initStateView(updatedState);
        dispatch(actionFn);
       },

       saveStateDetails: function(stateToEdit){
        let actionFn=actions.saveStateDetails(stateToEdit);
        dispatch(actionFn);
       }
    }
 }
 
 export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateEdit)