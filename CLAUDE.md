# AIO Holidays — Blog & Website Project

## מה האתר הזה
בלוג טיולים בעברית לקהל ישראלי. כתבות יעד, מדריכי טיסות, המלצות מעשיות.
אתר סטטי — ללא CMS, ללא framework כבד. מהיר, נקי, קל לתחזוקה.

## Tech Stack
- HTML5 סמנטי
- Tailwind CSS (CDN)
- JavaScript ונילה (אין React/Vue)
- RTL עברית בכל דף
- פונט: Heebo (Google Fonts)

## Brand (למילוי בהמשך)
- שם האתר: AIO Holidays
- צבע ראשי: `#[TBD]`
- צבע משני: `#[TBD]`
- טון כתיבה: מגזיני, חם, מקצועי — לא רובוטי

## מבנה תיקיות
```
/
├── index.html          ← דף הבית
├── articles/           ← כתבות (כל כתבה = קובץ HTML נפרד)
├── destinations/       ← דפי יעד
├── guides/             ← מדריכים (טיסות, ביטוח, חבילות)
├── assets/
│   ├── images/
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
  <title>PAGE_TITLE | AIO Holidays</title>
  <meta name="description" content="META_DESCRIPTION">
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Heebo', sans-serif; }
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

## SEO — חובה בכל דף
- `<title>` ייחודי עם מילת מפתח
- `<meta name="description">` עד 155 תווים
- כותרות h1/h2/h3 בהיררכיה נכונה
- Open Graph tags לשיתוף ברשתות חברתיות

## Navbar — מבנה קבוע
קישורים: ראשי | יעדים | מדריכי טיסות | המלצות | צור קשר

## Footer — מבנה קבוע
לוגו + תיאור קצר | קישורים מהירים | רשתות חברתיות | copyright

## סקילים זמינים
- `/new-page` — דף HTML חדש מלא עם כל ה-boilerplate
- `/article-writer` — כתבת טיול שלמה בעברית
- `/deploy` — בדיקת קוד + push ל-GitHub
- `/pixel-design-taste` — תהליך עיצוב מ-0
- `/frontend-design` — UI מקצועי

## סדר עבודה מומלץ לפיצ'רים חדשים
1. הגדר מה בונים (מסך / כתבה / קומפוננטה)
2. הפעל סקיל מתאים או תאר את הדף
3. בדוק בדפדפן
4. `/deploy` כשמוכן
