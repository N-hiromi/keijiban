import * as React from 'react'
import { ThreadIndex } from '../components/ThreadIndex';
import Container from 'react-bootstrap/Container';

export const Home = () => {
	return (
		<Container>
			<ThreadIndex />
		</Container>
	)
}