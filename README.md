# KIF ART STUDIO — Pro v3

KIF ART STUDIO'nun yenilenmiş, mobil uyumlu ve KIF AI destekli sürümü.

## İçerik
- `public/` — web sitesi ve görseller
- `src/index.js` — KIF AI API Worker
- `wrangler.jsonc` — Cloudflare Workers + Static Assets + Workers AI ayarı

## Canlı AI'yi açma
Bu proje Cloudflare Workers Static Assets ile statik siteyi, Worker ile `/api/ai` uç noktasını ve Workers AI binding'ini birlikte kullanır. Cloudflare'ın güncel önerdiği yapı budur.

1. Cloudflare hesabında Workers & Pages / Workers alanına gir.
2. Bu proje klasörünü Wrangler ile deploy et: `npx wrangler deploy`
3. Workers AI binding'i `wrangler.jsonc` içinde `AI` olarak tanımlıdır.
4. Gerekirse hesabında Workers AI kullanım/billing özelliğini etkinleştir.
5. Özel domaini Worker'a bağla: `kifartstudio.com`.

## Yerel test
Node.js + Wrangler kuruluysa:
`npx wrangler dev`

## Notlar
- KIF AI kesin fiyat, stok veya teslim tarihi uydurmaması için sistem talimatıyla sınırlandırıldı.
- AI önerileri ön çalışmadır; nihai ölçü ve fiyat teklif ile netleşir.
- Instagram bağlantısı halen `https://instagram.com/` placeholder'ıdır; gerçek hesap URL'si verilince değiştirilmelidir.
- `hello@kifartstudio.com` iletişim adresi korunmuştur.
