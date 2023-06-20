import Accordion from 'react-bootstrap/Accordion';

function HowToShare() {
    return (
        <Accordion className='accordion'>
            <Accordion.Item eventKey='0' className='accordion_item'>
                <Accordion.Header className='accordion_header'>QR코드 공유</Accordion.Header>
                <Accordion.Body className='accordion_body'>
                    <p className='accordion_body_txt'>1) 공유하기 버튼 클릭</p>
                        <img className='accordion_img_btn' src='img/sideBarIcon/i_share.png'/>
                        
                    <p className='accordion_body_txt'>2) QR코드 공유</p>
                        <img className='accordion_img' src='img/QR.png'/>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className='accordion_item' eventKey='1'>
                <Accordion.Header className='accordion_header'>URL 공유</Accordion.Header>
                <Accordion.Body className='accordion_body'>
                    <p className='accordion_body_txt'>1) 공유하기 버튼 클릭</p>
                    <img className='accordion_img_btn' alt='shareBtn' src='img/sideBarIcon/i_share.png' />
                    <p className='accordion_body_txt'>2) URL 링크 복사 후 공유하기</p>
                    <img className='accordion_img' alt='shareURL' src='img/shareURL.png'></img>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default HowToShare;