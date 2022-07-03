import "./App.css";
import { Profile } from "./Profile/Profile";
import user from "./JSON/user.json";
import { Statistic } from "./Statistics/Statistics";
import data from "./JSON/data.json";
import { FriendList } from "./FriendList/FriendList";
import friendsSet from "./JSON/friends.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload title" stats={data} />
      <FriendList friends={friendsSet} />
    </>
  );
}

export default App;
