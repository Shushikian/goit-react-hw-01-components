import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CardImage = ({ image }) => {
    return <CardImageStyle src={image} alt="User avatar" />
}

const CardImageStyle = styled.img`
    width: 100px;
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
`;

CardImage.ProtoTypes = {
    image: PropTypes.string,
}

