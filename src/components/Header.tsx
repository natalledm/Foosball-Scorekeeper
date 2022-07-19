import foosballImg from '../assets/foosball.jpg';

export default function Header() {
  return(
    <header>
      <img src={foosballImg} alt="Photo of a foosball table" />
    </header>
  )
}