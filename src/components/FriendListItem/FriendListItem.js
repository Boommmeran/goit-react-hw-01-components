import PropTypes from 'prop-types'
import { FriendItem, Status } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p >{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}