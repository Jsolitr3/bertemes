import TeamMemberCard from './components/teamMemberCard';
import WillBertemesHeadshot from '~/resources/images/WillBertemes.jpeg';

export default function Route() {
	return (
		<div>
			Route
			<TeamMemberCard name='Justin Solitro' primaryImage={WillBertemesHeadshot} />
		</div>
	);
}
