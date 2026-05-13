import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  pages: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/isitme-testi", label: "İşitme Testi" },
    { href: "/blog", label: "Blog" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ],
  legal: [{ href: "/gizlilik", label: "Gizlilik Politikası & KVKK" }],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.svg"
              alt="Novises İşitme Cihazları"
              width={280}
              height={88}
              className="h-20 w-auto brightness-0 invert mb-5"
            />
            <p className="text-teal-200 text-lg font-display italic mb-4">
              "Sizi dinleyerek başlarız…"
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sakarya Eğitim ve Araştırma Hastanesi karşısında, güvenilir işitme
              sağlığı hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Sayfalar */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-5">
              Sayfalar
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-5">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+905302406684"
                  className="hover:text-white transition-colors flex items-start gap-2"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-teal-400"
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
              </li>
              <li>
                <a
                  href="mailto:info@novises.com"
                  className="hover:text-white transition-colors flex items-start gap-2"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@novises.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                </svg>
                <span>
                  Güllük mh, Adnan Menderes Cd Sağlık Sk no:3
                  <br />
                  Adapazarı / Sakarya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Novises İşitme Cihazları. Tüm hakları
            saklıdır.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
