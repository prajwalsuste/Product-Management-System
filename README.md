# Product Management System (PMS)

This is a Full Stack Product Management System developed using React for the frontend and Spring Boot for the backend. The system allows users to manage products by performing CRUD operations.

---

## 🛠️ Tech Stack

### Frontend:
- React.js (Functional Components, Hooks)
- Axios (API Communication)
- Bootstrap (UI Styling)
- React Router DOM

### Backend:
- Java 17
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate ORM
- MySQL (Database)
- Maven (Build Tool)

### Tools Used:
- IntelliJ IDEA / VS Code
- Postman (API Testing)
- Git & GitHub (Version Control)
- MySQL Workbench / phpMyAdmin

---

## 💡 Features

- Add new products with name, quantity, price, and category
- View a list of products
- Update product details
- Delete existing products
- RESTful API integration between frontend and backend

---

## 🚀 How to Run

### Backend (Spring Boot)
1. Open backend project in IntelliJ or VS Code.
2. Make sure MySQL is installed and running.
3. Create a MySQL database: `pms_db`.
4. Update `application.properties` file with your DB credentials.
5. Run the `PmsAppBackendApplication.java` file.

### Frontend (React)
1. Navigate to frontend folder: `cd pms-app-frontend`
2. Run `npm install` to install dependencies.
3. Start the app with `npm start`.

---

## 🌐 API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| GET    | `/api/products`   | Get all products    |
| POST   | `/api/products`   | Add a new product   |
| PUT    | `/api/products/{id}` | Update a product |
| DELETE | `/api/products/{id}` | Delete a product |

---

## 📌 Author

**Prajwal Suste**  
Full Stack Java Developer  
GitHub: [prajwalsuste](https://github.com/prajwalsuste)

---

## 📝 License

This project is licensed under the MIT License.
