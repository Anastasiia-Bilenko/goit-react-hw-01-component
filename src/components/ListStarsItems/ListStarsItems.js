import { ListItem, Text } from "./ListStarsItem.styled"
import PropTypes from "prop-types";
export const ListStarsItems = ({stats :{followers, views, likes}}) => {
    return (
        <>
        <ListItem>
        <Text >Followers</Text>
        <span >{followers}</span>
      </ListItem>
      <ListItem>
        <Text >Views</Text>
        <span >{views}</span>
      </ListItem>
      <ListItem>
        <Text>Likes</Text>
        <span>{likes}</span>
      </ListItem>
      </>
    )
}
ListStarsItems.propTypes ={
  followers: PropTypes.number,
  views: PropTypes.number,
  likes:PropTypes.number,
}