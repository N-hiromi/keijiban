import * as React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export const ThreadIndex = () => {

	//threadリスト保持
	const [threadList, setThreadList] = React.useState([]);
	React.useEffect(() => {
		const getThreadList = async() => {
			//threadListの取得
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
			const res = await fetch(req);
			const json = await res.json();

			//threadListへapiを保持
			setThreadList(json);
		}
		getThreadList();
	}, [threadList]);

	//threadListを描写
	const titles = threadList.map((el) => {
		return <ListGroup.Item key={ el.id }>{ el.title }</ListGroup.Item>
	})

  return (
		<div>
			<h2 className="mb-3">新着スレッド</h2>
			<ListGroup>{ titles }</ListGroup>
		</div>
	)
}