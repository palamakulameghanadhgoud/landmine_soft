// Props: label, type, placeholder, value, onChange, error
export default function InputField({ label, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" style={{ color: '#0f172a' }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 ${error ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-500'}`}
        style={{ borderRadius: '8px' }}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
