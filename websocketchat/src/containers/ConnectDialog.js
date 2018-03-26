import { connect } from 'react-redux'
import { changeName } from '../actions'
import ConnectDialogComponent from '../components/ConnectDialogComponent'


const mapDispatchToProps = dispatch => ({
    dispatch: (userName) => {
      dispatch(changeName(userName))
    }
  })
  
  const ConnectDialog = connect(() => ({}), mapDispatchToProps)(ConnectDialogComponent);

  export default ConnectDialog;