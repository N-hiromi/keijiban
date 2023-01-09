import * as React from 'react'
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

export const New = () => {
	const [textarea, setTextarea] = React.useState("");

	const nav = useNavigate();
	const postThread = (e) => {
		e.preventDefault();
		try{
			if (textarea.length > 5){
				alert("5文字以内で入力してください");
				//stateとtextareaの初期化
				setTextarea("");
				throw new Error('5文字以内で入力してください');
			}

			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";
			fetch(req, {
				method: "POST",
				body: JSON.stringify({"title": textarea}),
				headers: {'Content-type': 'application/json'}
			}).catch(() => {
				alert("スレッドの登録に失敗しました");
				throw new Error('スレッドの登録に失敗しました');
			})
			nav('/');
		}catch(e){
			console.log(e.message);
		}finally{
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