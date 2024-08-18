import { Link } from "react-router-dom"


function App() {
  

  return (
    <>
      <div className="w-full bg-center bg-contain bg-no-repeat bg-opacity-70 min-h-[calc(100vh-1px)] flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(/file.png)`,
      }}>
      <div className="text-center lg:text-7xl text-3xl md:text-4xl font-bold text-pink-800">
        <h1>Welcome</h1>
        <h2>To</h2>
        <h1>Foodish</h1>
      </div>
      <div className="text-center lg:text-4xl text-2xl md:text-3xl font-bold text-amber-500">
        <h3>Please Login First</h3>
        <Link to={"/login"}>Click Here</Link>
      </div>
      </div>
    </>
  )
}

export default App
