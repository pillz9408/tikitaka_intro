import React from "react";
import qnaData from "./qnaData";

const QnaDetail = ({ questionId }) => {
    const question = qnaData.find((q) => q.id === questionId);
    if (!question) {
      return <div>질문이 없습니다.</div>;
    }
  
    return (
      <div>
        <h2>{question.title}</h2>
        <p>{question.author}</p>
        <p>{question.content}</p>
        <h3>답변</h3>
        {question.answers.map((answer) => (
          <div key={answer.id}>
            <p>{answer.author}</p>
            <p>{answer.content}</p>
          </div>
        ))}
      </div>
    );
  };

  export default QnaDetail;