import { useState } from "react";
const flagsData = [
  {
    name: 'Austria',
    img: 'https://www.worldometers.info/img/flags/small/tn_au-flag.gif'
  }, {
    name: 'Mongolia',
    img: 'https://www.worldometers.info/img/flags/small/tn_mg-flag.gif'
  }, {
    name: 'Myanmar',
    img: 'https://www.worldometers.info/img/flags/small/tn_bm-flag.gif'
  }, {
    name: 'Oman',
    img: 'https://www.worldometers.info/img/flags/small/tn_mu-flag.gif'
  }, {
    name: 'Egypt',
    img: 'https://www.worldometers.info/img/flags/small/tn_eg-flag.gif'
  }, {
    name: 'Finland',
    img: 'https://www.worldometers.info/img/flags/small/tn_fi-flag.gif'
  }, {
    name: 'Greece',
    img: 'https://www.worldometers.info/img/flags/small/tn_gr-flag.gif'
  }, {
    name: 'Holy See',
    img: 'https://www.worldometers.info/img/flags/small/tn_vt-flag.gif'
  }, {
    name: 'Indonesia',
    img: 'https://www.worldometers.info/img/flags/small/tn_id-flag.gif'
  }, {
    name: 'Iceland',
    img: 'https://www.worldometers.info/img/flags/small/tn_ic-flag.gif'
  }, {
    name: 'Japan',
    img: 'https://www.worldometers.info/img/flags/small/tn_ja-flag.gif'
  }, {
    name: 'Malaysia',
    img: 'https://www.worldometers.info/img/flags/small/tn_my-flag.gif'
  }, {
    name: 'Mexico',
    img: 'https://www.worldometers.info/img/flags/small/tn_mx-flag.gif'
  }
]

const FrontCard = (props) => {
  return (
  <div className="front">
    <img src={props.img}></img>
  </div>
  )
}

const BackCard = (props) => {
  return (
    <div className="back">
      <p>{props.name}</p>
    </div>
  )
}

const Card = () => {
  const [index, setIndex] = useState(0)
  const [state, setState] = useState('front')

  const front = <FrontCard img={flagsData[index].img}/>
  const back = <BackCard name={flagsData[index].name}/>
  const [card, setCard] = useState(front)



  const handleClick = () => {
    setState(state === 'front' ? 'back': 'front')
    setCard(state === 'front' ? front: back)
  }

  return (
  <div className="card-container" onClick={handleClick}>
    {card}
  </div>
  )

}


export default Card 