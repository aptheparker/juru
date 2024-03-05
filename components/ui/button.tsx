export default function Button(prop: {
  children: string;
  onClick: () => void;
  width?: string;
  height?: string;
}) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={prop.onClick}
      style={{ width: prop.width, height: prop.height }}
    >
      {prop.children}
    </button>
  );
}
