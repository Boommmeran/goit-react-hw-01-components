import PropTypes from 'prop-types';
import { FriendWrap, Status, Avatar, Name } from './Friend.styled';

export const FriendItem = ({avatar, name, isOnline }) => {
  return (
    <FriendWrap>
      <Status online={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{ name}</Name>
    </FriendWrap>
  );
};


FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}