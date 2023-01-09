import * as React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export const PostText = (props) => {
	const [textarea, setTextarea] = React.useState("");
	
	const nav = useNavigate();
	const loc = useLocation();
	const postThread = (e) => {
		e.preventDefault();
		try{
			if (textarea.length > 5){
				alert("5文字以内で入力してください");
				//stateとtextareaの初期化
				setTextarea("");
				throw new Error('5文字以内で入力してください');
			}
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com//threads/" + props.threadId + "/posts";
			fetch(req, {
				method: "POST",
				body: JSON.stringify({"post": textarea}),
				headers: {'Content-type': 'application/json'}
			}).catch(() => {
				throw new Error('postに失敗しました');
			})
			//postが上手くいけばページ更新
			nav('/thread/' + props.threadId, {state: {title: props.title}});
			console.log(loc);
		}catch(e){
			console.log("errorだよ");
			console.log(e.message);
		}finally{
			// stateの初期化
			setTextarea("");
		}
	}
	return(
		<form className="mt-4" onSubmit={ postThread }>
			<textarea value={ textarea } onChange={(e) => setTextarea(e.target.value)} required/>
			<input type="submit" />
		</form>
	)
}