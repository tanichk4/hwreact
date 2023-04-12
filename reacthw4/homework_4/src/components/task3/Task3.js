// const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10'
// // import DataMaker from './DataMaker'

// const Task3 = () => {
//     return (
//         <div>
//             {/* <DataMaker url={null} renderDataUrl={null}/> */}
//         </div>
//     )
// }
import DataMaker from "./DataMaker";
import Posts from "./Posts";

const Task3 = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  return (
    <div>
      <DataMaker url={url} renderDataUrl={(posts) => <Posts posts={posts} />} />
    </div>
  );
};

export default Task3;
