// Page: /Services
// This page show the offered accounting business's services.

import Collapsible from './components/collapsible';
import videoLogo from '~/resources/images/logo-video.png';
// import captions from '~/resources/captions/demoCaptions.vtt';

// This is a pretty display of the following services: QUICKBOOKS®, INCOME TAX ADVISING & COMPLIANCE, PAYROLL SERVICES, COMPILATION & REVIEW
// This page needs to display each of these in a super modern look with room for a description of each service.
export default function Route() {
	const sectionClass = 'bg-base-100 text-secondary p-6 rounded-lg drop-shadow-md mb-8';
	const sectionHeaderClass = 'text-xl font-semibold mb-4';
	const sectionContentClass = 'text-md';

	return (
		<div className='container mx-auto p-8 text-secondary-content'>
			<h1 className='text-4xl font-bold mb-8 text-secondary'>Our Services</h1>

			{/* QuickBooks Section */}
			<Collapsible title='QuickBooks®' description='Unlock the Power of QuickBooks with Us!'>
				{/* Introduction */}
				<p className={`${sectionContentClass} mb-8 text-secondary-content`}>
					As Certified Advanced QuickBooks ProAdvisors and Certified Public Accountants, we are your go-to experts for
					seamlessly navigating QuickBooks and tackling accounting challenges faced by small businesses.
				</p>

				{/* New Client Offering */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Start Strong with Personalized Training</h2>
					<p className={sectionContentClass}>
						For new clients, we provide an initial troubleshooting and training session. Enjoy one-on-one training and
						consulting tailored to your unique needs.
					</p>
				</div>

				{/* Comprehensive Services */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Comprehensive QuickBooks Services</h2>
					<ul className={`list-disc pl-6 ${sectionContentClass}`}>
						<li>Data File Setup: Install QuickBooks, customize data files, import from other databases.</li>
						<li>Training: Tailored, onsite training for QuickBooks users.</li>
						<li>Data File Analysis: Identify errors affecting report accuracy.</li>
						<li>Data Archive: Enhance performance by reducing QuickBooks Data File size.</li>
						<li>Ongoing Maintenance: Outsource reconciliations, reporting, and general ledger tasks.</li>
					</ul>
				</div>

				{/* Elevate Your QuickBooks Experience */}
				<p className={`text-secondary-content ${sectionContentClass}`}>
					Whether you're just starting with QuickBooks or seeking to elevate your long-term usage, we're here to empower
					your business with top-notch expertise and personalized solutions. Let's make your QuickBooks experience
					seamless and efficient!
				</p>
			</Collapsible>

			{/* Income Tax Advising & Compliance Section */}
			<Collapsible title='Income Tax Advising & Compliance' description='Optimize Your Finances with Our Tax Services!'>
				{/* <h1 className='text-4xl font-bold mb-8'>Optimize Your Finances with Our Tax Services</h1> */}

				{/* Tax Preparation */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Expert Tax Preparation</h2>
					<p className={sectionContentClass}>
						Trust us for professional preparation of federal, state, and local tax returns. Affordable rates, meticulous
						attention to detail, and tailored solutions for individuals and businesses.
					</p>
				</div>

				{/* Tax Planning */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Strategic Tax Planning</h2>
					<p className={sectionContentClass}>
						Stay ahead of tax changes! Our firm monitors federal, state, and local tax laws to help you minimize current
						and future tax liabilities. Customized compliance monitoring systems prevent costly penalties and interest.
					</p>
				</div>

				{/* IRS and State/Local Representation */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Strong Representation</h2>
					<p className={sectionContentClass}>
						Facing IRS or state/local tax issues? Our experts provide complete representation services. We navigate tax
						laws, handle IRS negotiations, and are experienced in Offers in Compromise.
					</p>
				</div>

				{/* Sales Tax Service */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Effortless Sales Tax Management</h2>
					<p className={sectionContentClass}>
						Simplify sales tax compliance! We prepare filings, offer full audit representation, and ensure your business
						is on solid ground when it comes to sales tax regulations.
					</p>
				</div>

				{/* Elevate Your Financial Strategy */}
				<p className={`text-secondary-content ${sectionContentClass}`}>
					Elevate your financial strategy with our comprehensive tax services. From meticulous preparation to strategic
					planning, we're here to ensure your financial success. Let's optimize your tax strategy for a prosperous
					future!
				</p>
			</Collapsible>

			{/* Payroll Services Section */}
			<Collapsible title='Payroll Services' description='Streamline Your Payroll Process.'>
				{/* Payroll Services Details */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Tailored Payroll Services</h2>
					<p className={sectionContentClass}>
						Our payroll services are designed to meet your unique needs. Whether it's integrating QuickBooks for
						full-service payroll, handling direct deposits, quarterly filings, year-end W-2 preparations, or new hire
						reporting – we've got you covered!
					</p>
				</div>

				{/* Payroll Outsourcing */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Full-Service Payroll Outsourcing</h2>
					<p className={sectionContentClass}>
						Explore the simplicity of full-service payroll outsourcing with us. Check out our payroll demo to see how we
						can make payroll management efficient and hassle-free for your business.
					</p>
				</div>

				{/* Video Embed */}
				<div className='mb-8'>
					<video className='w-full rounded-lg shadow-md aspect-video' controls poster={videoLogo}>
						<track kind='captions' src='~/resources/captions/demoCaptions.vtt' srcLang='en' label='English' />
						<source
							src='https://www.surepayroll.com/globalassets/videos/mp4/rp-guided-tour-video---fin.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>

				{/* Elevate Your Payroll Experience */}
				<p className={`text-secondary-content ${sectionContentClass}`}>
					Elevate your payroll experience with our comprehensive services. From seamless integrations to full
					outsourcing, we're here to make payroll a breeze. Watch our demo and let's transform your payroll processes
					for the better!
				</p>
			</Collapsible>

			{/* Compilation & Review Section */}
			<Collapsible title='Compilation & Review' description='Confidence in Your Financial Statements.'>
				{/* <h1 className="text-4xl font-bold mb-8">Confidence in Your Financial Statements</h1> */}

				{/* Assurance Solutions Overview */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Comprehensive Assurance Solutions</h2>
					<p className={sectionContentClass}>
						Sometimes, audits aren't necessary, but independently prepared, full-disclosure financial statements are
						crucial. We offer the preparation of compiled or reviewed financial statements, adhering to the highest
						standards outlined in Statements on Standards for Accounting and Review Services (SSARS).
					</p>
				</div>

				{/* Other Assurance Solutions */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Beyond Financial Statements</h2>
					<p className={sectionContentClass}>
						Need to review internal controls? Involved in a business transaction and require due diligence or special
						reporting? Our expertise extends to various assurance services, ensuring your unique needs are met with
						precision.
					</p>
				</div>

				{/* Compiled vs Reviewed Financial Statements */}
				<div className={sectionClass}>
					<h2 className={sectionHeaderClass}>Understanding the Difference</h2>
					<p className={`${sectionContentClass} mb-4`}>
						<strong>Compilation (No Assurance Provided):</strong> A compilation assists in presenting financial
						information without providing assurance. It is an attest engagement, but the lowest form of financial
						statement assurance.
					</p>
					<p className={sectionContentClass}>
						<strong>Review Engagement (Limited Assurance):</strong> A review provides limited assurance that financial
						statements are in conformity with the applicable financial reporting framework. It is an assurance
						engagement, offering more assurance than a compilation but less than an audit.
					</p>
				</div>

				{/* Elevate Your Financial Confidence */}
				<p className={`text-secondary-content ${sectionContentClass}`}>
					Elevate your financial confidence with our assurance solutions. Whether it's compiled or reviewed financial
					statements or specialized reporting, we're committed to ensuring the integrity of your financial information.
					Choose assurance that aligns with your needs.
				</p>
			</Collapsible>
		</div>
	);
}
