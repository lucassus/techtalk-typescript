import React from "react";
import ReactDOM from "react-dom";

import { User } from "./02-typed-user";

type Props = {
  user: User;
};

const UserCard: React.FunctionComponent<Props> = ({ user }) => {
  return <span>Welcome ${user.name}</span>;
};

const user: User = {
  id: 1,
  name: "Test",
  email: "test@email.com",
};

ReactDOM.render(<UserCard user={user} />, document.getElementById("root"));
