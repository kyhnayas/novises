import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Novises İşitme Cihazları ile iletişime geçin. Sakarya Adapazarı adresimizi ziyaret edin veya bizi arayın.",
  alternates: { canonical: "https://novises.com/iletisim" },
};

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.2!2d30.3922!3d40.7697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f9a9c000001%3A0x1!2sQ95Q%2B8X+Adapazar%C4%B1%2C+Sakarya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str";

export default function IletisimPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">İletişim</span>
          <h1 className="section-title text-4xl md:text-5xl mb-6">
            Bize ulaşın
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Soru, öneri veya randevu talepleriniz için formu kullanabilir,
            doğrudan arayabilir ya da adresimizi ziyaret edebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl text-brand-dark mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Telefon",
                    value: "+90 530 240 66 84",
                    href: "tel:+905302406684",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    ),
                  },
                  {
                    label: "E-posta",
                    value: "info@novises.com",
                    href: "mailto:info@novises.com",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                  },
                  {
                    label: "Adres",
                    value:
                      "Güllük mh, Adnan Menderes Cd Sağlık Sk no:3 iç kapı 108, 54100 Adapazarı/Sakarya",
                    href: "https://maps.google.com/?q=Q95Q%2B8X+Adapazar%C4%B1,+Sakarya",
                    icon: (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </>
                    ),
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === "Adres" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                      <svg
                        className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {c.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-gray-800 font-medium">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">
                Çalışma Saatleri
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Pazartesi – Cuma</span>
                  <span className="font-medium text-gray-800">
                    09:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Cumartesi</span>
                  <span className="font-medium text-gray-800">
                    10:00 – 16:00
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Pazar</span>
                  <span className="text-red-400">Kapalı</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 border border-gray-100">
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

          <div className="bg-brand-light rounded-3xl p-8 md:p-10 h-fit">
            <h2 className="font-display text-2xl text-brand-dark mb-2">
              Randevu / Mesaj
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Formu doldurun, en kısa sürede dönüş yapalım.
            </p>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
