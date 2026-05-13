import type { Metadata } from "next";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "İşitme Testi ve Randevu | Sakarya",
  description:
    "Sakarya Adapazarı'nda ücretsiz işitme testi için randevu alın. Novises İşitme Cihazları ile işitme sağlığınızı profesyonel ortamda değerlendirin.",
  alternates: { canonical: "https://novises.com/isitme-testi" },
};

const faqs = [
  {
    q: "İşitme testi ağrılı mıdır?",
    a: "Hayır. Test tamamen ağrısız ve konforludur. Kulağa hiçbir müdahale yapılmaz; yalnızca farklı frekanslardaki seslere verdiğiniz tepkiler kayıt altına alınır.",
  },
  {
    q: "Test ne kadar sürer?",
    a: "Standart odyometri testi 20–30 dakika arasında tamamlanır. Değerlendirme görüşmesiyle birlikte yaklaşık 1 saat ayırmanız yeterlidir.",
  },
  {
    q: "Testi yaptırmak için daha önce işitme problemi yaşamam gerekiyor mu?",
    a: "Hayır. Profilaktik (önleyici) amaçlı test yaptırmak da son derece faydalıdır. Özellikle 50 yaş üzeri veya gürültülü ortamda çalışanlar için yıllık test önerilir.",
  },
  {
    q: "Randevu almadan gelebilir miyim?",
    a: "Mümkün olmakla birlikte randevulu gelmeniz bekleme süresini ortadan kaldırır ve uzman ekibimizi hazırlıklı tutar.",
  },
];

export default function IsitmeTestiPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-subtitle">İşitme Testi & Randevu</span>
            <h1 className="section-title text-4xl md:text-5xl mb-6">
              Ücretsiz işitme testiniz
              <br />
              için randevu alın
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tetkiklerimizi ücretsiz olarak takip ediyor ve klinik düzeyde
              analiz ediyoruz. Formu doldurun, sizi en uygun vakitte arayalım.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            <div className="bg-brand-light rounded-3xl p-8 md:p-10">
              <h2 className="font-display text-2xl text-brand-dark mb-2">
                Randevu Talebi
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Bilgilerinizi bırakın, ekibimiz sizi 1 iş günü içinde arasın.
              </p>
              <AppointmentForm />
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <svg
                className="w-4 h-4 text-brand-primary shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Bilgileriniz KVKK kapsamında güvende tutulur ve üçüncü taraflarla
              paylaşılmaz.
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-brand-dark mb-4">
                Test nasıl yapılır?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    num: "1",
                    title: "Karşılama & Anamnez",
                    desc: "Sizi karşılıyoruz, duyma şikayetlerinizi ve geçmişinizi dinliyoruz.",
                  },
                  {
                    num: "2",
                    title: "Odyometri Testi",
                    desc: "Ses geçirmez kabinde farklı frekanslardaki seslere tepkilerinizi ölçüyoruz.",
                  },
                  {
                    num: "3",
                    title: "Sonuç Değerlendirme",
                    desc: "Audiogram sonuçlarınızı anlaşılır şekilde açıklıyoruz.",
                  },
                  {
                    num: "4",
                    title: "Çözüm Önerisi",
                    desc: "Gerekli görülürse cihaz seçeneklerini tarafsız biçimde paylaşıyoruz.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 font-semibold text-brand-primary text-sm">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {step.title}
                      </p>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/hearing-test.jpg"
                alt="İşitme testi uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-2xl text-brand-dark mb-5">
                Sık sorulan sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div
                    key={f.q}
                    className="border border-gray-100 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-gray-800 mb-2">{f.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
