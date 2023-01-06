import * as React from 'react'
import { ThreadIndex } from '../components/ThreadIndex';
import { ThreadPost } from '../components/ThreadPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
	const [visible, setVisible] = React.useState(false);

	return (
		<Container>
			<Row className="mt-3">
				<Col><ThreadIndex /></Col>
				<Col>
					<button className="mb-3" onClick={ ()=> setVisible(!visible) }>{ visible ? "スレッド投稿しない" : "スレッド投稿する"}</button>
					<div style={{ display: visible ? "block" : "none" }}><ThreadPost /></div>
				</Col>
			</Row>
		</Container>
	)
}