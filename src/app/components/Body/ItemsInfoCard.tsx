import { Box, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useLayoutEffect } from 'react';
// arrow
import arrowTop from '../../../assets/images/Body/icon/arrow/arrowTop.svg';
import './flipCard.css';
import arrowBottom from '../../../assets/images/Body/icon/arrow/arrowBottom.svg';
// end arrow
// cart
import cardtest from '../../../assets/images/cards/card_back_2.png';
import { useLocation } from 'react-router-dom';
// end card
export const ItemsInfoCard = () => {
  const [arrowAndShowBox, setArrowAndShowBox] = React.useState(true);
  const mobile = useMediaQuery('(max-width: 755px)');
  const widthMobileInfoItems = mobile ? '343px' : '1170px';
  const widthMobilebox = mobile ? '220px' : '250px';
  const sizeTextLable = mobile ? 18 : 24;
  const changeTextSizeBottom = mobile ? 11 : 20;
  const changeTextSizeTop = mobile ? 'auto' : 270;
  const changeActive = () => {
    setArrowAndShowBox(!arrowAndShowBox);
  };
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);
  return (
    // main
    <Flex
      mt={5} opacity={0} className="chnagehidebut"
      justify={'center'}
      onClick={() => changeActive()}
      bg={'rgba(0, 0, 0, 0.4)'}
      sx={{
        boxShadow: '4px 4px 4px rgba(255, 255, 255, 0.25)',
        border: '1px solid #FFFFFF',
      }}
      w={widthMobileInfoItems}
    >
      {/* right */}
      <Box mih={'109px'} p={15} w={'100%'}>
        <Flex justify={'center'} align={'center'} w={'100%'} h={109}>
          <Flex
            justify={'flex-left'}
            align={'center'}
            w={'90%'}
            h={79}
            sx={{ borderBottom: '0.5px solid #FFFFFF' }}
          >
            <Image src={cardtest} width={34} height={53} />
            <Box ml={10}>
              <Text fw={700} fz={18} lh={2} color={'rgba(255, 255, 255, 1)'}>
                Tổng quan tình yêu
              </Text>
              <Text fw={500} fz={13} lh={1.4} color={'rgba(159, 187, 216, 1)'}>
                Chuyện tình cảm sắp tới của bạn
              </Text>
            </Box>
          </Flex>
          {/* left */}
          <Flex
            justify={'center'}
            align={'center'}
            w={'10%'}
            h={79}
            sx={{ borderBottom: '0.5px solid #FFFFFF' }}
          >
            {arrowAndShowBox ? (
              <Image
                width={50}
                height={50}
                sx={{ objectFit: 'contain' }}
                src={arrowTop}
              />
            ) : (
              <Image
                width={50}
                height={50}
                sx={{ objectFit: 'contain' }}
                src={arrowBottom}
              />
            )}
          </Flex>
        </Flex>
        {/* bottom */}
        {arrowAndShowBox ? (
          <Flex direction={'column'} w={'100%'}>
            <Flex align={'center'} w={'100%'} h={changeTextSizeTop}>
              <Flex
                justify={'center'}
                align={'center'}
                w={widthMobilebox}
                h={'100%'}
              >
                <img src={cardtest} alt="" />
              </Flex>
              <Box w={'100%'} h={'100%'} ml={8}>
                <Text fw={700} size={sizeTextLable} lh={2.3} color={'white'}>
                  Seven of Swords
                </Text>
                <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                  Sự phản bội, lừa dối, chiếm lấy rồi bỏ trốn, lén lút
                </Text>
                <br />
                <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                  Seven of Swords cho thấy một người đàn ông lén trốn ra khỏi
                  trại quân đội với năm thanh kiếm trong tay. Hai thanh kiếm cắm
                  trên mặt đất, sau lưng ông. Gương mặt của ông cho thất sự tự
                  tin và ngạo nghễ, như thể chắc chắn rằng phi vụ trôm cắp đã
                  thành công. Tuy nhiên, các binh sĩ đã phát hiện ra hắn.
                </Text>
              </Box>
            </Flex>
            <Flex
              sx={{ borderTop: '1px dashed white' }}
              m={'10px 0 10px 0'}
              w={'100%'}
            >
              <Text
                mt={10}
                align="left"
                fw={400}
                size={changeTextSizeBottom}
                lh={1.5}
                color={'white'}
              >
                Hình ảnh tiêu biểu của lá bài thường là hình ảnh một người cầm
                năm cây kiếm trên tay, phía xa còn hai cây kiếm nữa, gần đó là
                một doanh trại. Người cầm kiếm dáng vẻ vội vàng hấp tấp, ngoái
                nhìn lại phía sau. Hai cây kiếm bỏ lại có thể do người vác kiếm
                không đủ khả năng hoặc không đủ thời gian để lấy toàn bộ. Tư
                tưởng chủ đạo của lá bài là những hoàn cảnh đảo ngược, biến đổi
                thay chiều theo hướng tiêu cực, kế hoạch không hoàn hảo hoặc
                tình trạng bị vu khống. Về công việc: Lá bài ám chỉ kế hoạch
                không đạt được trọn vẹn. Nếu dự tính ban đầu cho dự án hay công
                ty, thì đây là báo hiệu rằng những dự tính của mình không hoàn
                dự được, sẽ phải gặp những vấn đề rắc rối. Các kế hoạch nếu có
                cũng sẽ bị đảo lộn một phần và không thể kết thúc một cách hoàn
                hảo. Dù vậy lá bài cũng chỉ rõ là bạn sẽ thành công, nhưng ở
                chừng mực thấp hơn dự định. Vì vậy, không nên quá lo lắng mà chỉ
                nên thoải mái với kết quả mình đạt được.Bạn cũng cẩn thận với
                các trường hợp bị quy trách nhiệm, hoặc bị đổ tội trong công
                việc nhé. Về tiền bạc: Lá bài báo trước sự thiếu hụt các khoảng
                nợ cũ, hoặc sự bấp bênh không mong muốn về tiền bạc. Nếu bạn có
                khoảng cho vay và đến hẹn lấy lãi hay thu hồi vốn, thì có lẽ bạn
                không may mắn lấy được toàn bộ. Nếu là một khoảng đầu tư sinh
                lợi thì bạn sẽ phải đợi dài hơn để thu lại được phần góp của
                mình. Những kế hoạch thu tiền hay các dự trù về tiền bạc ít
                nhiều sẽ bị thiếu hụt. Bạn nên chuẩn bị cho mình những thứ nhất
                thiết phải mua, và những thứ có thể mua sau để cân đối số tiền
                vào thời điểm này. Về bè bạn, đồng nghiệp: lá bài là cảnh báo
                không may mắn về các mối quan hệ bạn bè và đồng nghiệp. Bạn có
                thể gặp nhiều hiểu lầm hay vu khống bởi những người xung quanh.
                Bạn bè hay đồng nghiệp có thể là nguyên nhân trực tiếp hay gián
                tiếp đến các vấn đề này. Bạn nên cẩn trọng trong lời nói và hành
                động để hạn chế tối đa sự hiểu lầm hay gây hấn vì nó sẽ tạo nên
                những tình huống phát sinh tiêu cực cho bạn. Mặc khác là lá bài
                cũng cho thấy một số bạn bè của bạn sẽ tư vấn và hướng dẫn bạn
                thoát khỏi các vấn đề này. Về gia đình, người thân: lá bài này
                không chỉ trực tiếp lên các vấn đề gia đình. Tuy nhiên, nó có
                thể bị ảnh hưởng gián tiếp từ các vấn đề tiền bạc hay bạn bè.
                Vấn đề thiếu hụt tiền bạc có thể ảnh hưởng đến các dự định chi
                tiêu cho gia đình. Bạn có thể hoãn các khoảng chi tiêu đó cho
                đến khi phù hợp, nhưng nó chắc chắn sẽ gây ra xáo trộn ít nhiều
                đến công việc và đời sống gia đình. Lá bài cũng ghi nhận rằng
                bạn có thể tìm được người tư vấn tốt trong gia đình.
              </Text>
            </Flex>
          </Flex>
        ) : (
          ''
        )}
      </Box>
    </Flex>
  );
};
