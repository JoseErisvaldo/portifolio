export default function Button({ button, color, colorText }) {
  return (
    <button className={`mt-6 bg-${color}-600 p-3 rounded text-${colorText}`}>
      {button}
    </button>
  )
}
