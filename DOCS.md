# Novises Web Sitesi — İçerik & Yönetim Kılavuzu

## 📁 Proje Yapısı

```
src/
  app/
    page.tsx              → Ana Sayfa
    hakkimizda/page.tsx   → Hakkımızda
    hizmetler/page.tsx    → Hizmetler
    isitme-testi/page.tsx → İşitme Testi & Randevu
    iletisim/page.tsx     → İletişim
    blog/page.tsx         → Blog listesi
    sss/page.tsx          → Sık Sorulan Sorular
    gizlilik/page.tsx     → Gizlilik / KVKK
    api/randevu/route.ts  → Randevu e-posta API'si
  components/
    Navbar.tsx            → Üst navigasyon
    Footer.tsx            → Alt bilgi alanı
    AppointmentForm.tsx   → Randevu formu
public/
  images/                 → Tüm görseller
  robots.txt
  sitemap.xml
```

---

## ✏️ İçerik Nasıl Düzenlenir?

### Telefon / Adres / E-posta Değiştirme
Aşağıdaki dosyalarda arama yapın:
- `+90 530 240 66 84` → yeni numara ile değiştirin
- `info@novises.com` → yeni e-posta ile değiştirin
- Adres değişikliği için `layout.tsx` içindeki JSON-LD bloğunu da güncelleyin

### Ana Sayfa Metni
`src/app/page.tsx` dosyasını açın.
- Hero başlık: `<h1>` etiketi içindeki metin
- Trust badges (500+, %100 vb.): `b.val` ve `b.label` değerleri
- Testimonials: `testimonials` dizisini düzenleyin

### Hizmetler
`src/app/hizmetler/page.tsx` → `services` dizisini düzenleyin.

### SSS
`src/app/sss/page.tsx` → `faqs` dizisini düzenleyin. Her kategori altında `items` listesi bulunur.

---

## 🖼️ Görseller Nasıl Değiştirilir?

Tüm görseller `public/images/` klasöründedir.

| Dosya Adı         | Kullanım Yeri       |
|-------------------|---------------------|
| `logo.svg`        | Navbar & Footer     |
| `hero.jpg`        | Ana Sayfa hero      |
| `about.jpg`       | Hakkımızda          |
| `service-test.jpg`| Hizmetler - Test    |
| `service-device.jpg` | Hizmetler - Cihaz |
| `service-fitting.jpg` | Hizmetler - Uyum |
| `service-care.jpg`| Hizmetler - Bakım   |
| `hearing-test.jpg`| İşitme Testi sayfası|
| `blog-1.jpg`      | Blog yazısı 1       |
| `blog-2.jpg`      | Blog yazısı 2       |
| `blog-3.jpg`      | Blog yazısı 3       |
| `og-image.jpg`    | Sosyal medya önizlemesi |

Yeni görsel eklemek için: aynı dosya adıyla `public/images/` klasörüne yükleyin.

---

## 📝 Blog Yazısı Nasıl Eklenir?

1. `src/app/blog/page.tsx` dosyasını açın
2. `posts` dizisine yeni bir nesne ekleyin:

```typescript
{
  slug: "yeni-yazi-basligi",          // URL slug (Türkçe harf yok, tire ile)
  title: "Yeni Yazı Başlığı",
  excerpt: "Kısa açıklama metni...",
  date: "2025-03-01",                 // YYYY-MM-DD formatı
  category: "Rehber",
  img: "/images/blog-4.jpg",          // public/images altında olmalı
  readTime: "5 dk",
},
```

3. `public/sitemap.xml` dosyasına yeni yazının URL'ini ekleyin.

---

## 🔍 SEO Alanları Nasıl Güncellenir?

Her sayfanın üstünde `export const metadata` bloğu bulunur:

```typescript
export const metadata: Metadata = {
  title: "Sayfa Başlığı",
  description: "Meta açıklama (160 karakter altı önerilir).",
  alternates: { canonical: "https://novises.com/sayfa-slug" },
};
```

Değiştirmek istediğiniz sayfanın `page.tsx` dosyasını açarak bu alanları düzenleyin.

**Google Business bilgileri** için `src/app/layout.tsx` içindeki `jsonLd` nesnesini güncelleyin.

---

## 📧 E-posta Ayarları

`.env.local` dosyası oluşturun (`.env.local.example` dosyasını kopyalayın):

```env
NODEMAILER_HOST=smtp.gmail.com
NODEMAILER_PORT=587
NODEMAILER_USER=info@novises.com
NODEMAILER_PASS=gmail-uygulama-sifresi
MAIL_TO=info@novises.com
NEXT_PUBLIC_SITE_URL=https://novises.com
```

> Gmail için "Uygulama Şifresi" oluşturmanız gerekir:
> Google Hesabı → Güvenlik → 2 Adımlı Doğrulama → Uygulama Şifreleri

---

## 🚀 Yayına Alma (Vercel)

1. [vercel.com](https://vercel.com) hesabı açın
2. GitHub'a projeyi push edin
3. Vercel'de "New Project" → GitHub reposunu seçin
4. Environment Variables bölümüne `.env.local` içindeki değerleri girin
5. Deploy edin

---

## 🛠️ Yerel Geliştirme

```bash
cd C:\Projeler\novises\web
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresine gidin.
