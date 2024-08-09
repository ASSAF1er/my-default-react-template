export default function Icon({
  onClick,
  name,
  className,
  size,
  active,
  style,
}) {
  return (
    <i
      onClick={onClick}
      className={`bi bi-${name}  ${className}`}
      style={{ fontSize: size, ...style }}
    ></i>
  );
}
