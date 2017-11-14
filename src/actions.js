import gql from 'graphql-tag'

import getClient from './gqlClient'

export const HELLO = 'HELLO'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const API_URL = process.env.REACT_APP_API_URL

export const increase = () => ({
  type: HELLO,
})

export const signIn = ({userName, teamName}) => ({
  type: USER_SIGNED_IN,
  payload: {userName, teamName}
})

export const signOut = () => ({
  type: USER_SIGNED_OUT
})

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  }, 1000)
}

export const signInAsync = () => dispatch => {
  const child = window.open(`${API_URL}/auth/slack`)
  const messageHandler = async (e) => {
    window.removeEventListener('message', messageHandler)
    child.close()
    localStorage.setItem('token', e.data)
    const {data} = await getClient().query({
      query: gql`
        query User {
          user {
            name,
            team {
              name
            }
          }
        }
      `
    })
    dispatch(signIn({userName: data.user.name, teamName: data.user.team.name}))
  }
  window.addEventListener('message', messageHandler)
}
