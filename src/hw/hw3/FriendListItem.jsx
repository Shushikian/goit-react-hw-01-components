import {StatListItemStyle, Status, CardImageStyle, CardUserNameStyle } from './FriendList.slyled';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<StatListItemStyle key={id}>
        <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
        <CardImageStyle src={avatar} alt="User avatar" />
        <CardUserNameStyle>{name}</CardUserNameStyle>
    </StatListItemStyle>)
};