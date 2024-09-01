import Confetti from 'react-confetti';

const ConfettiEffect = () => (
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
    numberOfPieces={100}
    recycle={false}
  />
);

export default ConfettiEffect;
