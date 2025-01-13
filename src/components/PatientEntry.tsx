import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  age: string;
  gender: string;
  phone: string;
  majorsymptoms: string;
  medicalHistory: string;
  attachments: File[];
}

export const PatientEntry: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    phone: '',
    majorsymptoms: '',
    medicalHistory: '',
    attachments: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/patients');
  };

  return (
    <div className="min-h-screen" style={{ background: '#FDF5F5' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center">
          <Link
            to="/"
            className="flex items-center"
            style={{ color: '#D64545' }}
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div
          className="shadow rounded-lg p-6"
          style={{ background: '#FFFFFF', border: '1px solid #FAE8E8' }}
        >
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: '#2D3436' }}
          >
            New Patient Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  className="block text-sm font-medium"
                  style={{ color: '#2D3436' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm"
                  style={{
                    border: '1px solid #854141',
                    background: '#FFFFFF',
                  }}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium"
                  style={{ color: '#2D3436' }}
                >
                  Age
                </label>
                <input
                  type="number"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm"
                  style={{
                    border: '1px solid #854141',
                    background: '#FFFFFF',
                  }}
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium"
                  style={{ color: '#2D3436' }}
                >
                  Gender
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md shadow-sm"
                  style={{
                    border: '1px solid #854141',
                    background: '#FFFFFF',
                  }}
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium"
                  style={{ color: '#2D3436' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm"
                  style={{
                    border: '1px solid #854141',
                    background: '#FFFFFF',
                  }}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            

            <div>
              <label
                className="block text-sm font-medium"
                style={{ color: '#2D3436' }}
              >
                Major Symptoms
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md shadow-sm"
                style={{
                  border: '1px solid #854141',
                  background: '#FFFFFF',
                }}
                value={formData.majorsymptoms}
                onChange={(e) =>
                  setFormData({ ...formData, majorsymptoms: e.target.value })
                }
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium"
                style={{ color: '#2D3436' }}
              >
                Medical History
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md shadow-sm"
                style={{
                  border: '1px solid #854141',
                  background: '#FFFFFF',
                }}
                value={formData.medicalHistory}
                onChange={(e) =>
                  setFormData({ ...formData, medicalHistory: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-medium"
                style={{ color: '#2D3436' }}
              >
                Attachments
              </label>
              <input
                type="file"
                className="mt-1 block w-full rounded-md shadow-sm"
                style={{
                  border: '1px solid #854141',
                  background: '#FFFFFF',
                }}
                onChange={(e) => {
                  if (e.target.files) {
                    setFormData({
                      ...formData,
                      attachments: Array.from(e.target.files),
                    });
                  }
                }}
                multiple
              />
              <p
                className="mt-1 text-sm"
                style={{ color: '#854141' }}
              >
                You can upload multiple files.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-4 py-2 rounded-md shadow-sm"
                style={{
                  background: '#D64545',
                  color: '#FFFFFF',
                  border: 'none',
                }}
              >
                <Save className="w-5 h-5 mr-2" />
                Save Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
