import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});
	const sendForm = (data: any) => {};
	return (
		<div className="[background-image:url('/bg-intro-mobile.png')]  md:[background-image:url('/bg-intro-desktop.png')] md:h-screen w-screen flex flex-col md:grid md:grid-cols-2 md:content-center md:items-center bg-red gap-20 bg-contain p-4">
			<header className="text-white flex flex-col items-center text-center gap-8 pt-20 px-2 md:w-3/4 justify-self-end md:pt-0">
				<h1 className="text-3xl font-bold px-4 md:text-6xl md:px-0 text-left">
					Learn to code by watching others{" "}
				</h1>
				<p className="md:text-lg text-left">
					See how experienced developers solve problems in real-time.
					Watching scripted tutorials is great, but understanding how
					developers think is invaluable.
				</p>
			</header>
			<main className="flex flex-col gap-6  max-w-screen-sm">
				<article className="bg-blue-default rounded-md py-6 text-center px-20 text-yellow-50 bottom-shadow w-full">
					<p>
						<strong>Try it free 7 days</strong> then $20/mo.
						thereafter
					</p>
				</article>
				<form
					onSubmit={handleSubmit(sendForm)}
					className="bg-white p-8  flex flex-col gap-6 rounded-xl form-shadow"
				>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row w-full ring-2 ring-[#dedede] rounded-md items-center p-4 gap-4 focus-within:ring-blue-dark">
							<input
								type="text"
								{...register("firstName", {
									required: "First Name cannot be empty",
									minLength: {
										value: 3,
										message: "The minimum lenght is 3",
									},
									maxLength: {
										value: 60,
										message: "The max lenght is 60",
									},
								})}
								placeholder="First Name"
								className=" w-full placeholder:text-gray-500 font-medium focus:outline-none"
							/>
							<img
								src="/icon-error.svg"
								alt="Error"
								style={
									errors.firstName?.message == undefined
										? { display: "none" }
										: { display: "block" }
								}
								className={`w-fit h-fit`}
							/>
						</div>
						<span className="text-red text-xs italic self-end">
							{errors.firstName?.message}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row w-full ring-2 ring-[#dedede] rounded-md items-center p-4 gap-4 focus-within:ring-blue-dark">
							<input
								type="text"
								{...register("lastName", {
									required: "Last Name cannot be empty",
									minLength: {
										value: 3,
										message: "The minimum lenght is 3",
									},
									maxLength: {
										value: 60,
										message: "The max lenght is 60",
									},
								})}
								placeholder="Last Name"
								className=" w-full placeholder:text-gray-500 font-medium focus:outline-none"
							/>
							<img
								style={
									errors.lastName?.message == undefined
										? { display: "none" }
										: { display: "block" }
								}
								src="/icon-error.svg"
								alt="Error"
								className="w-fit h-fit hidden"
							/>
						</div>
						<span className="text-red text-xs italic self-end">
							{errors.lastName?.message}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row w-full ring-2 ring-[#dedede] rounded-md items-center p-4 gap-4 focus-within:ring-blue-dark">
							<input
								type="text"
								{...register("email", {
									required: "Email Adress cannot be empty",
									minLength: {
										value: 3,
										message: "The minimum lenght is 3",
									},
									maxLength: {
										value: 60,
										message: "The max lenght is 60",
									},
									pattern: {
										value: /\S+@\S+\.\S+/,
										message:
											"Looks like this is not an email",
									},
								})}
								placeholder="Email Address"
								className=" w-full placeholder:text-gray-500 font-medium focus:outline-none"
							/>
							<img
								style={
									errors.lastName?.message == undefined
										? { display: "none" }
										: { display: "block" }
								}
								src="/icon-error.svg"
								alt="Error"
								className="w-fit h-fit hidden"
							/>
						</div>
						<span className="text-red text-xs italic self-end">
							{errors.email?.message}
						</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row w-full ring-2 ring-[#dedede] rounded-md items-center p-4 gap-4 focus-within:ring-blue-dark">
							<input
								type="text"
								{...register("password", {
									required: "Password cannot be empty",
									minLength: {
										value: 3,
										message: "The minimum lenght is 3",
									},
									maxLength: {
										value: 16,
										message: "The max lenght is 16",
									},
								})}
								placeholder="Password"
								className=" w-full placeholder:text-gray-500 font-medium focus:outline-none"
							/>
							<img
								style={
									errors.lastName?.message == undefined
										? { display: "none" }
										: { display: "block" }
								}
								src="/icon-error.svg"
								alt="Error"
								className="w-fit h-fit hidden"
							/>
						</div>
						<span className="text-red text-xs italic self-end">
							{errors.password?.message}
						</span>
					</div>
					<button className="text-white uppercase bg-green border-b-4 hover:bg-green/70 border-green/10 rounded-md w-full p-4 text-lg button-shadow ">
						Claim your free trial
					</button>
					<span className="text-xs text-blue-gray text-center">
						By clicking the button, you are agreeing to our{" "}
						<strong className="text-red">Terms and Services</strong>
					</span>
					<div className="text-center pt-4 justify-self-end">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a
							href="https://github.com/guilhermefigueira"
							target="_blank"
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
						>
							Guilherme Figueira
						</a>
						.
					</div>
				</form>
			</main>
		</div>
	);
}

export default App;
