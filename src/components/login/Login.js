import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import theme from './theme'
import { supabaseClient } from '../../supabase';
import Auth from '../../contexts/Auth';
import Account from './Account';
export default function Login() {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabaseClient.auth.session());

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <ChakraProvider theme={theme}>{!session ? <Auth /> : <Account key={session.user?.id} session={session} />}</ChakraProvider>;
}

