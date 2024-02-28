import { forwardRef } from 'react';

type CollapsibleProps = {
	title: string;
	collapsed?: boolean;
	description?: string;
	children?: React.ReactNode;
};

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
	({ title, collapsed = true, description, children }, ref) => {
		return (
			<div
				ref={ref}
				className='collapse collapse-plus mb-8 bg-secondary p-6 rounded-xl shadow-lg text-secondary-content'
			>
				<div className='absolute z-0 w-full h-full opacity-20 top-0 left-0 bg-gradient-to-tr from-transparent from-25% to-white' />
				<input type='checkbox' defaultChecked={!collapsed} />
				<div className='collapse-title'>
					<h2 className='sm:text-3xl text-2xl font-semibold mb-4'>{title}</h2>
					<p className='sm:text-xl text-lg'>{description}</p>
				</div>
				<div className='collapse-content bg-secondary rounded-lg text-base-100'>{children}</div>
			</div>
		);
	}
);

Collapsible.displayName = 'Collapsible';
export default Collapsible;
