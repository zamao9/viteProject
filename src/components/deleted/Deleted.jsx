import './deleted.sass';

const Deleted = () => {
	return (
		<section className='section deleted'>
			<div className='container deleted__container'>
				{/* About */}
				<div className='about'>
					<div className='about__wrapper'>
						<div className='about__header'>
							<div className='about__headline'>
								<span>About me</span>
							</div>
							{/* About Button */}
							<div className='account__button'>
								<button className='button account__button button--disabled'>Save</button>
							</div>
						</div>
						{/* About Textarea */}
						<textarea
							name='account-about'
							id=''
							className='text about__textarea textarea--reset'
							placeholder='...'
						></textarea>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Deleted;
