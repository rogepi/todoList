import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '../lib/utils/storage'

export interface AuthState {
  username: string
}

const getName = () => {
  if (getLocalStorage('username') !== null)
    return getLocalStorage('username') as string
  else
    return ''
}

const setName = (name: string) => {
  setLocalStorage('username', name)
}

const initialState: AuthState = {
  username: getName()
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.username = action.payload
      setName(action.payload)
    },
    signout: (state) => {
      state.username = ''
      setName('')
    }
  }
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer