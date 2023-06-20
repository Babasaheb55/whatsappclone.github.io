import { GoogleOAuthProvider } from '@react-oauth/google';




import Messenger from "./componets/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '1007373847714-3lf4ojq5at5dko1drtkes72ub95ku18h.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider> 
  <Messenger/>
  </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
