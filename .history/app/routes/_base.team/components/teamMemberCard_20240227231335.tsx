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
		<div className='max-w-sm relative bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Primary Image */}
			<img
				className='w-full h-full object-cover object-center'
				src='url-to-primary-image.jpg' // Replace with the actual URL for the primary image
				alt={`Photograph of ${name}`}
			/>

			{/* Hover Overlay */}
			<div className='absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
				{/* Content */}
				<div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
					{/* Cool Initial */}
					<div className='bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4'>
						{name.charAt(0)}
					</div>

					{/* Name */}
					<div className='font-bold text-xl mb-2'>{name}</div>

					{/* Description */}
					<p className='text-gray-300 text-base text-center px-6'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
