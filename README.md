# My Book Arabic - تطبيق المكتبة الرقمية

## 📚 نبذة عن المشروع / Project Description

**العربية:**
تطبيق ويب شامل لإدارة المكتبات الرقمية. يمكن للمستخدمين البحث عن الكتب، قراءتها، إضافة تعليقات، وإنشاء قوائم مفضلة.

**English:**
A comprehensive web application for managing digital libraries. Users can search for books, read them, add comments, and create favorite lists.

---

## ✨ المميزات / Features

✅ **المصادقة والتسجيل** / Authentication & Registration
✅ **إدارة الكتب** / Book Management
✅ **المفضلة** / Favorites
✅ **البحث والتصفية** / Search & Filter
✅ **دعم اللغات** / Multi-language Support (AR/EN)
✅ **واجهة برمجية RESTful** / RESTful API
✅ **قاعدة بيانات MongoDB** / MongoDB Database

---

## 🚀 بدء الاستخدام / Getting Started

### المتطلبات / Prerequisites
- Node.js v16+
- npm أو yarn
- MongoDB

### التثبيت / Installation

```bash
# استنساخ المشروع / Clone the repository
git clone https://github.com/terad-alrowes/my-book-arabic.git
cd my-book-arabic

# تثبيت المكتبات / Install dependencies
npm install

# نسخ متغيرات البيئة / Copy environment variables
cp .env.example .env

# تعديل .env بمعلومات قاعدة البيانات / Edit .env with your database info
```

### التشغيل / Running

```bash
# التطوير / Development
npm run dev

# الإنتاج / Production
npm start

# الاختبار / Testing
npm test
```

---

## 📁 هيكل المشروع / Project Structure

```
my-book-arabic/
├── src/
│   ├── routes/
│   │   ├── auth.routes.js      # مسارات المصادقة
│   │   ├── books.routes.js     # مسارات الكتب
│   │   └── users.routes.js     # مسارات المستخدمين
│   ├── controllers/            # متحكمات التطبيق (قريباً)
│   ├── models/                 # نماذج قاعدة البيانات (قريباً)
│   └── middleware/             # وسائط مخصصة (قريباً)
├── public/                     # الملفات الثابتة
├── uploads/                    # مجلد رفع الملفات
├── server.js                   # ملف السيرفر الرئيسي
├── package.json               # المكتبات والنصوص
├── .env.example              # متغيرات البيئة النموذجية
├── .gitignore                # الملفات المراد تجاهلها
└── README.md                 # هذا الملف
```

---

## 🔌 API Endpoints

### المصادقة / Authentication
- `POST /api/auth/register` - تسجيل مستخدم جديد
- `POST /api/auth/login` - تسجيل دخول
- `POST /api/auth/logout` - تسجيل خروج
- `GET /api/auth/refresh-token` - تحديث التوكن

### الكتب / Books
- `GET /api/books` - الحصول على جميع الكتب
- `GET /api/books/:id` - الحصول على كتاب معين
- `POST /api/books` - إضافة كتاب جديد
- `PUT /api/books/:id` - تحديث كتاب
- `DELETE /api/books/:id` - حذف كتاب
- `GET /api/books/:id/download` - تحميل الكتاب

### المستخدمون / Users
- `GET /api/users/profile` - الحصول على الملف الشخصي
- `PUT /api/users/profile` - تحديث الملف الشخصي
- `GET /api/users/favorites` - الحصول على الكتب المفضلة
- `POST /api/users/favorites/:bookId` - إضافة كتاب للمفضلة
- `DELETE /api/users/favorites/:bookId` - إزالة كتاب من المفضلة
- `DELETE /api/users/account` - حذف الحساب

---

## 🔧 التكنولوجيات المستخدمة / Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** Helmet, CORS, bcryptjs
- **Development:** Nodemon

---

## 👨‍💻 المساهمة / Contributing

نرحب بمساهماتك! يرجى:

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📄 الترخيص / License

هذا المشروع مرخص تحت MIT License - اطلع على ملف [LICENSE](LICENSE) للتفاصيل.

---

## 📧 التواصل / Contact

**المؤلف:** terad-alrowes
**البريد الإلكتروني:** teradalrowes@gmail.com

---

## 🙏 شكر خاص / Special Thanks

شكراً لاستخدامك تطبيق My Book Arabic!

**Thank you for using My Book Arabic Application!**