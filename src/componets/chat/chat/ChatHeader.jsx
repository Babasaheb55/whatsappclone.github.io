import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
// import { defaultProfilePicture } from '../../../constant/data';
import { AccountContext } from '../../../context/AccountProvider';


const Header = styled(Box)`

height: 44px;
background: #ededed;
padding: 8px 16px;
display: flex;   
align-items: center; 
`;


const Image = styled('img')({

    height:40,
    width:40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
margin-left: 12px !important;


`;
const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color: rgba(0, 0, 0, 0.6);
`;

const RightCorner = styled(Box)`
margin-left: auto;
& > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
}
`

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (

        <Header>

            <Image src={person.picture} alt="dp" />

            <Box>

                <Name> {person.name}</Name>
                <Status> {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Ofline' }</Status>

            </Box>

            <RightCorner>
                <Search />
                <MoreVert />

            </RightCorner>

        </Header>
    )
}

export default ChatHeader;