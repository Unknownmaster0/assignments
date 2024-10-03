import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const insertTextQuery: string = `INSERT INTO users(username, password, name) VALUES($1, $2, $3) RETURNING username, password, name`;
  const userValues: string[] = [username, password, name];

  const userCreated = await client.query(insertTextQuery, userValues);
  return userCreated.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string,
 *   id: string
 * }
 */
export async function getUser(userId: number) {
  const userQuery = `SELECT username, password, name, id FROM users WHERE ID=$1`;
  const res = await client.query(userQuery, [userId]);
  return res.rows[0];
}
