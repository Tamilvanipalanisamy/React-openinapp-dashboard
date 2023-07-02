import React, {useEffect, useState} from 'react'

import {FcGoogle} from 'react-icons/fc'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from '../GoogleSignin/config'

import Home from '../Home'

function SignInGoogle({login}) {
  useEffect(() => {
    document.title = 'Login - Board.'
  }, [])

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const {user} = result

      console.log('Logged in with Google')
      console.log('User:', user)

      login()
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  }

  return (
    <div>
      <button
        type="button"
        className="sign-in-with-button"
        onClick={loginWithGoogle}
      >
        <FcGoogle size={20} />
        <p className="sign-in-with-text">Sign in with Google</p>
      </button>
    </div>
  )
}
export default SignInGoogle
