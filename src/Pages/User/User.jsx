import { useLoaderData,Link } from "react-router-dom"

const url = "https://jsonplaceholder.typicode.com/users"
const User = () => {
  const data = useLoaderData()
  return (
    <ul>
      {data.map((d)=>{
        return(
          <Link key={d.id} to={d.id.toString()}>
            <li>
              <p>{d.name}</p>
            </li>
          </Link>
        )
      })
      }
      </ul>
  )
}
export const userLoader = async () =>{
  const resporns = await fetch(url)
  return resporns.json()
}

export default User