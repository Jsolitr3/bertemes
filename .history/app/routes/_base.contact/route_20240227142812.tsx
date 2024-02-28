// Page: /Contact
// This is the contact us page

//contact us page with form and contact details

export default function Route() {
	return (
		<div>
			<h1>Contact Us</h1>
			<form>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' name='name' />
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message'></textarea>
				<button type='submit'>Send</button>
			</form>
			<div>
				<h2>Contact Details</h2>
				<p>Phone: 123-456-7890</p>
				<p>
					Email:
					<a href='mailto:jsolitromusic@gmail.com' className='ml-1 underline'>
						/
					</a>
				</p>
			</div>
		</div>
	);
}
