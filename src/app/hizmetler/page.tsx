import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Novises İşitme Cihazları'nın sunduğu hizmetler: ücretsiz işitme testi, kişiselleştirilmiş cihaz önerisi, uyum süreci ve uzun vadeli bakım.",
  alternates: { canonical: "https://novises.com/hizmetler" },
};

const services = [
  {
    title: "Ücretsiz İşitme Testi",
    desc: "Odyometri cihazımızla klinik düzeyinde işitme testi yapıyoruz. Sonuçlarınızı anlaşılır biçimde açıklıyor, bir sonraki adımı birlikte belirliyoruz.",
    img: "/images/service-test.jpg",
    points: [
      "Ağrısız ve konforlu",
      "30 dakikada tamamlanır",
      "Sonuçlar hemen paylaşılır",
    ],
  },
  {
    title: "Kişiselleştirilmiş Cihaz Seçimi",
    desc: "İşitme kaybınızın tipine, yaşam stilinize ve bütçenize göre en uygun cihazı birlikte seçiyoruz. Hiçbir baskı olmadan, yalnızca doğru bilgi.",
    img: "/images/service-device.jpg",
    points: [
      "Dünya markalarından seçenekler",
      "Deneme süresi imkânı",
      "Bütçeye uygun çözümler",
    ],
  },
  {
    title: "Cihaz Uyum & Programlama",
    desc: "Seçilen cihaz, kullanım alışkanlıklarınıza göre programlanır. Uyum süreci boyunca düzenli kontrol ve ayar yapılır.",
    img: "/images/hero.jpg",
    points: [
      "Özel yazılım programlama",
      "Kullanıcı eğitimi",
      "Uyum takip randevuları",
    ],
  },
  {
    title: "Bakım, Temizlik & Servis",
    desc: "Cihazınızın ömrünü uzatmak ve performansını korumak için periyodik bakım ve teknik servis hizmeti sunuyoruz.",
    img: "/images/teknik.png",
    points: [
      "Profesyonel temizlik",
      "Pil ve aksesuar desteği",
      "Garanti kapsamı yönetimi",
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-subtitle">Hizmetlerimiz</span>
            <h1 className="section-title text-4xl md:text-5xl mb-6">
              İşitme sağlığınız için
              <br />
              her adımda yanınızdayız
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Testden cihaz takibine kadar tüm süreçleri tek çatı altında, uzman
              bir ekiple yürütüyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl text-brand-dark mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-brand-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="section-title mb-4">
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
          </h2>
          <p className="text-gray-600 mb-8">
            Sizi arayalım, birlikte konuşalım. Ücretsiz danışmanlık için randevu
            talep edin.
          </p>
          <Link href="/isitme-testi" className="btn-primary">
            Ücretsiz Randevu Al
          </Link>
        </div>
      </section>
    </>
  );
}
