import PropTypes from 'prop-types'
import { Box } from 'components/Box'
import { StatListStyle, StatListItemStyle, StatListItemLabelStyle, StatListItemPercentageStyle} from './Statistics.styled'

export const Statistics = ({ stats, title }) => {
    return <Box as='section' border='1px solid' width={250} my={5} >

    {title && (<Box p={4} display='flex' flexDirection='column' alignItems='center' as='h2'>{title}</Box>)}
  

  <StatListStyle>
            {stats.map(({ label, percentage, id }) => (
                <StatListItemStyle key={id}>

                    <StatListItemLabelStyle>{label}</StatListItemLabelStyle>
                    <StatListItemPercentageStyle>{percentage}%</StatListItemPercentageStyle>

                </StatListItemStyle>
            ))}
  </StatListStyle>
    </Box>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
};