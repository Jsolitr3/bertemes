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
		<div className='flex flex-col w-full justify-center items-center h-full pt-8'>
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
			<div>
				<h3 className='text-2xl font-bold mb-4 text-blue-500'>Contact Information</h3>

				<p className='text-lg mb-2'>
					<span className='font-bold'>Office Hours:</span> Monday - Friday: 8:30 AM to 5:00 PM, or by appointment
				</p>
				<p className='text-lg mb-2'>
					<span className='font-bold'>Address:</span> 2648 Medina Rd, Medina, OH 44256
				</p>
				<p className='text-lg mb-2'>
					<span className='font-bold'>Phone:</span> (330) 635-2318
				</p>
				<p className='text-lg mb-2'>
					<span className='font-bold'>Email:</span>{' '}
					<a className='text-primary' href='mailto:will@bertemes.com'>
						will@bertemes.com
					</a>{' '}
					or <a href='mailto:therese@bertemes.com'>therese@bertemes.com</a>
				</p>
				<p className='text-lg mb-4'>
					<span className='font-bold'>On Facebook:</span>{' '}
					<a href='https://www.facebook.com/Bertemes-Advisors-197721850283516/' target='_blank' rel='noreferrer'>
						Bertemes Advisors
					</a>
				</p>

				{/* Google Maps Embed */}
				<div className='relative h-0 overflow-hidden' style={{ paddingBottom: '56.25%' }}>
					<iframe
						title='Bertemes Johnson & Company Location'
						className='absolute inset-0 w-full h-full'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.861832149735!2d-81.8730500849563!3d41.15131462164268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883080f080eb2717%3A0x7e2d9bb44be21499!2s2648%20Medina%20Rd%2C%20Medina%2C%20OH%2044256%2C%20USA!5e0!3m2!1sen!2sca!4v1672692752717!5m2!1sen!2sca'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}
