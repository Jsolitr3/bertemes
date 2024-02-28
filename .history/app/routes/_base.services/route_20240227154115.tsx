// Page: /Services
// This page show the offered accounting business's services.

// This is a pretty display of the following services: QUICKBOOKS®, INCOME TAX ADVISING & COMPLIANCE, PAYROLL SERVICES, COMPILATION & REVIEW
// This page needs to display each of these in a super modern look with room for a description of each service.
export default function Route() {
	return (
		<div className='container mx-auto p-8'>
			<h1 className='text-4xl font-bold mb-8'>Our Services</h1>

			{/* QuickBooks Section */}
			<div className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>QuickBooks®</h2>
				<p className='text-gray-700'>Add your QuickBooks® service description here.</p>
			</div>

			{/* Income Tax Advising & Compliance Section */}
			<div className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>Income Tax Advising & Compliance</h2>
				<p className='text-gray-700'>Add your Income Tax Advising & Compliance service description here.</p>
			</div>

			{/* Payroll Services Section */}
			<div className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>Payroll Services</h2>
				<p className='text-gray-700'>Add your Payroll Services description here.</p>
			</div>

			{/* Compilation & Review Section */}
			<div className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>Compilation & Review</h2>
				<p className='text-gray-700'>Add your Compilation & Review service description here.</p>
			</div>
		</div>
	);
}
