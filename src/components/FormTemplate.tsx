import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface FormTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backLink?: string;
  backText?: string;
  footerContent?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundType?: 'gradient' | 'solid' | 'image' | 'animated';
  backgroundImage?: string;
}

const FormTemplate = ({
  title,
  subtitle,
  children,
  backLink = '/',
  backText = 'Back to Home',
  footerContent,
  maxWidth = 'md',
  backgroundType = 'gradient',
  backgroundImage,
}: FormTemplateProps) => {
  // Maximum width classes
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  // Background classes based on type
  const getBackgroundClass = () => {
    switch (backgroundType) {
      case 'gradient':
        return 'bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100';
      case 'solid':
        return 'bg-indigo-50';
      case 'image':
        return backgroundImage
          ? `bg-cover bg-center bg-no-repeat`
          : 'bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100';
      case 'animated':
        return 'bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 animate-gradient';
      default:
        return 'bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100';
    }
  };

  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-auto ${getBackgroundClass()}`}
      style={
        backgroundType === 'image' && backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Overlay for better text readability when using background image */}
      {backgroundType === 'image' && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      )}

      {/* Content Container */}
      <div className="relative min-h-full flex items-center justify-center p-4 py-12">
        <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
          {/* Back Link */}
          {backLink && (
            <Link
              to={backLink}
              className="inline-flex items-center text-sm text-gray-700 hover:text-purple-600 mb-8 transition-colors group backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              {backText}
            </Link>
          )}

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 border border-white/20">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
              )}
            </div>

            {/* Form Content */}
            <div className="space-y-6">{children}</div>

            {/* Footer Content */}
            {footerContent && (
              <div className="pt-4 border-t border-gray-100">
                {footerContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTemplate;

