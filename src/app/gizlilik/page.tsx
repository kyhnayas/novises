import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası & KVKK",
  description: "Novises İşitme Cihazları gizlilik politikası ve KVKK kapsamında kişisel veri işleme aydınlatma metni.",
  alternates: { canonical: "https://novises.com/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-subtitle">Yasal</span>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Gizlilik Politikası & KVKK</h1>
          <p className="text-gray-500 text-sm">Son güncelleme: Ocak 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg max-w-none">
          <h2>1. Veri Sorumlusu</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla
            <strong> Novises İşitme Cihazları</strong> (Güllük, Adnan Menderes Cd Sağlık Sk no:3 iç kapı 108,
            54100 Adapazarı/Sakarya) hareket etmektedir.
          </p>

          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>Web sitemiz üzerinden randevu formu aracılığıyla yalnızca aşağıdaki veriler toplanmaktadır:</p>
          <ul>
            <li>Ad Soyad</li>
            <li>Telefon Numarası</li>
            <li>İsteğe bağlı mesaj içeriği</li>
          </ul>

          <h2>3. Kişisel Verilerin İşlenme Amacı</h2>
          <p>Toplanan veriler yalnızca şu amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Randevu talebinizi karşılamak ve sizi geri aramak</li>
            <li>Hizmet kalitesini artırmak</li>
          </ul>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz hiçbir şekilde üçüncü taraflara, reklam şirketlerine veya
            yurt dışına aktarılmamaktadır.
          </p>

          <h2>5. Saklama Süresi</h2>
          <p>
            Randevu formları yalnızca ilgili randevu sürecinin tamamlanması için gerekli olan
            minimum süre boyunca saklanmakta, ardından silinmektedir.
          </p>

          <h2>6. İlgili Kişinin Hakları</h2>
          <p>KVKK Madde 11 uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          </ul>
          <p>
            Bu haklarınızı kullanmak için <a href="mailto:info@novises.com">info@novises.com</a> adresine
            yazılı olarak başvurabilirsiniz.
          </p>

          <h2>7. Çerezler (Cookies)</h2>
          <p>
            Web sitemiz yalnızca teknik işlevsellik için zorunlu çerezler kullanmaktadır.
            Üçüncü taraf reklam çerezleri kullanılmamaktadır.
          </p>

          <h2>8. İletişim</h2>
          <p>
            Gizlilik politikamıza ilişkin sorularınız için:<br />
            <strong>E-posta:</strong> <a href="mailto:info@novises.com">info@novises.com</a><br />
            <strong>Telefon:</strong> <a href="tel:+905302406684">+90 530 240 66 84</a>
          </p>
        </div>
      </section>
    </>
  );
}
