import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "İşitme cihazı, işitme testi ve Novises hizmetleri hakkında en çok sorulan soruların cevapları.",
  alternates: { canonical: "https://novises.com/sss" },
};

const faqs = [
  {
    category: "İşitme Testi",
    items: [
      { q: "İşitme testi ücretsiz mi?", a: "Evet. Novises'te ilk işitme testi tamamen ücretsizdir. Herhangi bir ücret ödemeniz gerekmez." },
      { q: "İşitme testini nasıl yaptırabilirim?", a: "Telefon ile arayarak, web sitemizden randevu formu doldurarak ya da doğrudan adresimize gelerek test yaptırabilirsiniz." },
      { q: "İşitme testi ne kadar sürer?", a: "Standart odyometri testi 20–30 dakika sürer. Değerlendirme görüşmesiyle birlikte yaklaşık 1 saat." },
    ],
  },
  {
    category: "İşitme Cihazı",
    items: [
      { q: "İşitme cihazı ne zaman gerekli olur?", a: "Konuşmaları anlamada güçlük çekiyorsanız, insanların size 'daha yüksek konuş' demesini sık duyuyorsanız ya da TV sesini yüksek açmak zorunda kalıyorsanız işitme testi yaptırmanızı öneririz." },
      { q: "Hangi markaları satıyorsunuz?", a: "Dünya'nın önde gelen işitme cihazı markalarını stokluyor ve size en uygun teknolojiyi öneriyoruz. Markalar hakkında bilgi için bizi arayın." },
      { q: "Cihazı deneme imkânı var mı?", a: "Evet. Belirli süreli deneme programları mevcut olup uzmanımız size en uygun seçeneği sunar." },
      { q: "Cihaz fiyatları ne kadar?", a: "Fiyatlar cihazın teknoloji seviyesine ve özelliklerine göre değişir. Her bütçeye uygun seçenek sunabiliyoruz. Ayrıntı için randevu alın." },
    ],
  },
  {
    category: "Bakım & Servis",
    items: [
      { q: "Cihazımın bakımını yaptırmam gerekiyor mu?", a: "Evet. Düzenli profesyonel temizlik ve kontrol cihazınızın ömrünü uzatır ve performansını korur. 3–6 ayda bir bakım önerilir." },
      { q: "Başka yerden aldığım cihaz için hizmet veriyor musunuz?", a: "Çoğu durumda evet. Cihazınızla birlikte bize gelmeniz yeterlidir, durumunu değerlendiririz." },
    ],
  },
  {
    category: "Konum & Erişim",
    items: [
      { q: "Nerede bulunuyorsunuz?", a: "Adapazarı Devlet Hastanesi karşısında, Güllük Mahallesi Adnan Menderes Caddesi Sağlık Sokak no:3 iç kapı 108, Adapazarı/Sakarya." },
      { q: "Otopark var mı?", a: "Cadde üzerinde ve çevresinde otopark imkânı mevcuttur." },
    ],
  },
];

export default function SssPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">SSS</span>
          <h1 className="section-title text-4xl md:text-5xl mb-6">
            Sık sorulan sorular
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Aklınızdaki soru burada yoksa bizi aramaktan çekinmeyin.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-2xl text-brand-primary mb-6 pb-3 border-b border-teal-100">
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.q} className="border border-gray-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                    <p className="font-semibold text-gray-800 mb-3">{item.q}</p>
                    <p className="text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-brand-light rounded-3xl p-8 text-center">
            <h2 className="font-display text-2xl text-brand-dark mb-3">Başka sorunuz mu var?</h2>
            <p className="text-gray-600 mb-6">Arayın veya randevu alın, birlikte konuşalım.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+905302406684" className="btn-outline">
                Bizi Arayın
              </a>
              <Link href="/iletisim" className="btn-primary">
                Mesaj Gönderin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
