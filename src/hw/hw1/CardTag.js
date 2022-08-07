import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CardTag = ({tag}) => {
    return <CardTagStyle className="tag">@{tag}</CardTagStyle>
}

const CardTagStyle = styled.p`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

CardTag.ProtoType = {
    tag: PropTypes.string,
}