import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Upload, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface DetectionResult {
  status: string;
  confidence: number;
  predicted_class?: string;
}

export default function Detect() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleDetect = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://127.0.0.1:5003/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      setResult(response.data);
      toast.success('Analysis completed successfully!');
    } catch (error) {
      toast.error('Error analyzing image. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 py-16 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Plant Disease Detection</h1>
        <p className="text-muted-foreground text-lg">
          Upload a clear photo of your plant's leaves for the most accurate results
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}`}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            {isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p>Drag & drop an image here, or click to select</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">
              Supports: JPG, JPEG, PNG
            </p>
          </div>
        </CardContent>
      </Card>

      {preview && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {image && !loading && !result && (
        <div className="text-center">
          <Button onClick={handleDetect} size="lg">
            Analyze Image
          </Button>
        </div>
      )}

      {loading && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Analyzing your plant...</p>
              <Progress value={33} className="max-w-xs mx-auto" />
            </div>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {result.status === 'healthy' ? 'Plant is Healthy! 🌱' : 'Disease Detected ⚠️'}
              </h3>
              <p className="text-lg mb-2">
                Confidence: {(result.confidence * 100).toFixed(1)}%
              </p>
              {result.predicted_class && (
                <p className="text-muted-foreground">{result.predicted_class}</p>
              )}
              <Button
                variant="outline"
                onClick={() => {
                  setImage(null);
                  setPreview('');
                  setResult(null);
                }}
                className="mt-4"
              >
                Analyze Another Image
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
