import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='bg-green dib tc br3 pa3 ma2 grow bw2 shadow-5'>
		  <img alt='' src={`https://robohash.org/test${id}?size=200x200`} />
		  <div>
		    <h1>The github robo</h1>
		    <p>{email}</p>
		  </div>
		</div>
	);
}

export default Card;