import Button from "components/Button";
import { TextArea, TextInput } from "components/FormFields";
import { addComment } from "dataStore/cars/cars.actions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CommentForm({ carId, onCommentAdd = () => {} }) {
  const [comment, setComment] = useState({ msg: "", author: "" });
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setComment((comment) => ({
      ...comment,
      [name]: value,
    }));
  };

  const saveComment = (e) => {
    e.preventDefault();

    if (comment.msg && comment.author && carId) {
      dispatch(addComment(carId, comment));
      setComment({ msg: "", author: "" });
      onCommentAdd();
    }
  };

  return (
    <form onSubmit={saveComment}>
      <TextArea
        name="msg"
        label="Comment"
        value={comment.msg}
        onChange={onInputChange}
      />
      <TextInput
        name="author"
        label="Name"
        value={comment.author}
        onChange={onInputChange}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}

export default CommentForm;
