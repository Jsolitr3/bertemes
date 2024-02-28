type CollapsibleProps = {
	title: string;
	description?: string;
	children?: React.ReactNode;
};

export default function Collapsible({ title, description, children }: CollapsibleProps) {
	return (
		<div className='collapse collapse-plus mb-8 bg-secondary p-6 rounded-lg shadow-lg'>
			<input type='checkbox' />
			<div className='collapse-title'>
				<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='collapse-content bg-base-100 rounded-lag'>{children}</div>
		</div>
	);
}
