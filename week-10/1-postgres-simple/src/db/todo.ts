import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const todoInsertQuery = `INSERT INTO todos(title, description, done, user_id) VALUES($1, $2, $3, $4) RETURNING id, title, description, done, user_id`;
  const todosVlues = [title, description, false, userId];
  const res = await client.query(todoInsertQuery, todosVlues);
  return res.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const todoUpdateQuery = `UPDATE todos SET done = $1 WHERE id=$2 RETURNING id, done, description, user_id, title`;
  const res = await client.query(todoUpdateQuery, [true, todoId]);
  return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const todoQuery = `SELECT title, description, done, id, user_id FROM todos where user_id = $1`;
  const res = await client.query(todoQuery, [userId]);
  return res.rows;
}
