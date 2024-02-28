// Page: /Contact
// This is the contact us page
import { useState } from 'react';

//contact us page with form and contact details

export default function Route() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = () => {
		// Assuming you have a function to send emails using your backend
		// Here, you can implement logic to send the email to 'will@bertemes.com' and 'therese@bertemes.com'
		console.log(`Sending email to will@bertemes.com and therese@bertemes.com`);
		// You can also reset the form fields if needed
		setName('');
		setEmail('');
		setMessage('');
	};
	return (
		<div className='flex flex-col justify-center items-center h-full pt-20'>
			<div className='w-full max-w-xl p-8 bg-base-100 rounded-lg drop-shadow-lg'>
				<h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
				<div className='mb-4'>
					<label htmlFor='name' className='block text-sm font-medium text-secondary mb-1'>
						Name
					</label>
					<input
						name='name'
						type='text'
						className='w-full p-2 border border-base-300 rounded-md'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Your name'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-sm font-medium text-secondary mb-1'>
						Email
					</label>
					<input
						name='email'
						type='email'
						className='w-full p-2 border border-base-300 rounded-md'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Your email'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='name' className='block text-sm font-medium text-secondary mb-1'>
						Message
					</label>
					<textarea
						name='message'
						className='w-full h-20 p-2 border border-base-300 rounded-md'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder='Your message'
					/>
				</div>
				<button onClick={handleSubmit} className='w-full bg-primary text-secondary p-2 rounded-md cursor-pointer'>
					Send Message
				</button>
			</div>
			<div className='mt-6'>
				<h3 className='text-lg font-semibold mb-2'>Contact Information</h3>
				<p className='mb-2'>Monday - Friday: 8:30 AM to 5:00 PM, or by appointment</p>
				<p className='mb-2'>Address: 2648 Medina Rd Medina, OH 44256</p>
				<p className='mb-2'>Phone: (330) 635-2318</p>
				<p className='mb-2'>Email: will@bertemes.com or therese@bertemes.com</p>
				<p className='mb-2'>
					On Facebook:{' '}
					<a
						href='https://www.facebook.com/Bertemes-Advisors-197721850283516/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500'
					>
						Bertemes Advisors
					</a>
				</p>
			</div>
		</div>
	);
}
