import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<>
			<div className="my-5">
				<div className="mx-auto w-25">
					<form>
						<h1 className="h3 mb-4 fw-normal">Please <span className="text-general">Sign In</span></h1>

						<div className="form-floating">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								required
							/>
							<label htmlFor="floatingInput">Email address</label>
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

						<div className="d-flex justify-content-between align-items-center">
							<div className="checkbox my-3">
								<label class="form-check-label">
									<input
										class="form-check-input"
										type="checkbox"
										value="remember-me"
									/>{" "}
									Remember me
								</label>
							</div>
							<div className="my-3">
								<NavLink className="text-decoration-none" to="/register">
									Create an account?
								</NavLink>
							</div>
						</div>

						<button className="w-100 btn btn-lg btn-login-logout" type="submit">
							Sign in
						</button>
					</form>

					<div className="text-center">
						<button className="btn btn-primary mt-5 mx-2 bg-general align-items-center">
							<span className="me-2">Google</span> <i class="fab fa-google"></i>
						</button>
						<button className="btn btn-primary mt-5 mx-2 bg-general align-items-center">
							<span className="me-2">Github</span> <i class="fab fa-github"></i>
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

export default Login;
