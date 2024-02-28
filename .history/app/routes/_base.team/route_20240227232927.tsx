import TeamMemberCard from './components/teamMemberCard';
import WillBertemesHeadshot from '~/resources/images/WillBertemes.jpeg';
import ThereseJohnsonHeadshot from '~/resources/images/ThereseJohnson.jpeg';

export default function Route() {
	return (
		<div>
			Route
			<TeamMemberCard name='Will Bertemes, CPA' primaryImage={WillBertemesHeadshot}>
				<div className='text-center'>
					<p className='mb-4'>
						With over 20 years of diverse experience in tax, accounting, and business consulting, Will Bertemes, CPA,
						brings valuable insights to his role. He is a dedicated member of the American Institute of Certified Public
						Accountants and the Ohio Society of Certified Public Accountants.
					</p>
					<p className='mb-4'>
						Licensed as a CPA in Ohio since 1997, Will holds a Bachelor of Business Administration in Accounting from
						the University of Cincinnati. His commitment to client success involves establishing practical and sound tax
						and accounting processes.
					</p>
					<p className='mb-4'>
						Specializing in services for small, owner-managed businesses, Will is focused on delivering personalized tax
						and accounting services aligned with each client's unique objectives. His extensive accounting background
						includes senior accountant and management roles at PricewaterhouseCoopers.
					</p>
					<p className='mb-4'>
						A Veteran of the US Army Reserve who served during Operation Desert Storm, Will is also a Certified
						QuickBooks ProAdvisor. He leverages his expertise to provide customized accounting solutions, including
						individual, corporate, partnership, and nonprofit income tax returns, as well as payroll processing
						services. Additionally, Will excels in assisting clients in buying and selling businesses.
					</p>
				</div>
			</TeamMemberCard>
			<TeamMemberCard name='Therese Johnson' primaryImage={ThereseJohnsonHeadshot} />
			<TeamMemberCard name='Brett Bertemes' primaryImage={WillBertemesHeadshot} />
		</div>
	);
}
