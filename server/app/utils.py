from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

def preprocess_image(img_path):
    # Load the image with the target size (28x28)
    img = load_img(img_path, target_size=(28, 28))
    # Convert the image to a numpy array
    img_array = img_to_array(img)
    # Normalize the pixel values (if required by your model)
    img_array = img_array / 255.0
    # Add a batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    # img_array = img_array / 255.0  
    print(img_array.shape)
    return img_array