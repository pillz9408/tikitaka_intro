import React, { useState } from "react";
import qnaData from "./qnaData";


const QnAForm = () => {
    const [newQuestion, setNewQuestion] = useState({ author: '', title: '', content: '' });

    const handleInputChange = (e) => {
        setNewQuestion((prevQuestion) => ({
            ...prevQuestion,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = {
            id: qnaData.length + 1,
            author: newQuestion.author,
            title: newQuestion.title,
            content: newQuestion.content,
            answers: [],
        };
        qnaData.push(question); // 새로운 질문을 qnaData에 추가
        setNewQuestion({ author: '', title: '', content: '' });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="author" value={newQuestion.author} onChange={handleInputChange} placeholder="작성자" />
                <input type="text" name="title" value={newQuestion.title} onChange={handleInputChange} placeholder="제목" />
                <textarea name="content" value={newQuestion.content} onChange={handleInputChange} placeholder="내용" />
                <button type="submit">질문 작성</button>
            </form>
        </div>
    );
};
export default QnAForm;