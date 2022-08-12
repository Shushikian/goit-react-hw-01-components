import styled from "styled-components";


export const StatListStyle = styled.ul`
    list-style: none;
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[0]}px;
    gap: ${p => p.theme.space[5]}px;
`;

export const StatListItemStyle = styled.li`
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[3]}px;
    width: 234px;
    border: ${ p => p.theme.borders.normal};
    border-color: ${ p => p.theme.colors.text};
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
`;
export const Status = styled.span`
    display: block;
    margin: ${p => p.theme.space[3]}px;
    width: 10px;
    height: 10px;
    border-radius: 50%;    
    ${({ isOnline }) => isOnline ? 'background-color:  green;': 'background-color:  red;'}
`;

export const CardImageStyle = styled.img`
    border-radius: ${p => p.theme.radii.round};
    width: 48px;
`;

export const CardUserNameStyle = styled.p`
    color: ${p => p.theme.colors.black };
    font-size: ${p => p.theme.fontSizes.l};
    font-family: ${p => p.theme.fonts.body};
    margin: ${p => p.theme.space[1]}px;
`;