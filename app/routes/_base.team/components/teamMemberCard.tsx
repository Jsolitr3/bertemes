// TeamMemberCard.jsx
import React from 'react';
import placeholder from '~/resources/images/photo-placeholder.jpeg';

type TeamMemberCardProps = {
	name: string;
	primaryImage?: string;
	children?: React.ReactNode;
};

const TeamMemberCard = ({ name, primaryImage, children }: TeamMemberCardProps) => {
	return (
		<div className='group max-w-sm sm:max-w-lg sm:w-96 relative bg-base-100 drop-shadow-lg rounded-lg overflow-hidden'>
			{/* Base Content */}
			<div className='w-full h-full flex flex-col items-center justify-center'>
				{/* Primary Image */}
				<img
					className='w-full h-full object-cover object-center'
					src={primaryImage || placeholder}
					alt={`IPhotograph of ${name}`}
				/>

				{/* Name */}
				<div className='absolute rounded-lg p-2 bg-gradient-to-tr from-primary to-60% to-secondary bottom-0 left-0 text-secondary-content font-bold text-lg mb-4 ml-4'>
					{name}
				</div>
			</div>

			{/* Hover Overlay */}
			<div className='absolute w-full bottom-0 bg-base-100 opacity-85 text-secondary h-0 group-hover:h-full transition-height duration-300'>
				{/* Hover Content */}
				<div className='absolute w-full bottom-0 inset-0 p-4 flex flex-col overflow-auto'>{children}</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
