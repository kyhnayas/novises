import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Sakarya İşitme Cihazları | Novises",
  description:
    "Sakarya Adapazarı'nda işitme cihazı, ücretsiz işitme testi ve uzman danışmanlık. Novises İşitme Cihazları ile sağlıklı bir yaşama adım atın.",
  alternates: { canonical: "https://novises.com" },
};

const services = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
    title: "Ücretsiz Analiz",
    desc: "Klinik düzeyde işitme odyometri testi ile işitme seviyenizi profesyonel ortamda ölçüyoruz.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    title: "Kişiselleştirilmiş Cihaz",
    desc: "İşitme kaybınızın tipine ve yaşam tarzınıza göre en uygun işitme cihazını birlikte belirliyoruz.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    ),
    title: "Cihaz Uyum & Ayar",
    desc: "Cihazınızı kullanım alışkanlıklarınıza göre özelleştiriyor, her ziyarette kontrol ve ayar yapıyoruz.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    title: "Bakım & Servis",
    desc: "Cihazınızın temizliği, bakımı, teknik servisi, yedekparça ve aksesuar için uzman desteği sunuyoruz.",
  },
];

const steps = [
  {
    num: "01",
    title: "Randevu Alın",
    desc: "Telefon veya form üzerinden randevu oluşturun.",
  },
  {
    num: "02",
    title: "İşitme Testi",
    desc: "Uzman ekibimizle ücretsiz odyometri testinizi gerçekleştirin.",
  },
  {
    num: "03",
    title: "Değerlendirme",
    desc: "Sonuçlarınızı birlikte inceleyerek size en uygun çözümü belirleyelim.",
  },
  {
    num: "04",
    title: "Cihaz Uyumu",
    desc: "Seçilen cihazı size özel ayarlayıp takip sürecini başlatalım.",
  },
];

const testimonials = [
  {
    name: "Fatma H.",
    age: "68 yaşında",
    text: "Yıllarca duyma problemimi görmezden geldim. Novises'e gittiğimde çok sıcak karşıladılar, beni hiç aceleci hissettirmediler. Cihazımı taktığım ilk gün torunumun sesini net duydum.",
  },
  {
    name: "Mehmet K.",
    age: "72 yaşında",
    text: "Sakarya'da bu kadar güvenilir bir yer bulmak çok zor. Hem fiyat konusunda çok yardımcı oldular hem de cihazı taktıktan sonra da ilgilenmeye devam ettiler.",
  },
  {
    name: "Ayşe B.",
    age: "61 yaşında",
    text: "Annem için gittik. Çok sabırlı ve anlayışlı bir ekip. İşitme testi ücretsizdi, cihaz seçiminde hiç baskı yapmadılar. Teşekkürler.",
  },
];

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.2!2d30.3922!3d40.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f9a9c000001%3A0x1!2sQ95Q%2B8X+Adapazar%C4%B1%2C+Sakarya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-light via-white to-teal-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/60 rounded-bl-[120px] hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle">
              Sakarya'nın Güvenilir İşitme Merkezi
            </span>
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl text-brand-dark leading-tight mb-6">
              Sizi dinleyerek
              <br />
              <span className="text-brand-primary italic">başlarız…</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              İşitme sağlığınız için klinik düzeyinde ücretsiz işitme testi,
              kişiselleştirilmiş cihaz önerisi ve uzun vadeli bakım hizmeti
              sunuyoruz. Sakarya Eğitim ve Araştırma Hastanesi karşısında, size
              yakın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/isitme-testi" className="btn-primary text-base">
                Ücretsiz Randevu Al
              </Link>
              <Link href="/hizmetler" className="btn-outline text-base">
                Hizmetlerimiz
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gray-100">
              {[
                { val: "500+", label: "Mutlu Hasta" },
                { val: "%100", label: "Ücretsiz Test" },
                { val: "5★", label: "Google Puanı" },
              ].map((b) => (
                <div key={b.label}>
                  <p className="text-2xl font-bold text-brand-primary">
                    {b.val}
                  </p>
                  <p className="text-sm text-gray-500">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/4] max-w-md mx-auto lg:ml-auto">
              <Image
                src="/images/service-fitting.jpg"
                alt="İşitme cihazı uzmanı hasta ile görüşüyor"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    İşitme Testi
                  </p>
                  <p className="text-xs text-brand-primary">Tamamen Ücretsiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-subtitle">Hizmetlerimiz</span>
            <h2 className="section-title">
              İşitme sağlığınız için
              <br />
              kapsamlı çözümler
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card text-center group">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-primary transition-colors duration-300">
                  <svg
                    className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-subtitle">Süreç</span>
            <h2 className="section-title">Nasıl çalışır?</h2>
            <p className="text-gray-500 mt-4">
              Dört basit adımda işitme sağlığınızı geri kazanın.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-teal-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-5xl font-display font-bold text-teal-100 mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-subtitle">Görüşler</span>
            <h2 className="section-title">Hastalarımız ne diyor?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest mb-3 block">
                Randevu Al
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                Daha iyi duymaya
                <br />
                <span className="text-teal-300 italic">bugün başlayın.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Ücretsiz işitme testiniz için randevu talep edin. Ekibimiz en
                kısa sürede sizi arayacaktır.
              </p>
              <a
                href="tel:+905302406684"
                className="flex items-center gap-2 text-teal-300 hover:text-white transition-colors font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +90 530 240 66 84
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="section-subtitle">Konum</span>
            <h2 className="section-title">Bizi ziyaret edin</h2>
            <p className="text-gray-500 mt-3">
              Adapazarı Devlet Hastanesi karşısı, Sakarya
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 border border-gray-100">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Novises İşitme Cihazları Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}
