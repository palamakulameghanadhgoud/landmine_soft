import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Eye, EyeOff } from 'lucide-react'
import InputField from '../components/InputField'
import ThreeBackground from '../components/ThreeBackground'

function validate(fields) {
  const errors = {}
  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!fields.password) {
    errors.password = 'Password is required'
  }
  return errors
}

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate async login
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ backgroundColor: '#020617' }}
    >
      <ThreeBackground orbColor="#93C5FD" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="w-full max-w-md rounded-2xl shadow-xl p-8 relative z-10"
        style={{
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.45)',
        }}
      >
        {/* Brand */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#1A3C6E' }}
            >
              <Code size={20} color="white" />
            </div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1A3C6E' }}
            >
              Landmine Soft
            </span>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
              Welcome back
            </h1>
            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
              Sign in to your account
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange('email')}
            error={errors.email}
          />

          {/* Password with toggle */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange('password')}
                className={`w-full px-4 py-3 pr-12 rounded-lg border text-sm outline-none transition-all focus:ring-2 ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                style={{ borderRadius: '8px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-end mb-6">
            <a href="#" className="text-sm font-medium no-underline hover:opacity-70 transition-opacity" style={{ color: '#2563EB' }}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 text-sm font-bold text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: '#6B7280' }}>
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-semibold no-underline hover:opacity-70 transition-opacity"
            style={{ color: '#2563EB' }}
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
