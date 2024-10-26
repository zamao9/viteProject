import TaskItem from './taskItem/TaskItem';
import telegram from '/src/assets/image/tasks/telegram.webp';
import logo from '/src/assets/image/tasks/logo.webp';
import './tasks.sass';

const Tasks = () => {
	const taskData = [
		{
			key: 'telegram',
			img: telegram,
			text: 'Subscribe on our telegram channel.',
			price: 60,
		},
		{
			key: 'sign-up',
			img: logo,
			text: `Sign up for a gaming account.`,
			price: 60,
		},
	];

	return (
		<section className='section tasks'>
			<div className='container tasks__container'>
				{/* Tasks Title */}
				<h2 className='title mb--22'>Tasks</h2>

				{/* Tasks List */}
				<ul className='tasks__list'>
					{taskData.map((task) => (
						<TaskItem key={task.key} img={task.img} text={task.text} price={task.price} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Tasks;
