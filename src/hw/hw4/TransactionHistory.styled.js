import styled from "styled-components";

export const Th = styled.th`
    background-color: ${p => p.theme.colors.transaction_history};
    padding: ${p => p.theme.space[3]}px;
`;

export const Tr = styled.tr`
    padding: ${p => p.theme.space[3]}px;
    :nth-child(even) {
    background-color: ${p => p.theme.colors.text};
    color: white;
}
`;

export const ThInform = styled.td`
    padding: ${p => p.theme.space[3]}px;
    text-align: center;
`;