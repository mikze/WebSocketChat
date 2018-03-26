import { connect } from 'react-redux'
import { UsersListComponent } from '../components/UsersListComponent'

export const UsersList = connect(state => ({thisUserName: state.Name[0].myUserName, Users: state.Users}), {}) (UsersListComponent);