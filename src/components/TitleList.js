import * as React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const TitleList = () => {
	//threadリスト保持
	const [threadList, setThreadList] = React.useState([]);

	const nav = useNavigate();
	React.useEffect(() => {
		const getThreadList = async() => {
			//threadListの取得
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
			try {
				const res = await fetch(req).catch((error) => {
					alert("スレッドの取得に失敗しました");
					throw new Error('スレッドの取得に失敗しました');
				});
				const json = await res.json().catch((error) => {
					alert("jsonへの変換に失敗しました");
					throw new Error('jsonへの変換に失敗しました');
				});
				//threadListへapiを保持
				setThreadList(json);
			}catch (e){
				console.log(e.message);
			}
		}
		getThreadList();
	}, []);

  return (
		<div>
			<h2 className="my-4">新着スレッド</h2>
			{threadList && <ListGroup>{ threadList.map((el, i) => <ListGroup.Item action key={ el.id } onClick={ () => nav('/thread/' + el.id, {state: {title: el.title}}) }>{ el.title }</ListGroup.Item>)}</ListGroup>}
		</div>
	)
}