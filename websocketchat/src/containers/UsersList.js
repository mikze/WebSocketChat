import { connect } from 'react-redux'
import { UsersListComponent } from '../components/UsersListComponent'
import { addMsg } from '../actions'



export const UsersList = connect(state => ({thisUserName: state.Name[0].myUserName, Users: state.Users}), {}) (UsersListComponent);
