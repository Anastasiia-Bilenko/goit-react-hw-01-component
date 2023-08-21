import { List} from "./StatisticsList.styled"
import { StatisticsListItemEl } from "components/StatisticsListItem/StatisticsListItem"

 export const StatisticsListEL = ({data}) =>{
    return(
        <List>
           {data.map(item => (
           <li key = {item.id}>
          <StatisticsListItemEl item = {item}/>
           </li>
           ))}  
        </List>
        )
 }