from app.models import get_model
from app.utils import preprocess_image
import numpy as np

model = get_model()

def predict_disease(img_path):
    img_array = preprocess_image(img_path)
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions)
    confidence = np.max(predictions)

    print(predicted_class)
    
    class_names = ['Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot','Corn_(maize)___Common_rust_','Corn_(maize)___healthy','Peach___Bacterial_spot','Peach___healthy']
    
    status = "healthy" if class_names[predicted_class] == "Peach___healthy" else "unhealthy"
    return {
        'predicted_class': class_names[predicted_class],
        'confidence': f"{confidence:.2f}",
        'status':status
    }
