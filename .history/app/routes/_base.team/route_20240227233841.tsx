import TeamMemberCard from './components/teamMemberCard';
import WillBertemesHeadshot from '~/resources/images/WillBertemes.jpeg';
import ThereseJohnsonHeadshot from '~/resources/images/ThereseJohnson.jpeg';

export default function Route() {
	return (
		<div>
			<h1 className='sm:text-4xl text-3xl font-bold mb-8 text-secondary'>Our Services</h1>
			<div className='flex flex-wrap justify-center items-center gap-4 p-4'>
				<TeamMemberCard name='Will Bertemes, CPA' primaryImage={WillBertemesHeadshot}>
					<div className='text-center'>
						<p className='mb-4'>
							With over 20 years of diverse experience in tax, accounting, and business consulting, Will Bertemes, CPA,
							brings valuable insights to his role. He is a dedicated member of the American Institute of Certified
							Public Accountants and the Ohio Society of Certified Public Accountants.
						</p>
						<p className='mb-4'>
							Licensed as a CPA in Ohio since 1997, Will holds a Bachelor of Business Administration in Accounting from
							the University of Cincinnati. His commitment to client success involves establishing practical and sound
							tax and accounting processes.
						</p>
						<p className='mb-4'>
							Specializing in services for small, owner-managed businesses, Will is focused on delivering personalized
							tax and accounting services aligned with each client's unique objectives. His extensive accounting
							background includes senior accountant and management roles at PricewaterhouseCoopers.
						</p>
						<p className='mb-4'>
							A Veteran of the US Army Reserve who served during Operation Desert Storm, Will is also a Certified
							QuickBooks ProAdvisor. He leverages his expertise to provide customized accounting solutions, including
							individual, corporate, partnership, and nonprofit income tax returns, as well as payroll processing
							services. Additionally, Will excels in assisting clients in buying and selling businesses.
						</p>
					</div>
				</TeamMemberCard>
				<TeamMemberCard name='Therese Johnson' primaryImage={ThereseJohnsonHeadshot}>
					<div className='flex flex-col gap-4'>
						<p>
							Therese Johnson, CPA, brings over 25 years of extensive experience in accounting and tax. Her diverse
							career spans the government, public, and private sectors of business.
						</p>
						<p>
							A proud member of the American Institute of Certified Public Accountants and the Ohio Society of Certified
							Public Accountants, Therese has been a licensed CPA in Ohio since 1993. She earned her Bachelor of
							Business Administration in Accounting from the University of Akron.
						</p>
						<p>
							Therese's focus lies in supporting small businesses and their owners with comprehensive accounting and tax
							solutions. Her goal is to enable businesses to concentrate on growth and building a strong customer base.
						</p>
						<p>
							Building long-term client relationships is Therese's dedication. She is proficient in client engagements
							and excels in problem-solving for small business needs. Therese began her career at the Ohio Department of
							Taxation and later worked at Deloitte and Touche in Cleveland, OH, gaining expertise in audit, review
							engagements, and corporate, personal, and payroll tax preparation.
						</p>
						<p>
							After six years in public accounting, Therese spent nearly 20 years in the private sector. She also
							operated from a home office, providing accounting and financial services, and preparing tax returns for
							personal and corporate customers. Proficient in QuickBooks, Therese offers income tax preparation services
							and payroll solutions for individuals, partnerships, corporations, and not-for-profit organizations.
						</p>
						<p>
							Active in the community, Therese serves as the treasurer for the Cascade Locks Park Association in Akron,
							OH, and was the treasurer for the Copley Fairlawn Youth Football program for six years. Married with three
							children and a spoiled dog, she enjoys spending time with her family, being outdoors, playing and watching
							sports, and is a diehard Cleveland fan.
						</p>
					</div>
				</TeamMemberCard>
				{/* <TeamMemberCard name='Brett Bertemes' primaryImage={WillBertemesHeadshot} /> */}
			</div>
		</div>
	);
}
