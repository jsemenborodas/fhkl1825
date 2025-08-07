export function Form() {
  const handleClick = () => {
    window.location.href = "/form";
  };
  return <button onClick={handleClick}></button>;
}
