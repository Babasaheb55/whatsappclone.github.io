import { useContext } from 'react';


import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

import LoginDialog from "./account/LoginDiaolog";
import ChatDialog from './chat/ChatDialog';

const Components = styled(Box)`
height:100%;
background:#DCDCDC;
box-shadow: none;
`;

const Header = styled(AppBar)`
height: 125px;
background-color:#00a884;
box-shadow: none;

`

const LoginHeader = styled(AppBar)`
height: 200px;
background-color:#00bfa5;
box-shadow: none;

`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Components>
            {

                account ?
                    <>

                        <Header >
                            <Toolbar>

                            </Toolbar>
                        </Header >
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader >
                            <Toolbar>

                            </Toolbar>  
                        </LoginHeader >
                        <LoginDialog />
                    </>
            }
        </Components>
    )
}

export default Messenger;