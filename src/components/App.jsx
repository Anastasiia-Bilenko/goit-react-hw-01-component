import { FriendListEl } from "./FriendList/FriendList";
import { GlobalSryles } from "./GlobalStyles";
import { ProfileEl } from "./Profile/Profile";
import { StatisticsEl } from "./Statistics/Statistics";
import data from '../data/data.json'
import { TransactionHistoryTableEl } from "./TransactionHistory/TransactionHistory";
import friends from '../data/friends.json'
export const App = () => {
  return (<div>
      <ProfileEl/>
      <StatisticsEl title="Upload stats" stats={data} />
      <FriendListEl friends={friends}/>
      <TransactionHistoryTableEl/>
      <GlobalSryles/>
  </div>  
)
};




