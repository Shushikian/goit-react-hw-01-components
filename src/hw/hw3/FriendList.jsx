import PropTypes from 'prop-types'
import { StatListStyle} from './FriendList.slyled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return <StatListStyle>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id} />)}
</StatListStyle>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        }))
}