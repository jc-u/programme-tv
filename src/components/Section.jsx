const Section = ({ time, title, type, isUnseen, image, duration, direct }) => {
	return (
		<div className="container">
			<div className="programme">
				<div className="programme__time">{time}</div>
				<div className="programme__img">
					<img src={image} alt={title} />
				</div>
				<div className="programme__content">
					<div className="programme__title">{title}</div>
					<div className="programme__type">{type}</div>
					<div className="programme__description">
						<div className="programme__duration">{duration}</div>
						<div className="programme__direct">
							{direct ? (
								<ul>
									<li>Direct</li>
								</ul>
							) : (
								""
							)}
						</div>
						<div className="programme__unseen">
							{isUnseen ? (
								<ul>
									<li>Inédit</li>
								</ul>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
