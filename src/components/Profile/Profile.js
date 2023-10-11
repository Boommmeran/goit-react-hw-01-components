import PropTypes from 'prop-types';
import { ProfileWrap, DescrWrap, Photo, Description, StatsList, Stat, Label, Quantity } from './Profile.styled'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileWrap>
      <DescrWrap>
        <Photo src={avatar} alt="User avatar" className="avatar" />
        <p>{username}</p>
        <Description className="tag">@{tag}</Description>
        <Description className="location">{location}</Description>
      </DescrWrap>

      <StatsList>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
