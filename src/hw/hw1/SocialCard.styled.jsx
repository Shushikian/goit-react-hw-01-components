import styled from 'styled-components';

export const CardImageStyle = styled.img`
    width: 100px;
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
`;

export const CardUserNameStyle = styled.h2`
    color: ${p => p.theme.colors.black };
    font-size: ${p => p.theme.fontSizes.l};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

export const CardTagStyle = styled.p`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

export const CardLocationStyle = styled.p`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;

export const StatListStyle = styled.ul`
    display: flex;
    list-style: none;
    margin: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.borders.normal};
    padding: ${p => p.theme.space[0]}px;
    justify-content: space-between;
    background-color: ${p => p.theme.colors.text};
`;

export const StatListItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${p => p.theme.space[4]}px;
    width: 33.33%;
    border: ${ p=> p.theme.borders.normal};
`;

export const StatListItemLabelStyle = styled.span`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.xs}; 
`;
export const StatListItemQuantityStyle = styled.span`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.m};    
    font-weight: ${p => p.theme.fontWeights.bold};
`;