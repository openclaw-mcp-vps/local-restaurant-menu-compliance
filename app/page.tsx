export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Menu Compliance,<br />
          <span className="text-[#58a6ff]">Done in Seconds</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your restaurant menu PDF or image. Our AI scans every item and flags missing allergen warnings and calorie counts required by local law — before inspectors do.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: '📄', title: 'PDF & Image Upload', desc: 'Drag-and-drop menus in any format.' },
          { icon: '⚠️', title: 'Allergen Flagging', desc: 'Detects missing warnings for all 14 major allergens.' },
          { icon: '📊', title: 'Calorie Audit', desc: 'Checks calorie disclosure against FDA & EU rules.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited menu scans',
              'Allergen & calorie compliance reports',
              'PDF export of violations',
              'Regulation updates (FDA, EU, UK)',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which regulations does MenuCheck cover?',
              a: 'We currently support FDA menu labeling rules (US), EU Food Information Regulation (EU 1169/2011), and UK allergen labeling requirements. More regions are added regularly.'
            },
            {
              q: 'What file formats can I upload?',
              a: 'You can upload PDF menus, JPG, PNG, and WEBP images. Our OCR engine extracts all text and menu items automatically.'
            },
            {
              q: 'Is my menu data kept private?',
              a: 'Yes. Uploaded menus are processed securely and never shared with third parties. Files are deleted from our servers after the compliance report is generated.'
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} MenuCheck. All rights reserved.
      </footer>
    </main>
  )
}
