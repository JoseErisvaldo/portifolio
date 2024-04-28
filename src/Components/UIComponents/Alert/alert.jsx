export default function Alert({ alert, color }) {
  return (
    <div className={`bg-${color}-600 p-2 rounded text-white mb-3 mt-3 `}>
      {alert}
    </div>
  )
}
