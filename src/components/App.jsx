import { SocialCard } from "hw/hw1/SocialCard";
import { StatistickBar } from "hw/hw2/StatistickBar";
import { Box } from 'components/Box'
import user from "hw/hw1/user.json"
import data from "hw/hw2/data.json"
import friends from "hw/hw3/friends.json";
import { FriendList } from "hw/hw3/FriendList";
import transactions from "hw/hw4/transactions.json";
import { TransactionHistory } from "hw/hw4/TransactionHistory";



export const App = () => {
  return (
    <Box m={4} display='flex' flexDirection='column' alignItems='center'>
      <SocialCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />     
    <StatistickBar title='Upload stats' statistics={data}/>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} /> 
    </Box> 
          
  );
};
