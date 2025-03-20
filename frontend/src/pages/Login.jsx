import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState("Sign Up")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  console.log(name)
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Acount" : "Login"}</p>
        <p>Please {state === "Sign Up" ? "sign up" : "login"} to book an appointment</p>
        {
        state === "Sign Up" && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="passwordd" onChange={(e) => setName(e.target.name)} value={name} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === "Sign In" ? "Login" : "Create Account"}</button>
        {
          state === "Sign Up" ? <p>Already have an account? <span onClick={() => setState("Sign In")} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create a new account? <span onClick={() => setState("Sign Up")}  className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login























































































// import { useState } from "react";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log("Logging in with:", { email, password });
//     } else {
//       console.log("Signing up with:", { name, email, password });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           {isLogin ? "Login" : "Create Account"}
//         </h2>
//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-2 mb-3 border rounded"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         )}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-3 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="w-full bg-blue-500 text-white py-2 rounded">
//           {isLogin ? "Login" : "Sign Up"}
//         </button>
//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }
