import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function FeatureExplain() {
    return (
        <Accordion className='accordion_table'>
            <Accordion.Item eventKey='0'>
                <Accordion.Header className='accordion_table_header'>회의실 상단 아이콘 </Accordion.Header>
                <Accordion.Body className='accordion_table_body'>
                    <p className='accordion_mobile_txt mob'>(화면을 스크롤 하시면 내용을 확인 하실 수 있습니다.)</p>
                    <div className='feature_table_container'>
                        <Table striped bordered hover className='feature_table'>
                            <thead>
                                <tr>
                                    <th className='num_tag'>#</th>
                                    <th className='upper_img_th'>이미지</th>
                                    <th className='intro_tag'>설명</th>
                                    <th className='detail'>사용방법</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_session.png' /></td>
                                    <td>회의 진행 시간</td>
                                    <td>진행중인 회의의 진행시간을 알려줍니다.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_clip.png' /></td>
                                    <td>화면 고정</td>
                                    <td>일정 화면을 고정합니다.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_plus.png' /></td>
                                    <td>화면 확대</td>
                                    <td>화면을 확대합니다.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_minus.png' /></td>
                                    <td>화면 축소</td>
                                    <td>화면을 축소합니다.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_max.png' /></td>
                                    <td>전체 화면</td>
                                    <td>화면을 전체화면 모드로 전환합니다.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_cap.png' /></td>
                                    <td>화면 캡처</td>
                                    <td>회의중인 현재 화면을 캡처합니다.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_cir.png' /></td>
                                    <td>동그라미 화면 모드</td>
                                    <td>개인 화면을 동그라미 부분에만 나오게 합니다.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_cam.png' /></td>
                                    <td>카메라 상태</td>
                                    <td>현재 카메라가 켜져있거나 꺼져있음을 알려줍니다.</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><img className='upper_icon' alt='upper_btn' src='img/upperIcon/upper_bar_snd.png' /></td>
                                    <td>마이크 상태</td>
                                    <td>현재 마이크가 켜져있거나 꺼져있음을 알려줍니다.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header className='accordion_table_header'>회의실 사이드바 아이콘</Accordion.Header>
                <Accordion.Body className='accordion_table_body'>
                    <p className='accordion_mobile_txt mob'>(화면을 스크롤 하시면 내용을 확인 하실 수 있습니다.)</p>
                    <Table className='feature_table' striped bordered hover>
                        <thead>
                            <tr>
                                <th className='num_tag'>#</th>
                                <th className='btn_tag'>아이콘</th>
                                <th className='intro_tag'>설명</th>
                                <th className='detail'>사용방법</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_share.png' /></td>
                                <td>공유 버튼</td>
                                <td>진행중인 회의에 구성원을 초대합니다.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_hide_me.png' /></td>
                                <td>내 화면 숨기기 버튼</td>
                                <td>표시중인 내 화면을 숨기거나 나타냅니다.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_audio.png' /></td>
                                <td>마이크 활성화 버튼</td>
                                <td>마이크를 켜거나 끕니다.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_video.png' /></td>
                                <td>카메라 활성화 버튼</td>
                                <td>카메라를 켜거나 끕니다.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_screen_share.png' /></td>
                                <td>화면 공유</td>
                                <td>화면을 공유하거나 중지합니다.</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_screen_recording.png' /></td>
                                <td>화면 녹화 버튼</td>
                                <td>현재 회의를 녹화합니다.</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_screen_full.png' /></td>
                                <td>전체화면 버튼</td>
                                <td>전체화면을 활성화 하거나 비활성화 할 수 있습니다.</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_chat_room.png' /></td>
                                <td>채팅방 버튼</td>
                                <td>채팅방을 활성화 하거나 비활성화 할 수 있습니다.</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_translate.png' /></td>
                                <td>자동 번역 버튼</td>
                                <td>상대방의 언어를 실시간으로 번역해줍니다.</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_hand.png' /></td>
                                <td>손들기 버튼</td>
                                <td>손을 들거나 내릴수 있습니다.</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_whiteboard.png' /></td>
                                <td>화이트 보드</td>
                                <td>회의중에 활용 가능한 화이트보드를 제공합니다.</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_file_Share.png' /></td>
                                <td>파일 공유</td>
                                <td>회의실 참가자들에게 파일을 공유할 수 있습니다.</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_setting.png' /></td>
                                <td>설정</td>
                                <td>회의실에 대한 각종 설정을 할 수 있습니다.</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td><img className='side_bar_icon' alt='side_bar_btn' src='img/sideBarIcon/i_exit.png' /></td>
                                <td>회의실 나가기</td>
                                <td>현재 회의실에서 나갈 수 있습니다.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default FeatureExplain;