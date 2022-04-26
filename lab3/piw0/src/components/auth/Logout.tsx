interface Props {
  handleLogout: () => void;
}

export default function Logout({ handleLogout }: Props) {
  return (
    <button onClick={handleLogout} type="button">
      Logout
    </button>
  );
}
