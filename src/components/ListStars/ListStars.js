import { ListStarsItems } from "components/ListStarsItems/ListStarsItems"
import info from '../user.json'
import { List } from "./ListStars.styled"
export const ListStarsEl = () => {
    return (
<List>
<ListStarsItems stats ={info.stats}/>
</List>
    )
}
