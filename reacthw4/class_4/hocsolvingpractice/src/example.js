import React from "react"
const withSomeFunctionality = (WrappedComponent) => {
    return class extends React.Component {
        state = {}
        // additional functionality

        render() {
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }
}

const Component_1 = () => {}

export default withSomeFunctionality(Component_1)