import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog – İşitme Sağlığı",
  description:
    "İşitme sağlığı hakkında uzman bilgiler. İşitme cihazı nasıl seçilir, işitme kaybı belirtileri, işitme testi hakkında merak ettikleriniz.",
  alternates: { canonical: "https://novises.com/blog" },
};

const posts = [
  {
    slug: "isitme-cihazi-nasil-secilir",
    title: "İşitme Cihazı Nasıl Seçilir?",
    excerpt:
      "Pek çok farklı işitme cihazı modeli arasında en doğru seçimi yapmanın yolları. İşitme kaybınızın tipi, yaşam tarzınız ve bütçeniz nasıl rol oynar?",
    date: "2024-12-10",
    category: "Rehber",
    img: "/images/blog-1.jpg",
    readTime: "5 dk",
  },
  {
    slug: "isitme-kaybi-belirtileri",
    title: "İşitme Kaybının 10 Belirtisi",
    excerpt:
      "İşitme kaybı çoğunlukla fark edilmeden ilerler. Bu 10 belirtiyi erken tanırsanız tedavi çok daha kolay olur.",
    date: "2024-11-22",
    category: "Sağlık",
    img: "/images/blog-2.jpg",
    readTime: "4 dk",
  },
  {
    slug: "isitme-testi-nasil-yapilir",
    title: "İşitme Testi Nasıl Yapılır?",
    excerpt:
      "Odyometri testi nedir, nasıl uygulanır, sonuçlar ne anlama gelir? Merak ettiğiniz her şeyi bu yazıda bulabilirsiniz.",
    date: "2024-11-05",
    category: "Bilgi",
    img: "/images/blog-3.jpg",
    readTime: "6 dk",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">Blog</span>
          <h1 className="section-title text-4xl md:text-5xl mb-6">
            İşitme sağlığı hakkında
            <br />
            bilmeniz gerekenler
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Uzman bilgiler, pratik rehberler ve işitme sağlığıyla ilgili merak
            ettiğiniz her şey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 bg-gray-100">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur text-brand-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readTime} okuma</span>
                    </div>
                    <h2 className="font-display text-xl text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
