import user from './Profile/path/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/path/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './FriendList/path/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './Transaction/path/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
