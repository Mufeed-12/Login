// // import React, { useState } from 'react'

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   const add=()=>{
// //     setCount(count+1)
// //   }

// //   const sub=()=>{
// //     setCount(count-1)
// //   }

// //   const reset=()=>{
// //     setCount(0)
// //   }




// //   return (
// //     <div>
// //       <h1>{count}</h1>
// //      <button onClick={add}>add</button>
// //      <button onClick={sub}>sub</button>
// //      <button onClick={reset}>reset</button>
// //     </div>
// //   )
// // }

// // export default App






// import React, { useState } from 'react'
// import "./App.css"

// const App = () => {
//   const [fristName, setFristName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [webName, setWebName] = useState("")
//   return (
//     <div>
//       <section>
//           <input type="text" placeholder='Enter your name' value={fristName} onChange={(e) => {
//             setFristName(e.target.value)
//           }} />
//           <input type="text" placeholder='Enter your lastname' value={lastName} onChange={(e) => {
//             setLastName(e.target.value)
//           }} />


//           <input type="email" placeholder='Enter your email' value={email} onChange={(e) => {
//             setEmail(e.target.value)
//           }} />
//           <input type="password" placeholder='Enter your password' value={password} onChange={(e) => {
//             setPassword(e.target.value)
//           }} />
//           <input type="tex" placeholder='Enter your webname' value={webName} onChange={(e) => {
//             setWebName(e.target.value)
//           }} />
//           <button onClick={()=>{
//             console.log(fristName,email,lastName,password,webName);
//           }}>submit</button>
//       </section>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Counting from './Counting'

const App = () => {
  return (
	<div>
	  {/* <Counting/> */}
	</div>
  )
}

export default App
