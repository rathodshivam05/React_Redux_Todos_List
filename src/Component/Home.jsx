import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./All.module.css";
import { ADDTODO, REMOVETODO, TOOGLETODO } from "../Store/action";

const Home = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const todos = useSelector((state) => state.todos);
  const [refresh, setrefresh] = useState("");

  const addtodof = () => {
    setrefresh(Date.now());
    fetch("http://localhost:8080/todosdb", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: ref.current.value,
        isCompleted: false,
      }),
    });

    fetch("http://localhost:8080/todosdb")
      .then((r) => r.json())
      .then((r) => dispatch(ADDTODO(r)));
  };

  const toggleinput = (id, value) => {
    setrefresh(Date.now());
    fetch(`http://localhost:8080/todosdb/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isCompleted: value,
      }),
    });

    fetch("http://localhost:8080/todosdb")
      .then((r) => r.json())
      .then((e) => dispatch(TOOGLETODO(e)));
  };

  const handleremove = (index) => {
    setrefresh(Date.now());
    fetch(`http://localhost:8080/todosdb/${index}`, {
      method: "DELETE",
    });

    fetch("http://localhost:8080/todosdb")
      .then((r) => r.json())
      .then((e) => dispatch(REMOVETODO(e)));
  };

  useEffect(() => {
    fetch("http://localhost:8080/todosdb")
      .then((r) => r.json())
      .then((e) => dispatch(ADDTODO(e)));
  }, [refresh]);

  return (
    <div>
      <h2>Todo List</h2>
      <div className={styles.inputbox}>
        <input
          type="text"
          ref={ref}
          placeholder="enter your todo item"
          className={styles.input}
        />
        <button className={styles.submit} onClick={() => addtodof()}>
          Add
        </button>
      </div>
      <br />

      {todos.map((el) => (
        <div key={el.id}>
          <div className={styles.todolist}>
            <input
              checked={el.isCompleted === true ? true : false}
              onChange={(e) => toggleinput(el.id, e.target.checked)}
              type="checkbox"
            />

            <p
              className={
                el.isCompleted === true ? styles.strike : styles.nostrike
              }
            >
              {el.value}
            </p>
            <Link to={`/todo/${el.id}`}>
              <button className={styles.edit}>Edit</button>
            </Link>
            <button
              className={styles.remove}
              onClick={() => handleremove(el.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
