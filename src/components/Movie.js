export default function Movie(props) {
  // props are read-only
  return (
    <p>{props.title} ({props.year})</p>
  );
}