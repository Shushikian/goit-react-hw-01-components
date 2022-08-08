import PropTypes from 'prop-types'
import styled from 'styled-components';

export const StatList = ({ stats })  => {
const { followers, views, likes } = stats;    
    return <StatListStyle>
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
}

const StatListStyle = styled.ul`
    display: flex;
    list-style: none;
    margin: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.borders.normal};
    padding: ${p => p.theme.space[0]}px;
    justify-content: space-between;
    background-color: ${p => p.theme.colors.text};
`;

const StatListItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${p => p.theme.space[4]}px;
    width: 33.33%;
    border: ${ p=> p.theme.borders.normal};
`;

const StatListItemLabelStyle = styled.span`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.xs}; 
`;
const StatListItemQuantityStyle = styled.span`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.m};    
    font-weight: ${p => p.theme.fontWeights.bold};
`;



StatList.ProtoTypes = {
    stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    })
}