import React, { useRef, useState } from "react";

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			setLoading(false);
			setForm({
				name: "",
				email: "",
				message: "",
			});
			alert("Your message has been sent!");
		} catch (error) {
			setLoading(false);
			console.log(error);

			alert("Something when wrong!");
		}
	};
	return (
		<section className="c-space my-20">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<img
					src="/assets/terminal.png"
					alt="terminal background"
					className="absolute inset-0 min-h-screen"
				/>
				<div className="contact-container">
					<h3 className="head-text">Let's talk</h3>
					<p className="text-lg text-white-600 mt-3">
						Whether you're looking to build a new website, improve your existing
						platform, or bring a unique project to life, I'm here to help.
					</p>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col space-y-7"
					>
						<label htmlFor="name" className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="John Doe"
							/>
						</label>
						<label htmlFor="email" className="space-y-3">
							<span className="field-label">Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="johndoe@gmail.com"
							/>
						</label>
						<label htmlFor="message" className="space-y-3">
							<span className="field-label">Your message</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Hi, I wanna give you a job..."
							/>
						</label>

						<button className="field-btn" type="submit" disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
							<img
								src="/assets/arrow-up.png"
								alt="arrow-up"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
