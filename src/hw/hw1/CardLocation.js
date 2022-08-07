import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CardLocation = ({location}) => {
    return <CardLocationStyle className="location">{location}</CardLocationStyle>
}

const CardLocationStyle = styled.p`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

CardLocation.ProtoTypes = {
    location: PropTypes.string,
}