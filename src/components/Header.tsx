import foosballImg from "../assets/foosball.jpg";

export default function Header() {
  return (
    <header>
      <img src={foosballImg} alt="Photo of a foosball table" />
      <h1>Foosball Scorekeeper</h1>
    </header>
  );
}
