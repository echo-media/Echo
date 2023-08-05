import react from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';
import { useNavigate } from "react-router";

const SignUp = () => {
  const [form, setForm] = useState({
	email: "",
	username: "",
	password: "",

  });
  const navigate = useNavigate();

  function updateForm(value) {
	return setForm((prev) => {
	  return { ...prev, ...value };
	});
  }

  async function onSubmit(e) {
    e.preventDefault();
 
	// When a post request is sent to the create url, we'll add a new record to the database.
	const newPerson = { ...form };
 
	await fetch("http://localhost:5050/record", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(createUser),
	})

  .catch( error => {
	window.alert(error);
	return;
  });

  setForm({ email: "", username: "", password: "" });
  navigate("/mainfeed");
  }

  



  	
  return (
    <div className = 'h-screen'> 
			<nav id="navBar">
				<img src={logo} alt="LOGO" className="float-left w-20 my-1"></img>
				<Link to = '/'>
					<h1 id="titleEcho" className="float-left select-none text-5xl font-bold my-2">
						ECHO
					</h1>
				</Link>
				<Link to = '/signin'>
					<button id = 'BtnSignIn' class = 'float-right font-bold rounded-full bg-indigo-800 hover:bg-indigo-900 text-white w-32 h-12 my-2 mx-2'> 
						Sign In
					</button>
				</Link>
			</nav>

			<div class="flex justify-center items-center h-screen">
				<div class="relative top-[-100px] h-1/2 rounded-3xl p-4 ">
					<div class = 'flex justify-center items-center'>
						<h1 class="flex justify-center text-xl font-bold mb-4">Sign Up to Echo</h1>  
					</div>
					<form> 
						<div class = 'mb-4'>
							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'email'>
								Email
							</label>
							<input value = {form.email} id = 'email' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='email'placeholder='Enter your email'>
							</input>

							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'username'>
								Username
							</label>
							<input value = {form.username} id = 'username' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='name'placeholder='Enter a username'>
							</input>
								
							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'password'>
								Password
							</label>
							
							<input id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='password'placeholder='Enter your password'>
							</input>

							<label class = 'flex justify-center text-white text-sm font-semibold mx-4' for = 'password'>
								Re-Enter Password
							</label>
							<input value = {form.password} id = 'password' class = 'w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500 bg-indigo-950 mx-4' type ='password'placeholder='Re-Enter your password'>
							</input>

							<div class = 'flex  justify-center items-center'>
								<Link to = '/mainfeed'>
									<button id = 'BtnConfirm' class = 'font-bold rounded-full bg-purple-400 hover:bg-purple-500 text-white w-32 h-12 my-2'> 
										Sign Up
									</button>  
								</Link>
							</div>
          	</div>
        	</form> 
      	</div>
    	</div>
  	</div>
  );
};

export default SignUp;