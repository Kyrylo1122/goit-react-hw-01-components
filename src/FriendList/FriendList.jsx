import { Box } from "../Components/Box";
import { Status } from "./FriendsList";
const Friends = ({ friendsArr }) =>
  friendsArr.map((e) => (
    <Box key={e.id} display="flex" alignItems="center">
      <Status isOnline={e.isOnline}></Status>

      <img src={e.avatar} alt="User avatar" width="48" />
      <p>{e.name}</p>
    </Box>
  ));
export const FriendList = ({ friends }) => (
  <Box as="ul">
    <Friends friendsArr={friends} />
  </Box>
);
