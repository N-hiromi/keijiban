import * as React from 'react'
import { useParams, useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { PostText } from '../../components/PostText';
import Container from 'react-bootstrap/Container';

export const Show = () => {
	//threadのコメント一覧保持
	const [postList, setPostList] = React.useState([]);
	const [title, setTitle] = React.useState("");
	//urlからタイトルを取得
	const getTitle = useLocation().state.title;
	//urlからidを取得
	const threadId = useParams().thread_id;

	React.useEffect(() => {
		const getPostList = async() => {
			//postListの取得
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" + threadId + "/posts";
			const res = await fetch(req).catch((error) => {
				console.log(error);
				alert("テキストの取得に失敗しました");
			});
			const json = await res.json().catch((error) => {
				console.log(error);
				alert("jsonへの変換に失敗しました");
			});
			//threadListへapiを保持
			setPostList(json.posts);
		}
		getPostList();
		setTitle(getTitle);
	}, [postList]);

	return(
		<div>
			<Container>
				<h2>{ title }</h2>
				{postList && <ListGroup>{ postList.map((el, i) => <ListGroup.Item action key={ el.id }>{ el.post }</ListGroup.Item>)}</ListGroup>}
				<PostText threadId={ threadId } title={ title }/>
			</Container>
		</div>
	)
}