import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import ClassEx from './ClassEx';
import FuncEx from './FuncEx';
import JeweleryShop from './components/JeweleryShop';
import ProductsList from './components/ProductsList';
import ShopInfo from './components/ShopInfo';
// import UserCard from './UserCard';
// import Login from './Login';


//функціональний компонент

// const UserCard = ({ name, age }) => {
//   return (
//     <div>
//     {name} - {age}
//     </div>
//   );
// };

// UserCard.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// }

/////////////////////

// класовий компонент

// class UserCard extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//   }

//   render() {
//     return <div>
//       {this.props.name} - {this.props.age}
//       </div>
//   }
// }

// export default class App extends React.Component {
//   render() {
//   return (
//     <div>
//       <UserCard name={2} age={24}/>
//     </div>
//   );
// }
// }

// сложные данные


// class UserCard extends React.Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       age: PropTypes.number.isRequired,
//     }).isRequired
//   }

//   render() {
//     return (
//     <div>
//       <div>{this.props.user.name}</div>
//       <div>{this.props.user.surname}</div>
//       <div>{this.props.user.age}</div>
//     </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   render() {
//   return (
//     <div>
//       {/* <UserCard user={{name: "Name", surname: "Surname", age: 24}} />  */}
//       <UserCard user={{name: "Name", surname: "Surname", age: 24}}/>
//     </div>
//   );
// }
// }

// default props



// class UserCard extends React.Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       age: PropTypes.number.isRequired,
//     }).isRequired
//   }

//   static defaultProps = {
//     user: {
//       name: "Nick",
//       surname: "Surname",
//       age: 24,
//     }
//   }

//   render() {
//     return (
//     <div>
//       <div>{this.props.user.name}</div>
//       <div>{this.props.user.surname}</div>
//       <div>{this.props.user.age}</div>
//     </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   render() {
//   return (
//     <div>
//       <UserCard/>
//       {/* <UserCard user={{name: "Name", surname: "Surname", age: 24}}/> */}
//     </div>
//   );
// }
// }


///3.2
// no context

// const UserCard = (props) => {
//   const { name, age } = props.user

//   return (
//     <div>
//       <div>
//         {name} - {age}
//       </div>
//     </div>
//   )
// }

// const UserCardWrapper = (props) => {
//   return (
//   <div>
//     <UserCard user={props.user}/>
//   </div>
//   );
// };

// const Example = () => {
//   const user = {
//     name: 'Nick',
//     age: 24,
//   };

//   return (
//   <div>
//     <UserCardWrapper user={user}/>
//   </div>
//   );
// };

// export default Example 

// with context 
// sposob 1
// function UserCard() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {({ user }) => {
//           return <div>{user.name} - {user.age}</div>;
//         } }
//       </UserContext.Consumer>
//     </div>
//   );
// }

// const UserCardWrapper = () => {
//   return (
//   <div>
//     <UserCard />
//   </div>
//   );
// };

// const Example = () => {

//   return (
//   <div>
//     <UserCardWrapper />
//   </div>
//   );
// };

// export default Example 

//sposib 2



// const UserCardWrapper = () => {
//   return (
//   <div>
//     <UserCard />
//   </div>
//   );
// };

// const Example = () => {

//   return (
//   <div>
//     <UserCardWrapper />
//   </div>
//   );
// };

// export default Example 

// 3.3 hooks 

class Render extends React.Component {
  render() {
    return (
      <>      
        <ProductsList/>
      </>

    )
  }
}

// export default Render