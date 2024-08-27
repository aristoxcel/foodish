import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./Providers/AuthProvider"


function App() {
  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <>
      <div className="w-full bg-center bg-contain bg-no-repeat bg-opacity-70 min-h-[calc(100vh-1px)] flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(/file.png)`,
      }}>
      <div className="text-center lg:text-7xl text-3xl md:text-4xl font-bold text-pink-800">
        {user?<h1 className="text-2xl">Welcome Back {user?.displayName}</h1>:<h1>Welcome</h1>}
        <h2>To</h2>
        <h1>Foodish</h1>
      </div>
      {
        user?
        <div className="text-center mt-8 lg:text-4xl text-2xl md:text-3xl font-bold text-amber-500 flex gap-4">
        <h3>Please </h3>
        
        <Link to={"/allItems"} className="text-blue-800 underline">Click Here</Link>
      </div>
      :
      <div className="text-center mt-8 lg:text-4xl text-2xl md:text-3xl font-bold text-amber-500 flex gap-4">
        <h3>Please Login First</h3>
        
        <Link to={"/login"} className="text-blue-800 underline">Click Here</Link>
      </div>
      }
      </div>
    </>
  )
}

export default App
