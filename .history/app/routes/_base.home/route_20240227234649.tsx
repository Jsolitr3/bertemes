import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Bertemes Johnson & Co' },
		{ name: 'description', content: 'Bertemes Johnson & Company Accounting Firm' },
	];
};

export default function Index() {
	return (
		<div className='bg-gray-100'>
			{/* QuickBooks Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-black'></div>
				<img className='w-full h-full object-cover' src='path/to/quickbooks-image.jpg' alt='QuickBooks Service' />
				<div className='absolute z-20 text-white text-center'>
					<h1 className='text-4xl font-bold mb-4'>Unlock QuickBooks Mastery</h1>
					<Link
						className='px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300'
						to='quickbooksSection'
						smooth={true}
					>
						Explore QuickBooks
					</Link>
				</div>
			</section>

			{/* Tax Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-black'></div>
				<img className='w-full h-full object-cover' src='path/to/tax-services-image.jpg' alt='Tax Services' />
				<div className='absolute z-20 text-white text-center'>
					<h1 className='text-4xl font-bold mb-4'>Optimize Your Tax Strategy</h1>
					<Link
						className='px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300'
						to='taxServicesSection'
						smooth={true}
					>
						Explore Tax Services
					</Link>
				</div>
			</section>

			{/* Payroll Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-black'></div>
				<img className='w-full h-full object-cover' src='path/to/payroll-services-image.jpg' alt='Payroll Services' />
				<div className='absolute z-20 text-white text-center'>
					<h1 className='text-4xl font-bold mb-4'>Streamline Your Payroll</h1>
					<Link
						className='px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300'
						to='payrollServicesSection'
						smooth={true}
					>
						Explore Payroll
					</Link>
				</div>
			</section>

			{/* Assurance Services Teaser */}
			<section className='relative h-screen flex items-center justify-center'>
				<div className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-transparent to-black'></div>
				<img
					className='w-full h-full object-cover'
					src='path/to/assurance-services-image.jpg'
					alt='Assurance Services'
				/>
				<div className='absolute z-20 text-white text-center'>
					<h1 className='text-4xl font-bold mb-4'>Ensure Financial Confidence</h1>
					<Link
						className='px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300'
						to='assuranceServicesSection'
						smooth={true}
					>
						Explore Assurance
					</Link>
				</div>
			</section>

			{/* QuickBooks Section */}
			<section id='quickbooksSection' className='py-16'>
				{/* Your QuickBooks section content goes here */}
			</section>

			{/* Tax Services Section */}
			<section id='taxServicesSection' className='py-16'>
				{/* Your Tax Services section content goes here */}
			</section>

			{/* Payroll Services Section */}
			<section id='payrollServicesSection' className='py-16'>
				{/* Your Payroll Services section content goes here */}
			</section>

			{/* Assurance Services Section */}
			<section id='assuranceServicesSection' className='py-16'>
				{/* Your Assurance Services section content goes here */}
			</section>
		</div>
	);
}
