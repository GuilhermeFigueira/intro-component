function App() {
	return (
		<div className="h-screen w-screen flex flex-col ">
			<header>
				<h1>Learn to code by watching others </h1>
				<p>
					See how experienced developers solve problems in real-time.
					Watching scripted tutorials is great, but understanding how
					developers think is invaluable.
				</p>
			</header>
			<main>
				<article>
					<p>
						<strong>Try it free 7 days</strong> then $20/mo.
						thereafter
					</p>
				</article>
				<form>
					<button></button>
				</form>
				First Name Last Name Email Address Password Claim your free
				trial By clicking the button, you are agreeing to our Terms and
				Services And feel free to add suggestions or tips, i will
				appreciate it!
			</main>
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
		</div>
	);
}

export default App;
