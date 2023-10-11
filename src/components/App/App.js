import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics'
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory'
import { Container } from './App.styled'

import userData from 'data/user.json';
import stats from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = userData;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title={'Upload stats'} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
