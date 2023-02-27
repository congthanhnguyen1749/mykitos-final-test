import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import backCard from '../../../../../assets/images/cards/card_back_0.jpg'
import { DailyCardReducer } from 'store/slice/DaiLycard';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterDailyCard } from 'store/slice/DaiLycard/selectors';
export interface dataCard {
  data: any
}

export const SpreadCardHome = (props: dataCard) => {
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const { DailyCardRDucer } = DailyCardReducer()
  const dispatch = useDispatch()
  const selecIndexCard = useSelector(RegisterDailyCard)
  const chooseCard1: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }
  const chooseCard2: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }
  const chooseCard3: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }
  const chooseCard4: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }
  const chooseCard5: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }
  const chooseCard6: any = (e) => { dispatch(DailyCardRDucer.GetIndexCard(e)); }

  return (
    <Box>
      <Box sx={{
        width: mobile ? '250px' : '250px',
        height: mobile ? '100px' : '140px',

        '& .cards': {
          width: mobile ? '80px' : '150px',
          height: mobile ? '120px' : '220px'
        },
        '& .cards.suitdiamonds': {
          left: mobile ? '-40px' : '-200px',
          top: mobile ? '-15px' : '-15px',
          transform: mobile ? 'rotate(0deg)' : 'rotate(0deg)',
          ":hover": {
            transition: 'all .4s linear',
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem #ff2c52'
          }
        },
        '& .cards.suithearts': {
          left: mobile ? '10px' : '-100px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0deg)' : 'rotate(0deg)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem #ff2c52'
          }
        },
        '& .cards.suitclubs': {
          left: mobile ? '60px' : '0px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0deg)' : 'rotate(0deg)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem #ff2c52'
          }
        },
        '& .cards.suitspades': {
          left: mobile ? '110px' : '100px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0)' : 'rotate(0)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem blue'
          }
        },
        '& .cards.suitspades2': {
          left: mobile ? '160px' : '200px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0)' : 'rotate(0)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem blue'
          }
        },
        '& .cards.suitspades3': {
          left: mobile ? '210px' : '300px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0)' : 'rotate(0)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem #ff2c52'
          }
        },
        '& .cards.suitspades4': {
          left: mobile ? '250px' : '400px',
          top: mobile ? '-15px' : '-15px',
          transition: '.4s all ease',
          transform: mobile ? 'rotate(0)' : 'rotate(0)', ":hover": {
            transform: 'translateY(-25px)',
            zIndex: 1,
            boxShadow: ' 0 0 0.1rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #ff2c52, 0 0 0.3rem #ff2c52, 0 0 0.6rem #ff2c52, inset 0 0 0.6rem #ff2c52'
          }
        },
        
      }} className="hand spread">
        <Box onClick={() => chooseCard1(1)} sx={{ border: '2px solid white' }} className="cards suitdiamonds">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />
        </Box>
        <Box onClick={() => chooseCard2(2)} sx={{ border: '2px solid white' }} className="cards suithearts">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />

        </Box>
        <Box onClick={() => chooseCard3(3)} sx={{ border: '2px solid white' }} className="cards suitclubs">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />

        </Box>
        <Box onClick={() => chooseCard4(4)} sx={{ border: '2px solid white' }} className="cards suitspades">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />

        </Box>
        <Box onClick={() => chooseCard5(5)} sx={{ border: '2px solid white' }} className="cards suitspades2">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />

        </Box>
        <Box onClick={() => chooseCard6(6)} sx={{ border: '2px solid white' }} className="cards suitspades3">
          <img style={{ width: '100%', height: '100%' }} src={backCard} alt="" />

        </Box>

      </Box></Box>
  )
}
