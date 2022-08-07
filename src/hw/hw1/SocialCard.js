import PropTypes from 'prop-types'
import { StatList } from './StatList'
import { CardImage } from './CardImage'
import { CardUserName } from './CardUserName'
import { CardTag } from './CardTag'
import { CardLocation } from './CardLocation'
import { Box } from 'components/Box'

export const SocialCard = ({ username, tag, location, avatar, stats }) => {
    
    return <Box  border='1px solid' width={250} >
        <Box p={4} display='flex' flexDirection='column' alignItems='center' >
            <CardImage image={avatar} />
            <CardUserName username={username} />
            <CardTag tag={tag} />
            <CardLocation location={location} />
        
        </Box>

        <StatList stats={stats} />
        
    </Box>
}

SocialCard.ProtoTypes = {
    user: PropTypes.exact({
        image: PropTypes.string,
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.object,
    })
}