import React, { Component } from "react";
import { postData } from "../data/postData";
import Post from "./Post";
import Comment from "./Comment";
import { commentData } from "../data/commentData";

const Task_1 = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <Post id={postData.id} title={postData.title} body={postData.body} />
      <Comment
        email={commentData.email}
        name={commentData.name}
        body={commentData.body}
      />
    </div>
  );
};

export default Task_1;
