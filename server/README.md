# 🌿 Plant Disease Detection System

## 📝 Overview
This is an AI-powered plant disease detection system that helps farmers and gardeners identify plant diseases from images. The system uses deep learning to analyze plant images and provide quick, accurate disease diagnoses.

### 🎯 Key Features
- Real-time plant disease detection
- Support for multiple plant types
- Easy-to-use REST API
- High accuracy using deep learning
- Fast processing time

## 🚀 Quick Start Guide

### Prerequisites
- Python 3.10.11 ([Download Python](https://www.python.org/downloads/))
- Git ([Download Git](https://git-scm.com/downloads))
- Basic knowledge of command line

### Step-by-Step Installation 🛠️

1️⃣ **Clone the Project**
```bash
git clone <repository-url>
cd <repository-folder>
```

2️⃣ **Set Up Python Environment**
```bash
# Create a new virtual environment
python -m venv plant-disease-venv

# Activate the environment
# For Windows:
plant-disease-venv\Scripts\activate
# For macOS/Linux:
source plant-disease-venv/bin/activate
```

3️⃣ **Install Required Packages**
```bash
# Update pip first
python -m pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

4️⃣ **Verify Model Setup**
- Ensure the model file exists at: `data/models/plant_disease_model.h5`
- If missing, download it from: [Model Download Link]

5️⃣ **Start the Server**
```bash
python main.py
```

The server will start at `http://localhost:5000`

## 📦 Project Structure
```
plant-disease-detection/
├── 📁 app/                     # Application core
│   ├── __init__.py            # Flask app initialization
│   ├── routes.py              # API endpoints
│   ├── services.py            # Disease detection logic
│   └── utils.py               # Helper functions
├── 📁 data/
│   ├── models/                # AI model files
│   └── uploads/               # Temporary image storage
├── 📁 tests/                  # Test files
├── main.py                    # Server entry point
└── requirements.txt           # Dependencies
```

## 📋 Dependencies
Key packages used in this project:
- Flask (v3.1.0) - Web framework
- TensorFlow (v2.13.0) - Deep learning
- OpenCV (v4.10.0.84) - Image processing
- Pillow (v11.0.0) - Image handling
- NumPy (v1.24.3) - Numerical computations

## 🔍 How to Use

1. Start the server following the installation steps
2. Send a POST request to `/predict` with an image file
3. Receive JSON response with disease prediction

Example API call:
```python
import requests

url = 'http://localhost:5000/predict'
image_path = 'path/to/plant/image.jpg'

with open(image_path, 'rb') as img:
    files = {'file': img}
    response = requests.post(url, files=files)

print(response.json())
```

## 🛟 Troubleshooting

Common issues and solutions:

1. **ModuleNotFoundError**: 
   - Make sure virtual environment is activated
   - Run `pip install -r requirements.txt` again

2. **Model not found error**:
   - Check if `plant_disease_model.h5` exists in data/models/
   - Download the model if missing

3. **Server won't start**:
   - Ensure port 5000 is not in use
   - Check Python version (3.10.11 required)

## 📞 Support
For issues and questions:
- Create a GitHub issue
- Contact: [Your Contact Information]

## 🤝 Contributing
Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---
Made with ❤️ for the farming community
