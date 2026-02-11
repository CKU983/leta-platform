# leta-platform (Vercel uyumlu)

## Yapı
- web/  -> statik arayüz (login)
- server/ -> Express API (Vercel serverless)

## Vercel
Root'ta `vercel.json` var. Repo'yu import edip Deploy'a bas.

## ENV (opsiyonel)
Vercel > Project Settings > Environment Variables:
- ADMIN_USER (default: LETA)
- ADMIN_PASS (default: 1234)
