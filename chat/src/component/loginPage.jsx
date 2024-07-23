import React, { useState } from 'react';
import MainHome from './HomePage';



function LoginPageUi() {
 
  const [islogged, setLogin] = useState(false);
  const [usersUsername , setUsername] = useState('');

   function handleLogin(){
    const user= "tharindu"
    const pass= "2005"

   var username = document.getElementById('userEmail').value;
   var password = document.getElementById('userPassword').value;

        if(username ==  user & password == pass){
          console.log("sucess")
             setLogin(true);
             setUsername(username);

        }else{
          window.alert("incorrect username or password");
        }

   }

  //  if(islogged){
  //      return <MainHome name = {usersUsername}/>
  //  }
  if(islogged){
    return <MainHome name = {usersUsername}/>
}
  return (
   <>
<div className='login-conatiner'>
<form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      {/* <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleLogin}>
        Submit
      </button> */}
</>
  );
}

export default LoginPageUi;


//my code -----------------------------

// import React from 'react';
// import MainHome from './HomePage';


// function LoginPageUi() {
//   return (
//     <>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="userEmail"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="userPassword"
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         </form>
//         <button className="btn btn-primary" onClick={()=>{
//             const user= "tharindu";
//             const pass= "2005";

//             var username = document.getElementById('userEmail').value;
//             var password = document.getElementById('userPassword').value;

//             if(username != null & password != null){

//                 if(username == user & password == pass){
//                      <MainHome name = {username}/> 
//                 }

//             }else{
//                 window.alert("please Enter Username and Password");
//             }


            
//         }}>
//           Submit
//         </button>
    
//     </>
//   );
// }

// export default LoginPageUi;
