import TaskItem from './taskItem/TaskItem';
import discord from '/src/assets/image/tasks/discord.webp';
import telegram from '/src/assets/image/tasks/telegram.webp';
import x from '/src/assets/image/tasks/x.webp';
import './tasks.sass';

const Tasks = () => {
	const taskData = [
		{
			key: 'discord',
			img: discord,
			text: `Subscribe on our discord channel.`,
			price: 60,
		},
		{
			key: 'telegram',
			img: telegram,
			text: 'Subscribe on our telegram channel.',
			price: 60,
		},
		{
			key: 'x',
			img: x,
			text: 'Subscribe on our x channel.',
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
