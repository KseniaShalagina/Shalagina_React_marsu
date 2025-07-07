import './ButtonJoin.css'

interface ButtonJoinProps {
  onClick: () => void;
}

function ButtonJoin({ onClick }: ButtonJoinProps) {
  return (
    <button className="join" onClick={onClick}>Записать ребёнка</button>
  );
}
export default ButtonJoin;