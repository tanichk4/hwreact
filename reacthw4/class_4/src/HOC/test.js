import React, { Component } from "react";

import { withPosts } from "./withPosts";

class Test extends Component {
    render() {
        const { posts } = this.props
        return <div>Кількість всіх постів : {posts.length}</div>
    }
}

export default withPosts(Test);