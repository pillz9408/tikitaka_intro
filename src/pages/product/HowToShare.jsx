import Accordion from 'react-bootstrap/Accordion';

function HowToShare() {
    return (
        <Accordion className='howToShare'>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>QR코드 공유</Accordion.Header>
                <Accordion.Body>
                    <p>1) 공유하기 버튼 클릭</p>
                        <img src='img/sideBarIcon/i_share.png'/>
                        
                    <p>2) QR코드 공유</p>
                        <img src='img/QR.png'/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
                <Accordion.Header className='howToShare.Header'>URL 공유</Accordion.Header>
                <Accordion.Body className='.howToShare.Body'>
                    <p className='body_text'>1) 공유하기 버튼 클릭</p>
                    <img className='howToImg1' alt='shareBtn' src='img/sideBarIcon/i_share.png' />
                    <p className='body_text'>2) URL 링크 복사 후 공유하기</p>
                    <img className='howToImg2' alt='shareURL' src='img/shareURL.png'></img>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default HowToShare;