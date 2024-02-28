// Page: /Services
// This page show the offered accounting business's services.

// This is a pretty display of the following services: QUICKBOOKS®, INCOME TAX ADVISING & COMPLIANCE, PAYROLL SERVICES, COMPILATION & REVIEW
// This page needs to display each of these in a super modern look with room for a description of each service.
export default function Route() {
	return (
		<div className='container mx-auto p-8'>
			<h1 className='text-4xl font-bold mb-8'>Our Services</h1>

			{/* QuickBooks Section */}
			<div className='collapse collapse-plus mb-8 bg-base-100 p-6 rounded-lg shadow-lg'>
				<input type='checkbox' />
				<div className='collapse-title'>
					<h2 className='text-2xl font-semibold mb-4'>QuickBooks®</h2>
					<p className='text-gray-700'>Add your QuickBooks® service description here.</p>
				</div>
				<div className='collapse-content'>
					{/* <p>
						We are Certified Advanced QuickBooks ProAdvisors and Certified Public Accountants so we are able to handle
						the software as well as the accounting issues that most small businesses face. For new clients, we offer an
						initial troubleshooting and training session of one-on-one training and consulting. We also consult with
						businesses who have used QuickBooks for years and who want to take their QuickBooks use to the next level.
						We offer the following services: Data File Setup Installing QuickBooks financial software on each QuickBooks
						user's workstation, creating and customizing a QuickBooks data file, importing list information from other
						databases, customizing reports to meet your industry-specific and business-specific reporting needs,
						optionally integrating QuickBooks with other applications. Training Customized, onsite training for
						QuickBooks users. Data File Analysis Locate data entry errors and data file setup errors that cause your
						QuickBooks reports to be inaccurate. Data Archive Improve performance by reducing the size of the QuickBooks
						Data File. Ongoing Maintenance Outsource your reconciliations, reporting and general ledger maintenance.
					</p> */}
					<h1 className='text-4xl font-bold mb-8'>Unlock the Power of QuickBooks with Us!</h1>

					{/* Introduction */}
					<p className='text-lg text-gray-700 mb-8'>
						As Certified Advanced QuickBooks ProAdvisors and Certified Public Accountants, we are your go-to experts for
						seamlessly navigating QuickBooks and tackling accounting challenges faced by small businesses.
					</p>

					{/* New Client Offering */}
					<div className='bg-white p-6 rounded-lg shadow-md mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>Start Strong with Personalized Training</h2>
						<p className='text-gray-700'>
							For new clients, we provide an initial troubleshooting and training session. Enjoy one-on-one training and
							consulting tailored to your unique needs.
						</p>
					</div>

					{/* Comprehensive Services */}
					<div className='bg-white p-6 rounded-lg shadow-md mb-8'>
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
						Whether you're just starting with QuickBooks or seeking to elevate your long-term usage, we're here to
						empower your business with top-notch expertise and personalized solutions. Let's make your QuickBooks
						experience seamless and efficient!
					</p>
				</div>
			</div>

			{/* Income Tax Advising & Compliance Section */}
			<div className='mb-8 bg-base-100 p-6 rounded-lg shadow-lg'>
				<h2 className='text-2xl font-semibold mb-4'>Income Tax Advising & Compliance</h2>
				<p className='text-gray-700'>Add your Income Tax Advising & Compliance service description here.</p>
			</div>

			{/* Payroll Services Section */}
			<div className='mb-8 bg-base-100 p-6 rounded-lg shadow-lg'>
				<h2 className='text-2xl font-semibold mb-4'>Payroll Services</h2>
				<p className='text-gray-700'>Add your Payroll Services description here.</p>
			</div>

			{/* Compilation & Review Section */}
			<div className='mb-8 bg-base-100 p-6 rounded-lg shadow-lg'>
				<h2 className='text-2xl font-semibold mb-4'>Compilation & Review</h2>
				<p className='text-gray-700'>Add your Compilation & Review service description here.</p>
			</div>
		</div>
	);
}
