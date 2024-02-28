import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import quickbooksImage from '~/resources/images/quickbooks.jpeg';
import payrollImage from '~/resources/images/payroll.jpeg';
import taxImage from '~/resources/images/taxation.jpeg';
import assuranceImage from '~/resources/images/compilation.jpeg';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Bertemes Johnson & Co' },
		{ name: 'description', content: 'Bertemes Johnson & Company Accounting Firm' },
	];
};

export default function Index() {
	return (
		<div className='bg-gray-100 w-full'>
			{/* QuickBooks Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-secondary'></div>
				<img className='w-full h-full object-cover' src={quickbooksImage} alt='QuickBooks Service' />
				<div className='absolute z-20 text-base-100 text-center bg-secondary bg-opacity-50 p-4'>
					<h1 className='text-4xl font-bold mb-4'>Unlock QuickBooks Mastery</h1>
					<Link
						className='px-6 py-2 bg-primary text-base-100 rounded-full hover:bg-accent transition duration-300'
						to='/services?service=quickbooks'
					>
						Explore QuickBooks
					</Link>
				</div>
			</section>

			{/* Tax Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-secondary'></div>
				<img className='w-full h-full object-cover' src={taxImage} alt='Tax Services' />
				<div className='absolute z-20 text-base-100 text-center'>
					<h1 className='text-4xl font-bold mb-4'>Optimize Your Tax Strategy</h1>
					<Link
						className='px-6 py-2 bg-green-500 text-base-100 rounded-full hover:bg-green-600 transition duration-300'
						to='/services?service=tax'
					>
						Explore Tax Services
					</Link>
				</div>
			</section>

			{/* Payroll Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-secondary'></div>
				<img className='w-full h-full object-cover' src={payrollImage} alt='Payroll Services' />
				<div className='absolute z-20 text-base-100 text-center'>
					<h1 className='text-4xl font-bold mb-4'>Streamline Your Payroll</h1>
					<Link
						className='px-6 py-2 bg-orange-500 text-base-100 rounded-full hover:bg-orange-600 transition duration-300'
						to='/services?service=payroll'
					>
						Explore Payroll
					</Link>
				</div>
			</section>

			{/* Assurance Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-secondary'></div>
				<img className='w-full h-full object-cover' src={assuranceImage} alt='Assurance Services' />
				<div className='absolute z-20 text-base-100 text-center'>
					<h1 className='text-4xl font-bold mb-4'>Ensure Financial Confidence</h1>
					<Link
						className='px-6 py-2 bg-purple-500 text-base-100 rounded-full hover:bg-purple-600 transition duration-300'
						to='/services?service=assurance'
					>
						Explore Assurance
					</Link>
				</div>
			</section>
		</div>
	);
}
