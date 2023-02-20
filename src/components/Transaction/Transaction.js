import PropTypes from 'prop-types';
import { TableBody } from "./Transaction.styled";

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <TableBody>{type}</TableBody>
        <TableBody>{amount}</TableBody>
        <TableBody>{currency}</TableBody>
      </tr>
    </tbody>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
