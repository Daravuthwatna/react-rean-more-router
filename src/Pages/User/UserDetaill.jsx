import { Link, useLoaderData } from "react-router-dom"

// const url = ""
const UserDetaill = () => {
  const data = useLoaderData()
  const {id, name, email} = data
  return (
    <div>
      <article>
        <p>User ID: {id}</p>
        <p>User Name: {name}</p>
        <p>User Email: {email}</p>
        <Link to="/user">Back</Link>
      </article>
    </div>
  )
}
export const userDetaillLoader = async (props) => {
  const { id } = props.params
  const resporn = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  if(!resporn.ok){
    throw new Error("User not found!!!")
  }
  return resporn.json()
}
export default UserDetaill
//, login, avatar_url, html_url