type CollapsibleProps = {
	title: string;
	description?: string;
	children?: React.ReactNode;
};

export default function Collapsible({ title, description, children }: CollapsibleProps) {
	return (
		<div className='collapse collapse-plus mb-8 bg-secondary p-6 rounded-xl shadow-lg'>
			<input type='checkbox' />
			<div className='collapse-title'>
				<h2 className='text-3xl font-semibold mb-4'>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='collapse-content rounded-lg'>{children}</div>
		</div>
	);
}