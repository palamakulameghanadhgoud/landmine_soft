import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ThreeBackground orbColor="#22d3ee" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/75">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto surface-card rounded-xl p-8 space-y-6" style={{ borderRadius: '12px' }}>
          <p className="text-sm leading-relaxed text-slate-600">
            We respect your privacy and are committed to protecting your personal data. This policy explains how we collect,
            use, and safeguard information when you use our website or contact our team.
          </p>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We may collect your name, email address, phone number, company information, and project details that you submit
              through forms or direct communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">How We Use Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We use data to respond to inquiries, provide requested services, improve our offerings, and maintain website
              security and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Data Sharing</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We do not sell your personal data. Information may be shared with trusted service providers only when necessary
              to deliver services and operate our business.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Data Security</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We apply appropriate technical and organizational safeguards to protect data against unauthorized access, loss,
              or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Your Rights</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You may request access, correction, or deletion of your personal information by contacting us at
              hello@landminesoft.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
