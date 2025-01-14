import React from 'react'
import "../styles/signup.scss"
const SignUp = () => {
  return (
    <div>
      <div>
        <form>
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="lastname" placeholder="Last Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirmpassword" placeholder="Confirm Password" required />
            <input 
            id="profilepic" 
            type="file" name="profilepic" accept='image/*'
            style={{"display" : "none"}}
            placeholder="Profile Picture" 
            required />
            <label htmlFor='profilepic'>
                <image src="/assets/addImage.png" alt="profilepic" />
                <p>Upload Profile Picture</p>
            </label>
        </form>
        <a href="/login">Already have an account Login here</a>
      </div>
    </div>
  );
}

export default SignUp
