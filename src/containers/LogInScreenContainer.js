import {connect} from 'react-redux'

import LogInScreen from '../components/LogInScreen'
import {signInAsync} from '../actions'

export default connect(
  state => ({
    userName: state.auth.userName
  }),
  dispatch => ({
    handleClickLoginButton: () => dispatch(signInAsync())
  })
)(LogInScreen)
