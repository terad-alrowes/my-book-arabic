{
  "name": "my-book-arabic",
  "version": "1.0.0",
  "description": "تطبيق ويب لإدارة كتبكم – Web application for managing a digital library",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "keywords": [
    "library",
    "books",
    "كتبكم",
    "بنك",
    "digital",
    "مُفهر",
    "مُفهر كتبكم"
  ],
  "author": "terad-alrowes",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "dotenv": "^16.0.3",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4"
  }
}
