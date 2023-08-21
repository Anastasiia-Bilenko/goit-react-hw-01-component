import { OnlineMark } from "./FriendsListItem.styled";
import PropTypes from "prop-types";
 export const FriendListItemEl = ({ friend:{isOnline, avatar, name} }) => {
  return (
    <>
      <OnlineMark isonline = {isOnline.toString()}></OnlineMark>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
FriendListItemEl.propTypes = {
  isOnline : PropTypes.string
}
