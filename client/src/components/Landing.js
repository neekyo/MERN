import React from 'react';

const Landing = () => {
	return (
		<React.Fragment>
			<div className="landing">
				<div style={styles.title} className="title">
					<h3>IntelaCare</h3>
					<div className="desc">
						<h6>
							Dedicated to improving the lives and health circumstance of all populations by leveraging
							advanced technologies.
						</h6>
					</div>
					<p style={styles.copyright}>Copyright &copy; 2020 by IntelaCare </p>
				</div>
			</div>
		</React.Fragment>
	);
};

const styles = {
	title: {
		textAlign: 'center'
	},
	copyright: {
		position: 'absolute',
		bottom: 0,
		fontSize: '12px'
	}
};

export default Landing;
