// TeamMemberCard.jsx
import React from 'react';

type TeamMemberCardProps = {
	name: string;
	primaryImage?: string;
	secondaryImage?: string;
	children?: React.ReactNode;
};

const TeamMemberCard = ({ name, primaryImage, secondaryImage, children }: TeamMemberCardProps) => {
	return (
		<div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Primary Image */}
			{primaryImage ? (
				<img
					className='w-full h-48 object-cover object-center transition-transform duration-300 transform hover:scale-105'
					src={primaryImage} // Replace with the actual URL for the primary image
					alt={`Photograph of ${name}`}
				/>
			) : null}

			<div className='px-6 py-4'>
				{/* Cool Initial */}
				<div className='bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4'>
					{name.charAt(0)}
				</div>

				{/* Name */}
				<div className='font-bold text-xl mb-2'>{name}</div>

				{/* Description */}
				{children}
				<p className='text-gray-700 text-base'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua.
				</p>
			</div>
		</div>
	);
};

export default TeamMemberCard;
