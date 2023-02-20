import user from '../data/user.json';
import statisticData from "../data/statistics.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
