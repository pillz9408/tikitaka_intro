const qnaData = [
    {
        id: 1,
        author: 'User1',
        title: '질문 1',
        content: '내용 1',
        date: '2023-06-19',
        answers: [
            { id: 1, author: 'User2', content: '답변 1', date: '2023-06-20' },
            { id: 2, author: 'User3', content: '답변 2', date: '2023-06-21' },
        ],
    },
    {
        id: 2,
        author: 'amouge',
        title: '그 번역은 어떻게 쓰는건가요?',
        content: '번역을 쓰고싶은데 어떻게 써야할지',
        date: '2023-06-19',
        answers: [
            { id: 1, author: 'User2', content: '답변 1', date: '2023-06-20' },
            { id: 2, author: 'User3', content: '답변 2', date: '2023-06-21' },
        ],
    }
    // ... 다른 질문과 답변 데이터 추가
];

export default qnaData;
