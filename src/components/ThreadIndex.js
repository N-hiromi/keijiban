import * as React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const ThreadIndex = () => {

	//threadリスト保持
	const [threadList, setThreadList] = React.useState([]);
	React.useEffect(() => {
		const getThreadList = async() => {
			//threadListの取得
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
			const res = await fetch(req).catch((error) => {
				console.log(error);
				alert("スレッドの取得に失敗しました");
			});
			const json = await res.json().catch((error) => {
				console.log(error);
				alert("jsonへの変換に失敗しました");
			});
			//threadListへapiを保持
			setThreadList(json);
		}
		getThreadList();
	}, []);

	//threadListを描写
	const titles = threadList.map((el) => {
		return <Link key={ el.id } to={ "/thread/" + el.id + "?title=" + el.title}  style={{ textDecoration: 'none' }}><ListGroup.Item action>{ el.title }</ListGroup.Item></Link>
	})

  return (
		<div>
			<h2 className="my-4">新着スレッド</h2>
			<ListGroup>{ titles }</ListGroup>
		</div>
	)
}