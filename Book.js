Schema Fields (13 حقل):
├── title, author, description
├── filePath, coverImage
├── category, language
├── publishDate
├── rating, ratingsCount
├── viewsCount, isDeleted
└── timestamps

Validation Rules:
├── الحقول المطلوبة
├── الحد الأدنى والأقصى
├── القيم المسموحة
└── الرسائل بالعربية

Indexes:
├── author, category, language
├── publishDate, rating, viewsCount
└── Full-text search

Methods:
├── updateRating()
├── softDelete()
└── incrementViews()

Statics:
├── searchBooks()
├── getTopViewed()
├── getTopRated()
├── getByCategory()
└── getByLanguage()