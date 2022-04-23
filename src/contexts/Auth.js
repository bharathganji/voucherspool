// import React, { useContext, useState, useEffect } from "react";
// import { supabase } from "../supabase";

// const AuthContext = React.createContext();
// export function AuthProvider({ children }) {
//   const [user, setUser] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check active sessions and sets the user
//     const session = supabase.auth.session();

//     setUser(session?.user ?? null);
//     setLoading(false);

//     // Listen for changes on auth state (logged in, signed out, etc.)
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         setUser(session?.user ?? null);
//         setLoading(false);
//       }
//     );

//     return () => {
//       listener?.unsubscribe();
//     };
//   }, []);

//   // Will be passed down to Signup, Login and Dashboard components
//   const value = {
//     signUp: (data) => supabase.auth.signUp(data),
//     signIn: (data) => supabase.auth.signIn(data),
//     signOut: () => supabase.auth.signOut(),
//     user,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//     return useContext(AuthContext)
//   }


import { useState } from 'react'
import { supabase } from '../supabase'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </div>
    </div>
  )
}