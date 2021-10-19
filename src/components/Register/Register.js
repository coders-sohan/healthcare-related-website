import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
	return (
		<>
			<div className="my-5">
				<div className="mx-auto w-25">
					<form>
						<h1 className="h3 mb-4 fw-normal">Please <span className="text-general">Create An Account</span></h1>

						<div className="form-floating">
							<input
								type="text"
								className="form-control"
								id="floatingInputName"
								placeholder="name"
								required
							/>
							<label htmlFor="floatingInputName">Name</label>
						</div>
						<div className="form-floating mt-4">
							<input
								type="email"
								className="form-control"
								id="floatingInputEmail"
								placeholder="name@example.com"
								required
							/>
							<label htmlFor="floatingInputEmail">Email address</label>
						</div>
						<div className="form-floating mt-4">
							<input
								type="password"
								className="form-control"
								id="floatingPassword"
								placeholder="Password"
								required
							/>
							<label htmlFor="floatingPassword">Password</label>
						</div>

						<div className="my-3">
							<NavLink className="text-decoration-none" to="/login">
								Already Registered?
							</NavLink>
						</div>
						<button className="w-100 btn btn-lg btn-login-logout" type="submit">
							Register
						</button>
					</form>

					<div className="text-center">
						<button className="btn btn-primary mt-5 mx-2 bg-general align-items-center">
							<span className="me-2">Google</span> <i className="fab fa-google"></i>
						</button>
						<button className="btn btn-primary mt-5 mx-2 bg-general align-items-center">
							<span className="me-2">Github</span> <i className="fab fa-github"></i>
						</button>
					</div>

					<p className="mt-5 mb-3 text-muted text-center">
						&copy; MediLife Health Care {Date().slice(10, 15)}
					</p>
				</div>
			</div>
		</>
	);
};

export default Register;
