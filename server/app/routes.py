from flask import Blueprint, request, jsonify
from app.services import predict_disease

blueprint = Blueprint('routes', __name__)

@blueprint.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file:
        img_path = f"data/uploads/{file.filename}"
        file.save(img_path)
        result = predict_disease(img_path)
        return jsonify(result)

    return jsonify({'error': 'Something went wrong'}), 500
