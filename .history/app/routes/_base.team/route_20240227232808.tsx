import TeamMemberCard from './components/teamMemberCard';
import WillBertemesHeadshot from '~/resources/images/WillBertemes.jpeg';
import ThereseJohnsonHeadshot from '~/resources/images/ThereseJohnson.jpeg';

export default function Route() {
	return (
		<div>
			Route
			<TeamMemberCard name='Will Bertemes' primaryImage={WillBertemesHeadshot}></TeamMemberCard>
			<TeamMemberCard name='Therese Johnson' primaryImage={ThereseJohnsonHeadshot} />
			<TeamMemberCard name='Brett Bertemes' primaryImage={WillBertemesHeadshot} />
		</div>
	);
}
