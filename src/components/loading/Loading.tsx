import "./styles.css";

interface LoadingProps {
  color?: "black" | "yellow";
}

function Loading({ color = "yellow" }: LoadingProps) {
  return (
    <div className="loading-spinner-container">
      <div className={`loading-spinner ${color}`}></div>
    </div>
  );
}

export default Loading;
