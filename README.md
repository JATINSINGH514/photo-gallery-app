# 📸 Photo Gallery Web App

A modern and responsive **Photo Gallery Web Application** built using **React, Vite, and Tailwind CSS**.
This app fetches images from the **Picsum Photos API** and displays them in a clean, responsive grid layout.

Users can search photos by photographer name and mark their favorite photos.

---

## 🚀 Features

* 🔍 **Search Photos** by photographer name
* ❤️ **Favorite Photos** using React `useReducer`
* ⚡ **Fast Performance** with `useMemo` and `useCallback`
* 🖼️ **Responsive Image Grid Layout**
* 🎨 **Modern UI Design with Tailwind CSS**
* 📱 **Fully Responsive (Mobile, Tablet, Desktop)**
* 🌄 **Dynamic Images from Picsum API**

---

## 🛠️ Technologies Used

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Picsum Photos API**

---

## 📂 Project Structure

```
photo-gallery
│
├── src
│   ├── components
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducer
│   │   └── favouriteReducer.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/JATINSINGH514/photo-gallery-app.git
```

Go to the project folder:

```
cd photo-gallery-app
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the browser and visit:

```
http://localhost:5173
```

---

## 🌐 API Used

This project uses the **Picsum Photos API**:

```
https://picsum.photos/v2/list?limit=30
```

It provides random images and photographer information.


---

## 📈 Future Improvements

* Masonry gallery layout (Pinterest style)
* Image modal preview
* Download photo feature
* User authentication
* Infinite scrolling

---

## 👨‍💻 Author

**Jatin Singh**
