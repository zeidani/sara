# Asset Guide — Sarah A. Zeidani

| العنصر | مكانه | ماذا تفعل؟ |
|---|---|---|
| الصورة الشخصية | `assets/images/profile-sarah.png` | استبدال الملف بنفس الاسم |
| علامة SA | `assets/images/sarah-mark.svg` | استبدال الشعار بنفس الاسم |
| الشهادات | `assets/images/certificates/` | أضف صور الشهادات الرسمية |
| المشاريع | `assets/images/projects/` | أضف صور المشاريع |
| الشركات | `assets/images/logos/` | أضف الشعارات الرسمية |
| الأيقونات | `assets/images/icons/` | أضف أيقونات الخدمات/المهارات |
| أعلام اللغات | `assets/images/flags/` | استبدل SVG مع الحفاظ على أسماء الملفات |

## تعديل الاسم واللغات
الملف:

`assets/js/main.js`

ابحث عن:

`const NAMES = { ... }`

لتعديل اسم العرض حسب اللغة.

## تعديل الألوان
الملف:

`assets/css/style.css`

ابحث عن `:root` لتعديل ألوان الوضع الداكن، وابحث عن `body.theme-light` لتعديل الوضع الفاتح.

## تعديل أرقام العدادات
الصفحة الرئيسية:

`index.html`

كل عداد يستخدم:

`class="counter" data-target="VALUE"`

مثال:

`<div class="counter" data-target="9">0</div>`

غيّر قيمة `data-target` فقط.

## ملاحظة مهمة
لا تغير أسماء ملفات الصور المستخدمة في HTML إلا إذا عدلت المرجع في الصفحة. الأسهل هو استبدال الملف مع الاحتفاظ بنفس الاسم.
