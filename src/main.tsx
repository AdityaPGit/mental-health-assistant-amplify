import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css"
import awsconfig from "../amplify_outputs.json"
import { Authenticator, Image } from '@aws-amplify/ui-react'
import { View } from '@aws-amplify/ui-react';
import { useTheme } from '@aws-amplify/ui-react';
import logo from './authlogo.png'

Amplify.configure(awsconfig)

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.xs}>
        <Image
          src={logo}
          alt='logo'
        />
      </View>
    );
  },
}

createRoot(document.getElementById('root')!).render(
  <>
    <Authenticator components={components}>
      <App />
    </Authenticator>
  </>
)

