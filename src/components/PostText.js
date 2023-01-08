import * as React from 'react'

export const PostText = (props) => {
	const [textarea, setTextarea] = React.useState("");

	const postThread = () => {
		console.log(textarea);
		if (textarea.length > 100){
			alert("100文字以内で入力してください");
			//stateとtextareaの初期化
			setTextarea("");
			return false;
		}else{
			const req = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com//threads/" + props.threadId + "/posts";
			fetch(req, {
				method: "POST",
				body: JSON.stringify({"post": textarea}),
				headers: {'Content-type': 'application/json'}
			}).then((response) => {
				if(response.ok){
					console.log(response.json());
				}
			}).catch((error) => {
				console.log(error);
			}).finally(() => {
				//stateの初期化
				setTextarea("");
			})
		}
	}
	return(
		<form className="mt-4" onSubmit={ postThread }>
			<textarea value={ textarea } onChange={(e) => setTextarea(e.target.value)} required/>
			<input type="submit" />
		</form>
	)
}