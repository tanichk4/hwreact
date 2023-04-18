import React from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const user = {
        name: "Nick",
        age: 24,
    };
    return (
    <UserContext.Provider value={{ user }}>
        {props.children}
    </UserContext.Provider>
    )
};

export const WithUserData = (WrappedComponent) => {
    return class extends React.Component{
        render() {
            return (
            <UserContext.Consumer>
                {(value) => {
                    return <WrappedComponent {...value} {...this.props}/>
                }}
            </UserContext.Consumer>
            )
        }
    }
}