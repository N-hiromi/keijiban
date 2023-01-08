import * as React from 'react'
import Container from 'react-bootstrap/Container';

export const New = () => {
	const [textarea, setTextarea] = React.useState("");

	const postThread = () => {
		if (textarea.length > 30){
			alert("30文字以内で入力してください");
			//stateとtextareaの初期化
			setTextarea("");
			return false;
		}else{
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
				alert("スレッドの登録に失敗しました");
			})
		//stateの初期化
		setTextarea("");
		}
	}
	return (
		<Container>
			<h2>スレッド新規作成</h2>
			<form className="mt-4" onSubmit={ postThread }>
				<textarea value={ textarea } onChange={(e) => setTextarea(e.target.value)} required />
				<input type="submit" />
			</form>
		</Container>
	)
}