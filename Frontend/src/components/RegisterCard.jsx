import AuthContext from "../context/AuthContext.jsx"
import { useContext } from "react"
const RegisterCard = () => {
  let {register} = useContext(AuthContext)
  return (
    <div className="w-[300px]">
        <form onSubmit={register}>
          <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
              <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ABCD" required/>
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    </div>
  )
}

export default RegisterCard
