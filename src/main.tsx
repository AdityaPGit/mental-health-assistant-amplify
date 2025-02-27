import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css"
import awsconfig from "../amplify_outputs.json"
import { Authenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

createRoot(document.getElementById('root')!).render(
  <>
    <Authenticator>
      <App />
    </Authenticator>
  </>
)

