// localizaton
import BN from '../../assets/images/localization/bangladesh-flag.svg';
import RUS from '../../assets/images/localization/rus.svg';
import ENG from '../../assets/images/localization/eng.svg';

const Languages = [
  { value: 'ՀԱՅ', img: BN, id: 0 },
  { value: 'ENG', img: ENG, id: 2 },
];
export default function(state = Languages, action) {
  return state;
}
