import PropTypes from 'prop-types';
import styled from 'styled-components'

export const CardUserName = ({username}) => {
    return <CardUserNameStyle>{username}</CardUserNameStyle>
}

const CardUserNameStyle = styled.h2`
    color: ${p => p.theme.colors.black };
    font-size: ${p => p.theme.fontSizes.l};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

CardUserName.ProtoType = {
    username: PropTypes.string,
}