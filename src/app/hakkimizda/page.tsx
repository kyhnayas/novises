import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Novises İşitme Cihazları olarak Sakarya Adapazarı'nda işitme sağlığı alanında güvenilir ve kişisel bakım sunuyoruz. Hikayemizi öğrenin.",
  alternates: { canonical: "https://novises.com/hakkimizda" },
};

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.2!2d30.3922!3d40.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f9a9c000001%3A0x1!2sQ95Q%2B8X+Adapazar%C4%B1%2C+Sakarya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str";

const values = [
  {
    title: "Güven",
    desc: "Her kararımızda hastalarımızın uzun vadeli sağlığını ön planda tutarız. Agresif satış yok, gerçek çözümler var.",
  },
  {
    title: "Uzmanlık",
    desc: "İşitme sağlığı alanında sürekli güncel kalıyor, en yeni cihaz teknolojilerini takip ediyoruz.",
  },
  {
    title: "Sabır",
    desc: "Her hastamızın hikayesi farklıdır. Dinleyerek, anlayarak ve acele etmeden ilerliyoruz.",
  },
  {
    title: "Süreklilik",
    desc: "Cihaz satışıyla ilişkimiz bitmez. Takip, bakım ve danışmanlık hizmetleriyle yanınızdayız.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-subtitle">Hakkımızda</span>
            <h1 className="section-title text-4xl md:text-5xl mb-6">
              İşitme sağlığına adanmış<br />bir ekip
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Novises İşitme Cihazları olarak Sakarya Adapazarı'nda kurulduk.
              Amacımız sadece cihaz satmak değil; hastalarımızın hayat kalitesini
              kalıcı olarak yükseltmek.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="Novises İşitme Merkezi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="section-subtitle">Hikayemiz</span>
            <h2 className="section-title mb-6">Dinlemekle başlar, güvenle devam eder</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Novises, işitme sağlığının yalnızca teknik bir sorun değil, aynı zamanda
                derin bir insani ihtiyaç olduğu inancıyla kuruldu. Her hastamızın
                yaşam öyküsü, duyma alışkanlıkları ve beklentileri birbirinden farklı.
              </p>
              <p>
                Sakarya Adapazarı Devlet Hastanesi'nin hemen karşısında, ulaşımı kolay
                konumumuzla bölgenin işitme sağlığı ihtiyaçlarına cevap veriyoruz.
              </p>
              <p>
                Sloganımız boş bir söz değil: <strong className="text-brand-primary">"Sizi dinleyerek başlarız…"</strong>
                {" "}İlk görüşmemizden cihaz takibine kadar her adımda sizi gerçekten duyuyoruz.
              </p>
            </div>
            <Link href="/isitme-testi" className="btn-primary mt-8 inline-flex">
              Randevu Al
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-subtitle">Değerlerimiz</span>
            <h2 className="section-title">Her ziyarette hissedecekleriniz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-display text-xl text-brand-primary mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle">Konumumuz</span>
            <h2 className="section-title mb-6">Size yakın, her zaman erişilebilir</h2>
            <p className="text-gray-600 mb-4">
              Adapazarı Devlet Hastanesi karşısında, merkezi konumumuzla Sakarya'nın
              her noktasından kolayca ulaşabilirsiniz.
            </p>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Güllük, Adnan Menderes Cd Sağlık Sk no:3 iç kapı 108, 54100 Adapazarı/Sakarya
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pzt–Cum: 09:00–18:00 | Cmt: 09:00–14:00
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 border border-gray-100">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Novises Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}
