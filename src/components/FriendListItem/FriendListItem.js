import { OnlineMark } from './FriendsListItem.styled';
import PropTypes from 'prop-types';
export const FriendListItemEl = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <OnlineMark isonline={isOnline.toString()}></OnlineMark>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
FriendListItemEl.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
