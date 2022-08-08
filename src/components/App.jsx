import { SocialCard } from "hw/hw1/SocialCard";
import { StatistickBar } from "hw/hw2/StatistickBar";
import { Box } from 'components/Box'
import user from "hw/hw1/user.json"
import data from "hw/hw2/data.json"

export const App = () => {
  return (
    <Box m={4}>
      <SocialCard
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
     
       <StatistickBar title='Upload stats' statistics={data}/>
      
    
    </Box>
   
          
  );
};
