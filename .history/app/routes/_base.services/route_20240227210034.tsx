// Page: /Services
// This page show the offered accounting business's services.

import Collapsible from './components/collapsible';
import fullLogo from '~/images/icons/logo-full.png';

// This is a pretty display of the following services: QUICKBOOKS®, INCOME TAX ADVISING & COMPLIANCE, PAYROLL SERVICES, COMPILATION & REVIEW
// This page needs to display each of these in a super modern look with room for a description of each service.
export default function Route() {
	return (
		<div className='container mx-auto p-8 text-secondary-content'>
			<h1 className='text-4xl font-bold mb-8 text-secondary'>Our Services</h1>

			{/* QuickBooks Section */}
			<Collapsible title='QuickBooks®' description='Unlock the Power of QuickBooks with Us!'>
				{/* Introduction */}
				<p className='text-md mb-8 text-secondary-content'>
					As Certified Advanced QuickBooks ProAdvisors and Certified Public Accountants, we are your go-to experts for
					seamlessly navigating QuickBooks and tackling accounting challenges faced by small businesses.
				</p>

				{/* New Client Offering */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg drop-shadow-lg mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Start Strong with Personalized Training</h2>
					<p className='text-md'>
						For new clients, we provide an initial troubleshooting and training session. Enjoy one-on-one training and
						consulting tailored to your unique needs.
					</p>
				</div>

				{/* Comprehensive Services */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg drop-shadow-lg mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Comprehensive QuickBooks Services</h2>
					<ul className='list-disc pl-6 text-md'>
						<li>Data File Setup: Install QuickBooks, customize data files, import from other databases.</li>
						<li>Training: Tailored, onsite training for QuickBooks users.</li>
						<li>Data File Analysis: Identify errors affecting report accuracy.</li>
						<li>Data Archive: Enhance performance by reducing QuickBooks Data File size.</li>
						<li>Ongoing Maintenance: Outsource reconciliations, reporting, and general ledger tasks.</li>
					</ul>
				</div>

				{/* Elevate Your QuickBooks Experience */}
				<p className='text-md text-secondary-content'>
					Whether you're just starting with QuickBooks or seeking to elevate your long-term usage, we're here to empower
					your business with top-notch expertise and personalized solutions. Let's make your QuickBooks experience
					seamless and efficient!
				</p>
			</Collapsible>

			{/* Income Tax Advising & Compliance Section */}
			<Collapsible title='Income Tax Advising & Compliance' description='Optimize Your Finances with Our Tax Services!'>
				{/* <h1 className='text-4xl font-bold mb-8'>Optimize Your Finances with Our Tax Services</h1> */}

				{/* Tax Preparation */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Expert Tax Preparation</h2>
					<p className='text-md'>
						Trust us for professional preparation of federal, state, and local tax returns. Affordable rates, meticulous
						attention to detail, and tailored solutions for individuals and businesses.
					</p>
				</div>

				{/* Tax Planning */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Strategic Tax Planning</h2>
					<p className='text-md'>
						Stay ahead of tax changes! Our firm monitors federal, state, and local tax laws to help you minimize current
						and future tax liabilities. Customized compliance monitoring systems prevent costly penalties and interest.
					</p>
				</div>

				{/* IRS and State/Local Representation */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Strong Representation</h2>
					<p className='text-md'>
						Facing IRS or state/local tax issues? Our experts provide complete representation services. We navigate tax
						laws, handle IRS negotiations, and are experienced in Offers in Compromise.
					</p>
				</div>

				{/* Sales Tax Service */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-xl font-semibold mb-4'>Effortless Sales Tax Management</h2>
					<p className='text-md'>
						Simplify sales tax compliance! We prepare filings, offer full audit representation, and ensure your business
						is on solid ground when it comes to sales tax regulations.
					</p>
				</div>

				{/* Elevate Your Financial Strategy */}
				<p className='text-md text-secondary-content'>
					Elevate your financial strategy with our comprehensive tax services. From meticulous preparation to strategic
					planning, we're here to ensure your financial success. Let's optimize your tax strategy for a prosperous
					future!
				</p>
			</Collapsible>

			{/* Payroll Services Section */}
			<Collapsible title='Payroll Services' description='Streamline Your Payroll Process.'>
				<h1 className='text-4xl font-bold mb-8'>Streamline Your Payroll Process</h1>

				{/* Payroll Services Description */}
				<div className='bg-white p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Customized Payroll Solutions</h2>
					<p className='text-gray-700'>
						Our payroll services are tailored to fit your needs. We offer seamless integration with QuickBooks,
						providing full-service payroll solutions including direct deposit, quarterly filing, W-2 preparation, new
						hire reporting, and more!
					</p>
				</div>

				{/* Video Demo */}
				<div className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>See Our Payroll Demo</h2>
					<div className='aspect-w-16 aspect-h-9'>
						<iframe
							src='https://www.surepayroll.com/globalassets/videos/mp4/rp-guided-tour-video---fin.mp4'
							title='Payroll Demo'
							className='w-full h-full rounded-lg shadow-md'
							allow='autoplay; encrypted-media'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</Collapsible>
			{/* Payroll Services Section */}
			<Collapsible title='Payroll Services' description='Streamline Your Payroll Process.'>
				{/* Payroll Services Details */}
				<div className='bg-white p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Tailored Payroll Services</h2>
					<p className='text-gray-700'>
						Our payroll services are designed to meet your unique needs. Whether it's integrating QuickBooks for
						full-service payroll, handling direct deposits, quarterly filings, year-end W-2 preparations, or new hire
						reporting – we've got you covered!
					</p>
				</div>

				{/* Payroll Outsourcing */}
				<div className='bg-white p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Full-Service Payroll Outsourcing</h2>
					<p className='text-gray-700'>
						Explore the simplicity of full-service payroll outsourcing with us. Check out our payroll demo to see how we
						can make payroll management efficient and hassle-free for your business.
					</p>
				</div>

				{/* Video Embed */}
				<div className='mb-8'>
					<video className='w-full rounded-lg shadow-md' controls poster={fullLogo}>
						<source
							src='https://www.surepayroll.com/globalassets/videos/mp4/rp-guided-tour-video---fin.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>

				{/* Elevate Your Payroll Experience */}
				<p className='text-lg text-gray-700'>
					Elevate your payroll experience with our comprehensive services. From seamless integrations to full
					outsourcing, we're here to make payroll a breeze. Watch our demo and let's transform your payroll processes
					for the better!
				</p>
			</Collapsible>

			{/* Compilation & Review Section */}
			<Collapsible
				title='Compilation & Review'
				description='Add your Compilation & Review service description here.'
			></Collapsible>
		</div>
	);
}
