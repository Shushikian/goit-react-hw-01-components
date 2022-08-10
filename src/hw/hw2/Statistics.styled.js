import styled from "styled-components";


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
    padding: ${p => p.theme.space[3]}px;
    gap: ${p => p.theme.space[2]}px;
    width: 20%;
    border: ${ p=> p.theme.borders.normal};
`;
export const StatListItemLabelStyle = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.xs}; 
`;
export const StatListItemPercentageStyle = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.m};    
    font-weight: ${p => p.theme.fontWeights.bold};
`;