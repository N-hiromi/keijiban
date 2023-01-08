import * as React from 'react'
import { useParams, useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { PostText } from '../../components/PostText';
import Container from 'react-bootstrap/Container';

export const Index = () => {
	//threadのコメント一覧保持
	const [textList, setTextList] = React.useState([]);
	const [title, setTitle] = React.useState("");

	//urlからタイトルを取得
	const getTitle = decodeURI(useLocation().search.substring(7));
	//urlからidを取得
	const threadId = useParams().thread_id;

	React.useEffect(() => {
		const getTextList = async() => {
			//textListの取得
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
			setTextList(json.posts);
			//スレッドの題名も保持
			setTitle(getTitle);
		}
		getTextList();
	}, []);
	let text = null;

	//textListに何も投稿が無いとエラーになるため
	const isText = (textList) => {
		if (textList){
			//textListを描写
			text = textList.map((el, i) => {
				return <ListGroup.Item key={ el.id }>{ el.post }</ListGroup.Item>
			})
		}else{
			return 
		}
	}
	isText(textList);

	return(
		<div>
			<Container>
				<h2>{ title }</h2>
				<ListGroup>{ text }</ListGroup>
				<PostText threadId={ threadId }/>
			</Container>
		</div>
	)
}