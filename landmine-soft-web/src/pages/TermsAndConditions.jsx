import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThreeBackground from '../components/ThreeBackground'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ThreeBackground orbColor="#c4b5fd" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-balance">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-white/75">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto surface-card rounded-xl p-8 space-y-6" style={{ borderRadius: '12px' }}>
          <p className="text-sm leading-relaxed text-slate-600">
            By accessing this website and using our services, you agree to the following terms. If you do not agree, please
            discontinue use of the site and services.
          </p>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Use of Website</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Website content is provided for general information. You agree not to misuse the website, attempt unauthorized
              access, or disrupt service availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Intellectual Property</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              All text, graphics, branding, and code on this website are owned by or licensed to Landmine Soft unless stated
              otherwise. Unauthorized reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Service Engagement</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Project scope, timelines, deliverables, and payment terms are defined in signed agreements. In case of conflict,
              signed contractual terms prevail over this website content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We are not liable for indirect, incidental, or consequential damages arising from use of this website or reliance
              on publicly available information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Changes to Terms</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We may update these terms from time to time. Continued use of the website after changes means you accept the
              revised terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
