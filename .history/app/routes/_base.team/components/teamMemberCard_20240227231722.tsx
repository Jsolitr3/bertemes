// TeamMemberCard.jsx
import React from 'react';

type TeamMemberCardProps = {
	name: string;
	primaryImage: string;
	secondaryImage?: string;
	children?: React.ReactNode;
};

const TeamMemberCard = ({ name, primaryImage, secondaryImage, children }: TeamMemberCardProps) => {
	return (
		<div className='max-w-sm relative bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Base Content */}
			<div className='w-full h-full flex flex-col items-center justify-center'>
				{/* Primary Image */}
				<img
					className='w-full h-full object-cover object-center'
					src={primaryImage} // Replace with the actual URL for the primary image
					alt={`IPhotograph of ${name}`}
				/>

				{/* Cool Initial */}
				<div className='absolute top-0 left-0 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mt-4 ml-4'>
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
