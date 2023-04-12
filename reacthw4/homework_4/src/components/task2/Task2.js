import UsersList from "./UsersList.js";
import AlbumsList from "./AlbumsList";

const USERS_BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=10";
const ALBUMS_BASE_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10";

const Task2 = () => {
  return (
    <div>
      <h3>Task 2</h3>
      <UsersList url={USERS_BASE_URL}/>
      <AlbumsList url={ALBUMS_BASE_URL} />
    </div>
  );
};

export default Task2;
