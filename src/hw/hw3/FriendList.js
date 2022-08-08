import PropTypes from 'prop-types'
import { StatListStyle, StatListItemStyle, Status, CardImageStyle, CardUserNameStyle } from './FriendList.slyled';


export const FriendList = ({ friends }) => {
    return <StatListStyle>
        {friends.map(({ avatar, name, isOnline, id})  =>
    (<StatListItemStyle key={id}>
        <Status style={{ backgroundColor: isOnline ? 'green' : 'red'}}></Status>
            <CardImageStyle src={avatar} alt="User avatar" />
            <CardUserNameStyle>{name}</CardUserNameStyle>
    </StatListItemStyle>))}
</StatListStyle>
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}