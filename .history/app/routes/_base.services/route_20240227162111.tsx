// Page: /Services
// This page show the offered accounting business's services.

import Collapsible from './components/collapsible';

// This is a pretty display of the following services: QUICKBOOKS®, INCOME TAX ADVISING & COMPLIANCE, PAYROLL SERVICES, COMPILATION & REVIEW
// This page needs to display each of these in a super modern look with room for a description of each service.
export default function Route() {
	return (
		<div className='container mx-auto p-8 text-secondary-content'>
			<h1 className='text-4xl font-bold mb-8 text-secondary'>Our Services</h1>

			{/* QuickBooks Section */}
			<Collapsible title='QuickBooks®' description='Add your QuickBooks® service description here.'>
				<h1 className='text-4xl font-bold mb-8'>Unlock the Power of QuickBooks with Us!</h1>

				{/* Introduction */}
				<p className='text-lg mb-8'>
					As Certified Advanced QuickBooks ProAdvisors and Certified Public Accountants, we are your go-to experts for
					seamlessly navigating QuickBooks and tackling accounting challenges faced by small businesses.
				</p>

				{/* New Client Offering */}
				<div className='bg-base-100 text-secondary p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Start Strong with Personalized Training</h2>
					<p>
						For new clients, we provide an initial troubleshooting and training session. Enjoy one-on-one training and
						consulting tailored to your unique needs.
					</p>
				</div>

				{/* Comprehensive Services */}
				<div className="" p-6 rounded-lg shadow-md mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Comprehensive QuickBooks Services</h2>
					<ul className='list-disc pl-6'>
						<li>Data File Setup: Install QuickBooks, customize data files, import from other databases.</li>
						<li>Training: Tailored, onsite training for QuickBooks users.</li>
						<li>Data File Analysis: Identify errors affecting report accuracy.</li>
						<li>Data Archive: Enhance performance by reducing QuickBooks Data File size.</li>
						<li>Ongoing Maintenance: Outsource reconciliations, reporting, and general ledger tasks.</li>
					</ul>
				</div>

				{/* Elevate Your QuickBooks Experience */}
				<p className='text-lg text-gray-700'>
					Whether you're just starting with QuickBooks or seeking to elevate your long-term usage, we're here to empower
					your business with top-notch expertise and personalized solutions. Let's make your QuickBooks experience
					seamless and efficient!
				</p>
			</Collapsible>

			{/* Income Tax Advising & Compliance Section */}
			<Collapsible
				title='Income Tax Advising & Compliance'
				description='Add your Income Tax Advising & Compliance service description here.'
			></Collapsible>

			{/* Payroll Services Section */}
			<Collapsible title='Payroll Services' description='Add your Payroll Services description here.'></Collapsible>

			{/* Compilation & Review Section */}
			<Collapsible
				title='Compilation & Review'
				description='Add your Compilation & Review service description here.'
			></Collapsible>
		</div>
	);
}
