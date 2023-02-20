import PropTypes from 'prop-types';
import { Table, TableHead } from "./TransactionHistory.styled";
import { Transaction } from "../Transaction/Transaction";

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </tr>
      </thead>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        )
        })
        }
      </Table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  )
};