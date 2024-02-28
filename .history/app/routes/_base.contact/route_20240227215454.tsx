// Page: /Contact
// This is the contact us page
import { Input, Button } from 'react-daisyui';

//contact us page with form and contact details

export default function Route() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='w-full max-w-md p-8 bg-gray-100 rounded-md shadow-md'>
				<h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
				<div className='mb-4'>
					<Input label='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' />
				</div>
				<div className='mb-4'>
					<Input
						label='Email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Your email'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='message' className='block text-sm font-medium text-gray-600 mb-1'>
						Message
					</label>
					<textarea
						name='message'
						className='w-full h-20 p-2 border border-gray-300 rounded-md'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder='Your message'
					/>
				</div>
				<Button onClick={handleSubmit} className='w-full bg-blue-500 text-white'>
					Send Message
				</Button>
			</div>
		</div>
	);
}
