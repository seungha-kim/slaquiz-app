import React, {Component} from 'react'
import { Redirect } from 'react-router'
import './style.css';

export default class LogInScreen extends Component {
  render() {
    const {userName, handleClickLoginButton} = this.props
    return (
      userName
      ? <Redirect to="/main" />
      : <div>
        <button onClick={handleClickLoginButton}>Slack으로 로그인</button>
      </div>
    )
  }
}
