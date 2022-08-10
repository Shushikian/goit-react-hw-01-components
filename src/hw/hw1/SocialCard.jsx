import PropTypes from 'prop-types'
import { CardImageStyle, CardUserNameStyle, CardTagStyle, CardLocationStyle, StatListStyle, StatListItemStyle, StatListItemLabelStyle, StatListItemQuantityStyle} from './SocialCard.styled'
import { Box } from 'components/Box'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;   
    return <Box  border='1px solid' width={250} >
        <Box p={4} display='flex' flexDirection='column' alignItems='center' >
            <CardImageStyle src={avatar} alt="User avatar" />
            <CardUserNameStyle>{username}</CardUserNameStyle>
            <CardTagStyle>@{tag}</CardTagStyle>
            <CardLocationStyle >{location}</CardLocationStyle>
        
        </Box>

        <StatListStyle>
            <StatListItemStyle>
                <StatListItemLabelStyle>Followers</StatListItemLabelStyle>
                <StatListItemQuantityStyle>{followers}</StatListItemQuantityStyle>
            </StatListItemStyle>
            <StatListItemStyle>
                <StatListItemLabelStyle>Views</StatListItemLabelStyle>
                <StatListItemQuantityStyle>{views}</StatListItemQuantityStyle>
            </StatListItemStyle>
            <StatListItemStyle>
                <StatListItemLabelStyle>Likes</StatListItemLabelStyle>
                <StatListItemQuantityStyle>{likes}</StatListItemQuantityStyle>
            </StatListItemStyle>
        </StatListStyle>
        
    </Box>
}

Profile.ProtoTypes = {
    user: PropTypes.exact({
        image: PropTypes.string,
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.object,
    })
}