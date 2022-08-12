import PropTypes from 'prop-types'
import { StatListItemStyle,Status, CardImageStyle, CardUserNameStyle } from './FriendList.slyled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<StatListItemStyle>
        <Status isOnline={isOnline}></Status>
        <CardImageStyle src={avatar} alt="User avatar" />
        <CardUserNameStyle>{name}</CardUserNameStyle>
    </StatListItemStyle>)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

