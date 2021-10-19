import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { signInWithGoogle, signInWithGithub, handleSignIn, error } = useAuth();
	return (
		<>
			<div className="my-5">
				<div className="mx-auto w-25">
					<form onSubmit={handleSignIn}>
						<h1 className="h3 mb-4 fw-normal">
							Please <span className="text-general">Sign In</span>
						</h1>

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

						<div className="mt-3">
							<p className="text-danger">{error}</p>
						</div>

						<div className="d-flex justify-content-between align-items-center">
							<div className="checkbox my-3">
								<label className="form-check-label">
									<input
										className="form-check-input"
										type="checkbox"
										value="remember-me"
									/>{" "}
									Remember me
								</label>
							</div>
							<div>
								<p className="m-0">Forgot password</p>
							</div>
						</div>

						<button className="w-100 btn btn-lg btn-login-logout" type="submit">
							Sign in
						</button>
					</form>

					<div className="text-center">
						<button
							onClick={signInWithGoogle}
							className="btn btn-primary mt-5 mx-2 bg-general align-items-center"
						>
							<span className="me-2">Google</span>{" "}
							<i className="fab fa-google"></i>
						</button>
						<button
							onClick={signInWithGithub}
							className="btn btn-primary mt-5 mx-2 bg-general align-items-center"
						>
							<span className="me-2">Github</span>{" "}
							<i className="fab fa-github"></i>
						</button>
					</div>

					<div className="text-center">
						<p className="mt-4">OR</p>
						<div className="my-3">
							<NavLink className="text-decoration-none" to="/register">
								Create an account?
							</NavLink>
						</div>
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
