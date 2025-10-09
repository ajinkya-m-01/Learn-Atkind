import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, User, Phone, Mail, MapPin, BookOpen } from "lucide-react";

interface JoinFormProps {
  children: React.ReactNode;
}

interface FormData {
  name: string;
  mobile: string;
  email: string;
  state: string;
  district: string;
  city: string;
  course: string;
}

// Location data structure
const locationData: Record<string, Record<string, string[]>> = {
  "Maharashtra": {
    "Pune": ["Pune City", "Wagholi", "Hadapsar", "Kothrud", "Deccan", "Katraj"],
    "Mumbai": ["Andheri", "Bandra", "Borivali", "Thane", "Navi Mumbai"],
    "Nagpur": ["Sitabuldi", "Manish Nagar", "Hingna"]
  },
  "Gujarat": {
    "Ahmedabad": ["Bopal", "Sarkhej", "Sanand", "Maninagar"],
    "Surat": ["Surat City", "Palsana", "Olpad"],
    "Vadodara": ["Alkapuri", "Sayajigunj", "Manjalpur"]
  },
  "Karnataka": {
    "Bangalore": ["Koramangala", "Whitefield", "Indiranagar", "Electronic City"],
    "Mysore": ["Mysore City", "Vijayanagar", "Hebbal"],
    "Mangalore": ["Mangalore City", "Ullal", "Surathkal"]
  },
  "Delhi": {
    "New Delhi": ["Connaught Place", "Karol Bagh", "Lajpat Nagar"],
    "North Delhi": ["Rohini", "Pitampura", "Model Town"],
    "South Delhi": ["Saket", "Greater Kailash", "Hauz Khas"]
  }
};

// Course options
const courseOptions = [
  "AI Engineer Program",
  "AI Internship Program",
  "Bootcamp of AI",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Data Science",
  "Python Programming",
  "Web Development"
];

const JoinForm = ({ children }: JoinFormProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    city: '',
    course: '',
  });

  const [districts, setDistricts] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  // Update districts when state changes
  useEffect(() => {
    if (formData.state) {
      const availableDistricts = Object.keys(locationData[formData.state] || {});
      setDistricts(availableDistricts);
      setFormData(prev => ({ ...prev, district: '', city: '' }));
      setCities([]);
    } else {
      setDistricts([]);
      setCities([]);
    }
  }, [formData.state]);

  // Update cities when district changes
  useEffect(() => {
    if (formData.state && formData.district) {
      const availableCities = locationData[formData.state][formData.district] || [];
      setCities(availableCities);
      setFormData(prev => ({ ...prev, city: '' }));
    } else {
      setCities([]);
    }
  }, [formData.state, formData.district]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      state: '',
      district: '',
      city: '',
      course: '',
    });
    setDistricts([]);
    setCities([]);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.email || 
        !formData.state || !formData.district || !formData.city || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Inquiry Submitted:', formData);
      setIsSuccess(true);
      
      toast({
        title: "Inquiry Submitted! 🎉",
        description: "We'll contact you within 24 hours.",
      });

      setTimeout(() => {
        setOpen(false);
        resetForm();
      }, 2000);

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        setTimeout(resetForm, 300);
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-white border-2 border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-black">
            🎓 Training Institute Inquiry
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Fill in your details and we'll help you get started on your learning journey.
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black">Success!</h3>
            <p className="text-gray-600 text-center">
              Your inquiry has been submitted successfully.<br />
              We'll contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-black">
                <User className="w-4 h-4 text-black" />
                Full Name *
              </Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                disabled={isLoading}
                className="bg-white text-black border-gray-300 placeholder:text-gray-400"
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="flex items-center gap-2 text-black">
                <Phone className="w-4 h-4 text-black" />
                Mobile Number *
              </Label>
              <Input 
                id="mobile" 
                type="tel"
                placeholder="10-digit mobile number" 
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                maxLength={10}
                required 
                disabled={isLoading}
                className="bg-white text-black border-gray-300 placeholder:text-gray-400"
              />
              <p className="text-xs text-gray-500">Enter 10-digit number without +91</p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-black">
                <Mail className="w-4 h-4 text-black" />
                Email ID *
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                disabled={isLoading}
                className="bg-white text-black border-gray-300 placeholder:text-gray-400"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4 text-black" />
                State *
              </Label>
              <Select 
                value={formData.state} 
                onValueChange={(value) => handleSelectChange('state', value)}
                disabled={isLoading}
              >
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="-- Select State --" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  {Object.keys(locationData).map(state => (
                    <SelectItem key={state} value={state} className="hover:bg-gray-100">{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* District */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4 text-black" />
                District *
              </Label>
              <Select 
                value={formData.district} 
                onValueChange={(value) => handleSelectChange('district', value)}
                disabled={isLoading || !formData.state}
              >
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="-- Select District --" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  {districts.map(district => (
                    <SelectItem key={district} value={district} className="hover:bg-gray-100">{district}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4 text-black" />
                City *
              </Label>
              <Select 
                value={formData.city} 
                onValueChange={(value) => handleSelectChange('city', value)}
                disabled={isLoading || !formData.district}
              >
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="-- Select City --" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  {cities.map(city => (
                    <SelectItem key={city} value={city} className="hover:bg-gray-100">{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Course */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-black">
                <BookOpen className="w-4 h-4 text-black" />
                Course *
              </Label>
              <Select 
                value={formData.course} 
                onValueChange={(value) => handleSelectChange('course', value)}
                disabled={isLoading}
              >
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="-- Select Course --" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  {courseOptions.map(course => (
                    <SelectItem key={course} value={course} className="hover:bg-gray-100">{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-black"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Inquiry'
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to our{' '}
              <a href="/terms" className="text-black hover:underline font-medium">Terms</a>
              {' '}and{' '}
              <a href="/privacy" className="text-black hover:underline font-medium">Privacy Policy</a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinForm;