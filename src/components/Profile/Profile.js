import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescr,
  Name,
  Paragraph,
  ProfileImg,
  ProfileStat,
  ProfileStatItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescr>
        <ProfileImg src={avatar} alt={username} />
        <Name>{username}</Name>
        <Paragraph>{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </ProfileDescr>

      <ProfileStat>
        {Object.entries(stats).map(([label, info], index) => {
          return <ProfileStatItem key={index} label={label} info={info} />;
        })}
      </ProfileStat>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
