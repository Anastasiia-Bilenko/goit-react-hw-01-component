import { UserImg, Wrapper } from "./Description.styled";
import PropTypes from "prop-types";
export const DescriptionEl = ({info:{avatar, username, tag,location}}) => {
  return (
    <Wrapper>
      <UserImg src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Wrapper>
  );
};

DescriptionEl.propTypes = {
  avatar : PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location :PropTypes.string.isRequired,
}