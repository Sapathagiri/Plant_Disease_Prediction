import tensorflow as tf

def get_model():
    """Load the pre-trained model."""
    model_path = "data/models/plant_disease_model.h5"
    model = tf.keras.models.load_model(model_path)
    return model
