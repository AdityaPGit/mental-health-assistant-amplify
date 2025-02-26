import './App.css'
import { Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ChatComponent from './ChatComponent';
import { signOut } from "aws-amplify/auth";
import { useState } from 'react';
import logo from './logo.png'


export default function App(){
  const [chatKey, setChatKey] = useState(0);

  async function handleSignOut(){
    await signOut();
  }

  function handleNewChat() {
    setChatKey(prevKey => prevKey + 1);
  }

  return (
    <>
     <div className='parent'>
      <div className='topBar'>
        <div className='newChat'>
          <Button onClick={handleNewChat} variation='primary'>+</Button>
        </div>
        <div className='logo'>
          <img src={logo} alt="logo" className='app-logo-inside' />
        </div>
        <div className='signOut'>
          <Button onClick={handleSignOut} variation='primary'>Sign Out</Button>
        </div>
      </div>
      <ChatComponent key={chatKey}/>
     </div>
    </>
  )
}