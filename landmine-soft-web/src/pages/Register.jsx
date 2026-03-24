import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Eye, EyeOff } from 'lucide-react'
import InputField from '../components/InputField'
import ThreeBackground from '../components/ThreeBackground'

function getPasswordStrength(password) {
  if (!password) return null
  if (password.length < 6) return { label: 'Weak', color: '#EF4444', width: '33%' }
  if (password.length <= 10) return { label: 'Medium', color: '#F59E0B', width: '66%' }
  return { label: 'Strong', color: '#22C55E', width: '100%' }
}

function validate(fields) {
  const errors = {}
  if (!fields.fullName.trim()) errors.fullName = 'Full name is required'
  else if (fields.fullName.trim().length < 3) errors.fullName = 'Name must be at least 3 characters'

  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!fields.password) {
    errors.password = 'Password is required'
  } else if (fields.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!fields.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const strength = getPasswordStrength(form.password)

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
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ backgroundColor: '#020617' }}
    >
      <ThreeBackground orbColor="#60A5FA" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="w-full max-w-lg rounded-2xl shadow-xl p-8 relative z-10"
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
              Create an account
            </h1>
            <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
              Join Landmine Soft today
            </p>
          </div>
        </div>

        {submitted ? (
          <div
            className="rounded-xl p-6 text-center"
            style={{ backgroundColor: '#F0FDF4', borderRadius: '12px' }}
          >
            <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#111827' }}>
              Account Created!
            </h3>
            <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
              Welcome to Landmine Soft. You can now sign in with your credentials.
            </p>
            <Link
              to="/login"
              className="inline-block px-6 py-2.5 text-sm font-semibold text-white rounded-lg no-underline"
              style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange('fullName')}
              error={errors.fullName}
            />
            <InputField
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange('email')}
              error={errors.email}
            />

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
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
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              {/* Strength indicator */}
              {strength && (
                <div className="mt-2">
                  <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: strength.width, backgroundColor: strength.color }}
                    />
                  </div>
                  <p className="text-xs mt-1 font-medium" style={{ color: strength.color }}>
                    {strength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  className={`w-full px-4 py-3 pr-12 rounded-lg border text-sm outline-none transition-all focus:ring-2 ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                  style={{ borderRadius: '8px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-sm font-bold text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: '#2563EB', borderRadius: '8px' }}
            >
              {loading ? 'Creating Account…' : 'Create Account'}
            </button>
          </form>
        )}

        {!submitted && (
          <p className="text-center text-sm mt-6" style={{ color: '#6B7280' }}>
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold no-underline hover:opacity-70 transition-opacity"
              style={{ color: '#2563EB' }}
            >
              Sign in
            </Link>
          </p>
        )}
      </motion.div>
    </div>
  )
}
