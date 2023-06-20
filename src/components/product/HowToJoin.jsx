import Accordion from 'react-bootstrap/Accordion';

function HowToJoin() {
    return (
        <Accordion className='accordion'>
            <Accordion.Item eventKey='0' className='accordion_item'>
                <Accordion.Header className='accordion_header'>공유된 회의실 입장 방법 </Accordion.Header>
                <Accordion.Body className='accordion_body'>
                    <p className='accordion_body_txt'>1) QR 코드 스캔</p>
                    <img className='accordion_img' src='img/QR.png' />
                    
                    <p className='accordion_body_txt'>2) URL 입력</p>
                    <img className='accordion_img' src='img/useURL.png'/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1' className='accordion_item'>
                <Accordion.Header className='accordion_header'>새로운 회의실 생성 </Accordion.Header>
                <Accordion.Body className='accordion_body'>
                    <p className='accordion_body_txt'>1)자동으로 완성된 방 이름 사용하기</p>
                    <img src='img/randomRoom.png' className='accordion_img'/>
                    
                    <p className='accordion_body_txt'>2) 직접 사용할 방 이름 입력 후 만들기</p>
                    <img src='img/customRoom.png' className='accordion_img'/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default HowToJoin;