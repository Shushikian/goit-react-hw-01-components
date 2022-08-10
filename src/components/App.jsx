import { Profile } from "hw/hw1/SocialCard";
import { Statistics } from "hw/hw2/Statistics";
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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />     
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} /> 
    </Box> 
          
  );
};
