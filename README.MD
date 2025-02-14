# Plant Disease Prediction System

## 📝 Description
A cutting-edge web application that leverages artificial intelligence to identify plant diseases through leaf image analysis. This system helps farmers, gardeners, and agricultural professionals detect plant diseases early and take appropriate measures.

## 🎯 Key Features
- **Instant Disease Detection**: Upload and get results in seconds
- **High Accuracy**: Advanced deep learning model for reliable predictions
- **User-Friendly Interface**: Simple and intuitive web interface
- **Comprehensive Results**: Detailed disease information and treatment suggestions
- **Multi-Plant Support**: Supports various plant species
- **Mobile Responsive**: Access from any device

## 🛠️ Technology Stack
### Frontend
- React.js
- HTML5/CSS3
- Bootstrap
- JavaScript

### Backend
- Python
- Flask
- TensorFlow/Keras
- OpenCV
- NumPy
- Pandas

### Database
- SQLite

## 📋 System Requirements
- Python 3.8+
- Node.js 14+
- Web browser (Chrome/Firefox/Safari)
- Internet connection

## 📂 Project Structure
```
Plant-Disease-Prediction/
├── client/                 # Frontend application
│   ├── public/            # Public assets
│   ├── src/               # Source code
│   └── package.json       # Dependencies
├── server/                # Backend server
│   ├── models/            # ML models
│   ├── static/           # Static files
│   ├── templates/        # HTML templates
│   ├── app.py            # Main server file
│   └── requirements.txt  # Python dependencies
└── README.md             # Project documentation
```

## ⚙️ Installation Guide

1. **Clone the Repository**
```bash
git clone <your-repository-url>
cd Plant-Disease-Prediction
```

2. **Backend Setup**
```bash
cd server
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
pip install -r requirements.txt
```

3. **Frontend Setup**
```bash
cd client
npm install
```

## 🚀 Running the Application

1. **Start Backend Server**
```bash
cd server
python app.py
```

2. **Start Frontend**
```bash
cd client
npm start
```

3. Access the application at `http://localhost:3000`

## 📱 How to Use
1. Open the application in your web browser
2. Click on "Upload Image" button
3. Select a clear image of the plant leaf
4. Wait for analysis (typically 2-3 seconds)
5. View the results and recommended treatments

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License.

## 👥 Contact
- Developer: [Your Name]
- Email: [Your Email]
- Project Link: [Repository URL]

## 🙏 Acknowledgments
- Plant Village Dataset
- TensorFlow Documentation
- Flask Documentation
- React.js Community