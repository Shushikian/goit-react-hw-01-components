import { SocialCard } from "hw/hw1/SocialCard";
import user from "hw/hw1/user.json"
import { Box } from 'components/Box'

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
    </Box>
  );
};
