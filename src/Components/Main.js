import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Action/actions";
import Card from "./Card";
import "./Main.css"

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2 className= "heading">User Data List</h2>
      {users && users.map((user) => <Card key={user.id} user={user} />)}
    </div>
  );
};

export default Main;
