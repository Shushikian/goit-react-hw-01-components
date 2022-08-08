import PropTypes from 'prop-types'
import { Box } from 'components/Box'
import { StatListStyle, StatListItemStyle, StatListItemLabelStyle, StatListItemPercentageStyle} from './StatistickBar.styled'

export const StatistickBar = ({ statistics, title }) => {
    return <Box as='section' border='1px solid' width={250} my={5} >
  <Box p={4} display='flex' flexDirection='column' alignItems='center' as='h2'>{title}</Box>

  <StatListStyle>
            {statistics.map(({ label, percentage, id }) => (
                <StatListItemStyle key={id}>

                    <StatListItemLabelStyle>{label}</StatListItemLabelStyle>
                    <StatListItemPercentageStyle>{percentage}%</StatListItemPercentageStyle>

                </StatListItemStyle>
            ))}
  </StatListStyle>
    </Box>
};

StatistickBar.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};