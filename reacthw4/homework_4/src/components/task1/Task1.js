import Album from "./Album";
import User from "./User";
import { DataProvider } from "./DataContext";
const Task1 = () => {
  return (
    <div>
      <h3>Task 1</h3>
      <DataProvider>
        <Album />
      </DataProvider>
      <User />
    </div>
  );
};
export default Task1;
