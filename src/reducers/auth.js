import { USER_SIGNED_IN, USER_SIGNED_OUT } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case USER_SIGNED_IN: return {
      userName: action.payload.userName,
      teamName: action.payload.teamName
    }
    case USER_SIGNED_OUT: return null
    default: return state
  }
}
