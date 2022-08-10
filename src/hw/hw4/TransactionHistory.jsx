import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Th, Tr, ThInform } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (<Box p={4} as='table' width={500}>
        <thead>
            <tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
                <ThInform>{type}</ThInform>
                <ThInform>{amount}</ThInform>
                <ThInform>{currency}</ThInform>
            </Tr>)
            )}
        </tbody>
    </Box>)
};

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}
