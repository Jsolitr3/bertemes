// TeamMemberCard.jsx
import React from 'react';

type TeamMemberCardProps = {
	name: string;
	primaryImage: string;
	children?: React.ReactNode;
};

const TeamMemberCard = ({ name, primaryImage, children }: TeamMemberCardProps) => {
	return (
		<div className='max-w-sm relative bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Base Content */}
			<div className='w-full h-full flex flex-col items-center justify-center'>
				{/* Primary Image */}
				<img className='w-full h-full object-cover object-center' src={primaryImage} alt={`IPhotograph of ${name}`} />

				{/* Cool Initial */}
				<div className='absolute mask mask-hexagon m-2 top-0 left-0 w-16 h-16 flex items-center justify-center text-secondary-content font-bold text-2xl bg-gradient-to-tr from-secondary to-primary rounded-full'>
					{name.charAt(0)}
				</div>

				{/* Name */}
				<div className='absolute bottom-0 left-0 text-white font-bold text-xl mb-4 ml-4'>{name}</div>
			</div>

			{/* Hover Overlay */}
			<div className='absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
				{/* Hover Content */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-white'>{children}</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
