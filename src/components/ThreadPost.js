import * as React from 'react'

export const ThreadPost = () => {
	const [textarea, setTextarea] = React.useState("");

	const threadPost = ()=> {
		const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
		fetch(req, {
			method: "POST",
			body: JSON.stringify({"title": textarea}),
			headers: {'Content-type': 'application/json'}
		}).then((response) => {
			if(response.ok){
				console.log(response.json());
			}
		}).catch((error) => {
			console.log(error);
		})
		//stateとtextareaの初期化
		document.querySelector('textarea').value = "";
		setTextarea("");

	}
	return (
		<div>
			<textarea value={ textarea } onChange={(e) => setTextarea(e.target.value)} />
			<button onClick={ threadPost }>送信</button>
		</div>
	)
}