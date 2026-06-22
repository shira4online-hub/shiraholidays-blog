# Shira Holidays — Blog & Website Project

## מה האתר הזה
בלוג טיולים אישי של שירה — סוכנת נסיעות שכותבת כמו חברה טובה.
ההמלצות מבוססות על חופשות שסגרה ללקוחות (לא בהכרח טיולים שלה).
קהל: זוגות צעירים + משפחות עם ילדים.
אתר סטטי — ללא CMS, ללא framework כבד. מהיר, נקי, קל לתחזוקה.

## יעדים
תאילנד | יפן | דובאי | אינדונזיה | איטליה (דרום + פוליה) | יוון

## סוגי תוכן
- **כתבות** — קלילות, כיפיות, לקריאה בכיף
- **מסלולים מוכנים** — PDF להורדה לטלפון + מפות (Google Maps embed)
- **המלצות מלונות** — עם מחירים ולינקים לאפיליאציה
- **טיפים מעשיים** — ויזה, כסף, מה לארוז, ביטוח

## הכנסות — אפיליאציה
כל קישור למלון/טיסה/פעילות = לינק אפיליאציה:
- Booking.com — מלונות
- Airbnb — דירות
- Skyscanner — טיסות
כלל: כל המלצה קונקרטית כוללת לינק אפיליאציה עם CTA ברור

## Tech Stack
- HTML5 סמנטי
- Tailwind CSS (CDN)
- JavaScript ונילה (אין React/Vue)
- RTL עברית בכל דף
- פונט: Heebo (Google Fonts)

## Brand
- שם האתר: Shira Holidays
- דומיין: shiraholidays.com (SiteGround)
- GitHub: github.com/shira4online-hub/shiraholidays-blog
- פלטת צבעים — ים:
  - ראשי (כחול עמוק): `#0077B6`
  - משני (טורקיז): `#00B4D8`
  - בהיר (קצף/שמיים): `#CAF0F8`
  - רקע: `#FFFFFF`
  - טקסט: `#1A1A2E`
  - אקסנט (חם): `#F4A261`
- טון כתיבה: חברה טובה שממליצה — חמה, אישית, מקצועית. לא רובוטית.
- קול: גוף ראשון — "הייתי שם, ראיתי, ואני אומרת לך..."
- אין לוגו עדיין — להשתמש בטיפוגרפיה Heebo Bold
- אין תמונות אישיות עדיין — להשתמש ב-Unsplash/Pexels עם credit

## מבנה תיקיות
```
/
├── index.html              ← דף הבית
├── articles/               ← כתבות (כל כתבה = HTML נפרד)
├── destinations/           ← דפי יעד (thailand.html, japan.html...)
├── itineraries/            ← מסלולים להורדה
├── guides/                 ← מדריכים מעשיים
├── assets/
│   ├── images/
│   ├── pdfs/               ← מסלולים PDF
│   └── icons/
└── .claude/
    └── settings.json
```

## Boilerplate חובה בכל דף HTML
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE_TITLE | Shira Holidays</title>
  <meta name="description" content="META_DESCRIPTION">
  <meta property="og:title" content="PAGE_TITLE | Shira Holidays">
  <meta property="og:description" content="META_DESCRIPTION">
  <meta property="og:image" content="assets/images/og-image.jpg">
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Heebo', sans-serif; }
    :root {
      --primary: #0077B6;
      --secondary: #00B4D8;
      --light: #CAF0F8;
      --accent: #F4A261;
    }
  </style>
</head>
<body class="bg-white text-gray-900">
  <!-- NAVBAR -->
  <!-- CONTENT -->
  <!-- FOOTER -->
</body>
</html>
```

## כללי קוד — חובה
- תמיד `lang="he" dir="rtl"` בתג html
- תמיד Heebo + Tailwind CDN
- נאבבר ופוטר זהים בכל הדפים
- כל תמונה עם `alt` בעברית
- קוד נקי — אין inline styles מיותרים
- אין Lorem Ipsum — תוכן עברי אמיתי תמיד
- כל לינק אפיליאציה עם `target="_blank" rel="noopener"`

## SEO — חובה בכל דף
- `<title>` ייחודי עם מילת מפתח
- `<meta name="description">` עד 155 תווים
- כותרות h1/h2/h3 בהיררכיה נכונה
- Open Graph tags לשיתוף ברשתות חברתיות

## Navbar — מבנה קבוע
לוגו (Shira Holidays טיפוגרפי) | ראשי | יעדים | מסלולים | טיפים | מלונות

## Footer — מבנה קבוע
שם + תיאור קצר | קישורים | יעדים | רשתות חברתיות | copyright Shira Holidays

## סקילים זמינים
- `/new-page` — דף HTML חדש מלא עם כל ה-boilerplate
- `/article-writer` — כתבת טיול שלמה בעברית
- `/deploy` — בדיקת קוד + push ל-GitHub
- `/pixel-design-taste` — תהליך עיצוב מ-0
- `/frontend-design` — UI מקצועי

## סדר עבודה מומלץ
1. הגדר מה בונים (מסך / כתבה / קומפוננטה)
2. הפעל סקיל מתאים או תאר את הדף
3. בדוק בדפדפן
4. `/deploy` כשמוכן
