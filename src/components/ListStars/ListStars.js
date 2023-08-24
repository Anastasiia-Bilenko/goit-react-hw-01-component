import { ListStarsItems } from "components/ListStarsItems/ListStarsItems"
import info from '../../data/user.json'
import { List } from "./ListStars.styled"
import PropTypes from "prop-types";
export const ListStarsEl = () => {
    return (
<List>
<ListStarsItems stats ={info.stats}/>
</List>
    )
}

ListStarsItems.propTypes = {
    stats : PropTypes.object.isRequired
}