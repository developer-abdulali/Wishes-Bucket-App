import React, { useState, useContext } from "react";
import { WishContext } from "../context/WishProvider";

export default function AddWish() {
  const [wishes, setWishes] = useContext(WishContext);
  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const addWish = (e) => {
    e.preventDefault();
    setWishes((prevWishes) => [
      ...prevWishes,
      { title: title, id: prevWishes[prevWishes.length - 1].id + 1 },
    ]);
    setTitle("");
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="addWish"
          placeholder="Add a new wish..."
          name="title"
          value={title}
          onChange={updateTitle}
        />
        <input
          onClick={addWish}
          type="submit"
          className="sbmt"
          value="Add Wish"
        />
      </form>
    </div>
  );
}
