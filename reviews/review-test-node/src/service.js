import axios from "axios";

const URL = `https://jsonplaceholder.typicode.com/todos/1`;

export async function getUser() {
  const { data } = await axios.get(URL)
  console.log(data)
  return [searchUser(data)];
}

function searchUser(data) {
  return {
      userId: data.userId,
      id: data.id,
      title: data.title,
      completed: data.completed
  };
}

getUser();