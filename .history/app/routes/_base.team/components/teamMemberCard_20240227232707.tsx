// TeamMemberCard.jsx
import React from 'react';

type TeamMemberCardProps = {
	name: string;
	primaryImage: string;
	children?: React.ReactNode;
};

const TeamMemberCard = ({ name, primaryImage, children }: TeamMemberCardProps) => {
	return (
		<div className='max-w-sm relative bg-base-100 shadow-lg rounded-lg overflow-hidden'>
			{/* Base Content */}
			<div className='w-full h-full flex flex-col items-center justify-center'>
				{/* Primary Image */}
				<img className='w-full h-full object-cover object-center' src={primaryImage} alt={`IPhotograph of ${name}`} />

				{/* Name */}
				<div className='absolute rounded-lg p-2 bg-gradient-to-bl from-primary to-60% to-secondary bottom-0 left-0 text-secondary-content font-bold text-lg mb-4 ml-4'>
					{name}
				</div>
			</div>

			{/* Hover Overlay */}
			<div className='absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
				{/* Hover Content */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-secondary-content'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
