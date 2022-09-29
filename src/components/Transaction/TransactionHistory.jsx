import css from './Transaction.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.transactionHeadItem}>Type</th>
          <th className={css.transactionHeadItem}>Amount</th>
          <th className={css.transactionHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.TransactionBodyRow}>
            <td className={css.transactionBodyItem}>{type}</td>
            <td className={css.transactionBodyItem}>{amount}</td>
            <td className={css.transactionBodyItem}>{currency}</td>
          </tr>
        ))}
        {/* <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr> */}
      </tbody>
    </table>
  );
};
