export default function Button({ button, color, colorText, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mt-6 bg-${color}-600 p-3 rounded text-${colorText}`}
    >
      {button}
    </button>
  )
}
