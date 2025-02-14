from app.utils import preprocess_image

def test_preprocess_image():
    img_path = "tests/sample_image.jpg"
    result = preprocess_image(img_path)
    assert result.shape == (1, 224, 224, 3)
