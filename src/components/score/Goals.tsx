export type GoalsProps = {
  player1: number;
  player2: number;
};

export default function Goals(props: GoalsProps) {
  const { player1, player2 } = props;

  return (
    <div>
      {player1} x {player2}
    </div>
  );
}
