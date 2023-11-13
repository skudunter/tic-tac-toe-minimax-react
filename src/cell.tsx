export default function Cell({ id }: { id: number }) {
  return (
    <button
      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 ${
        id % 2 === 0 ? "bg-cyan-50" : "bg-slate-950"
      }`}
    ></button>
  );
}
