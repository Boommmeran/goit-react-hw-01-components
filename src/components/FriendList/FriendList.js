import PropTypes from 'prop-types'
import { FriendListItem } from 'components/FriendListItem';
import { FriendsList } from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return <FriendListItem key={id}  avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}