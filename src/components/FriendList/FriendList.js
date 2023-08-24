import { FriendListItemEl } from "components/FriendListItem/FriendListItem"
import { List, ListItem } from "./FriendsList.styled"
import PropTypes from "prop-types";

export const FriendListEl = ({friends}) =>{
    return(
        <List>
           {friends.map(friend=>(
            <ListItem key  ={friend.id}>
              <FriendListItemEl friend = {friend}/>
            </ListItem>
           ))}
</List>
    )
}

FriendListEl.propTypes = {
  friends : PropTypes.array.isRequired
}