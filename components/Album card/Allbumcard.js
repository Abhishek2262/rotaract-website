export default function Allbum(props) {
  return (
    <div
      data-aos="flip-left"
      className="bg-red-300 p-4  min-h-[17rem] min-w-[27.5rem]"
    >
      <h3 className="text-center">{props.name}</h3>
    </div>
  );
}
