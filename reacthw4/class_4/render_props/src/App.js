//render-props
//PATTERN
// const Comp1 = (props) => {
//   //some code
//   return (
//     <>
//       <div>some content</div>
//       {props.render()}
//     </>
//   );
// };

// const Comp2 = () => <p>Some Text</p>;

// const App = () => {
//   return (
//     <>
//       <Comp1 render={() => <Comp2 />} />
//     </>
//   );
// };

// export default App;
import './App.css'
import MouseTracker from './components/MouseTracker';
import Cat from './components/Cat';

const App = () => {
  return (
  <>
    <MouseTracker render={(mouse) => <Cat mouse={mouse}/>} />
  </>
  );
}

export default App
