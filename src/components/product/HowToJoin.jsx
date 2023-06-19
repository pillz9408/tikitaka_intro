import Accordion from 'react-bootstrap/Accordion';

function HowToJoin() {
    return (
        <Accordion className='howToJoin'>
            <Accordion.Item eventKey='0' className='howToJoin.Item'>
                <Accordion.Header className='howToJoin.Header'>공유된 회의실 입장 방법 </Accordion.Header>
                <Accordion.Body className='howToJoin.Body'>
                    {/* <p className='body_text'>QR 코드 스캔</p>
                    <img src='img/QR.png' className='howToImg'/>
                     */}
                    <p className='body_text'>URL 입력</p>
                    <img src='img/useURL.png'  className='howToImg'/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1' className='howToJoin.Item'>
                <Accordion.Header className='howToJoin.Header'>새로운 회의실 생성 </Accordion.Header>
                <Accordion.Body className='howToJoin.Body'>
                    <p className='body_text'>1)자동으로 완성된 방 이름 사용하기</p>
                    <img src='img/randomRoom.png' alt='randomRoomImg' className='howToImg'/>
                    
                    <p className='body_text'>2) 직접 사용할 방 이름 입력 후 만들기</p>
                    <img src='img/customRoom.png'alt='customRoomImg' className='howToImg'/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default HowToJoin;