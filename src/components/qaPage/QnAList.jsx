import React from 'react';
import qnaData from './qnaData';

const QnAList = () => {

  return(
    <div>
      {qnaData.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.author}</p>
          {/* 추가적인 질문 정보 표시 */}
        </div>
      ))}
    </div>
  );
};

export default QnAList;