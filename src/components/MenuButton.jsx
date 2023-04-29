export default function MenuButton({ text, pd, mode, changeMode }) {
  return (
    <button
      type="button"
      onClick={() => changeMode(text)}
      className={`text-md ${mode === text ? "" : "hover:text-cyan-400"}
        ${pd} ${mode === text ? "text-cyan-200" : "text-cyan-500"}`}
    >
      {text}
    </button>
  );
}
