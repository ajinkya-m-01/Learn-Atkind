# Training Institute Inquiry Form - Complete Guide

## Overview

The new "Join Now" form has been completely redesigned as a **Training Institute Inquiry Form** with cascading location dropdowns and course selection.

## 🎯 New Form Features

### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| **Full Name** | Text | ✅ Yes | Any text |
| **Mobile Number** | Tel | ✅ Yes | Exactly 10 digits |
| **Email ID** | Email | ✅ Yes | Valid email format |
| **State** | Dropdown | ✅ Yes | Select from list |
| **District** | Dropdown | ✅ Yes | Cascades from State |
| **City** | Dropdown | ✅ Yes | Cascades from District |
| **Course** | Dropdown | ✅ Yes | Select from list |

### 🗺️ Cascading Location System

The form implements a **3-level cascading dropdown** system:

**State → District → City**

#### Available Locations

**Maharashtra:**
- Pune: Pune City, Wagholi, Hadapsar, Kothrud, Deccan, Katraj
- Mumbai: Andheri, Bandra, Borivali, Thane, Navi Mumbai
- Nagpur: Sitabuldi, Manish Nagar, Hingna

**Gujarat:**
- Ahmedabad: Bopal, Sarkhej, Sanand, Maninagar
- Surat: Surat City, Palsana, Olpad
- Vadodara: Alkapuri, Sayajigunj, Manjalpur

**Karnataka:**
- Bangalore: Koramangala, Whitefield, Indiranagar, Electronic City
- Mysore: Mysore City, Vijayanagar, Hebbal
- Mangalore: Mangalore City, Ullal, Surathkal

**Delhi:**
- New Delhi: Connaught Place, Karol Bagh, Lajpat Nagar
- North Delhi: Rohini, Pitampura, Model Town
- South Delhi: Saket, Greater Kailash, Hauz Khas

### 📚 Available Courses

1. AI Engineer Program
2. AI Internship Program
3. Bootcamp of AI
4. Machine Learning
5. Deep Learning
6. Natural Language Processing
7. Computer Vision
8. Data Science
9. Python Programming
10. Web Development

## 🔧 How It Works

### 1. Cascading Dropdowns Logic

```typescript
// When State changes:
- District dropdown populates with districts for that state
- District and City values reset
- City dropdown becomes empty

// When District changes:
- City dropdown populates with cities for that district
- City value resets
```

### 2. Form Validation

**Mobile Number:**
- Must be exactly 10 digits
- Only numbers allowed
- No spaces or special characters
- Pattern: `[0-9]{10}`

**Email:**
- Must match email format: `name@domain.com`
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Required Fields:**
- All fields are mandatory
- Form won't submit if any field is empty

### 3. User Flow

```
1. User clicks "Join Now" button
   ↓
2. Dialog opens with empty form
   ↓
3. User enters Name, Mobile, Email
   ↓
4. User selects State
   → District dropdown activates
   ↓
5. User selects District
   → City dropdown activates
   ↓
6. User selects City
   ↓
7. User selects Course
   ↓
8. User clicks "Submit Inquiry"
   ↓
9. Form validates all fields
   ↓
10. Shows loading spinner (2 seconds)
    ↓
11. Shows success screen with checkmark
    ↓
12. Auto-closes after 2 seconds
    ↓
13. Form resets for next user
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient:** Orange to Pink (`from-orange-500 to-pink-500`)
- **Icons:** Orange accent (`text-orange-500`)
- **Success:** Green checkmark
- **Validation Errors:** Red toast notifications

### Icons (Lucide React)
- 👤 User icon for Name
- 📱 Phone icon for Mobile
- 📧 Mail icon for Email
- 📍 MapPin icon for Location fields
- 📖 BookOpen icon for Course
- ⚡ Loader2 for loading state
- ✅ CheckCircle2 for success

### Animations
- **Form entrance:** Smooth dialog open
- **Success checkmark:** Scale-in animation (`animate-scale-in`)
- **Button hover:** Scale up effect (`hover:scale-105`)
- **Loading:** Spinning loader

## 💾 Form Data Structure

When submitted, the form outputs:

```javascript
{
  name: "John Doe",
  mobile: "9876543210",
  email: "john@example.com",
  state: "Maharashtra",
  district: "Pune",
  city: "Kothrud",
  course: "AI Engineer Program"
}
```

Check your **browser console** to see the submitted data.

## ✅ Validation Messages

| Scenario | Toast Message |
|----------|---------------|
| Empty fields | ❌ "Missing Information" |
| Invalid mobile | ❌ "Invalid Mobile Number" |
| Invalid email | ❌ "Invalid Email" |
| Successful submission | ✅ "Inquiry Submitted! 🎉" |
| Server error | ❌ "Submission Failed" |

## 🔌 Backend Integration

### Current Behavior
The form currently simulates an API call with a 2-second delay and logs data to console.

### To Connect to Your Backend

Replace line 184 in `JoinForm.tsx`:

```typescript
// Current (simulation):
await new Promise(resolve => setTimeout(resolve, 2000));

// Replace with your API:
const response = await fetch('/api/submit-inquiry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

if (!response.ok) {
  throw new Error('Submission failed');
}

const result = await response.json();
console.log('API Response:', result);
```

### Recommended API Endpoint Structure

**POST** `/api/submit-inquiry`

**Request Body:**
```json
{
  "name": "John Doe",
  "mobile": "9876543210",
  "email": "john@example.com",
  "state": "Maharashtra",
  "district": "Pune",
  "city": "Kothrud",
  "course": "AI Engineer Program"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": "INQ123456"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Failed to submit inquiry",
  "error": "Error details"
}
```

## 📱 Responsive Design

The form is fully responsive:

- **Mobile (<640px):** Single column, full width, scrollable
- **Tablet (640-1024px):** Centered with padding
- **Desktop (>1024px):** Max width 500px, centered

**Dialog Features:**
- Max height: 90vh (scrollable if content is long)
- Smooth scroll behavior
- Closes on backdrop click
- Closes on ESC key
- Closes on X button

## 🧪 Testing Guide

### Test Cases

1. **Empty Form Submission**
   - Action: Click submit without filling
   - Expected: "Missing Information" error toast

2. **Invalid Mobile Number**
   - Action: Enter 9 digits or letters
   - Expected: "Invalid Mobile Number" error toast

3. **Invalid Email**
   - Action: Enter "test" or "test@"
   - Expected: "Invalid Email" error toast

4. **Cascading Dropdowns**
   - Action: Select Maharashtra → Pune
   - Expected: District shows Pune, Mumbai, Nagpur
   - Expected: After selecting Pune, cities appear

5. **State Change**
   - Action: Select Maharashtra → Pune → Kothrud, then change to Gujarat
   - Expected: District and City reset to empty

6. **Valid Submission**
   - Action: Fill all fields correctly and submit
   - Expected: Loading spinner → Success screen → Auto-close → Reset

## 🆕 What Changed From Old Form

| Old Form | New Form |
|----------|----------|
| First Name + Last Name | Single Full Name field |
| No phone field | Mobile Number (10 digits) |
| Experience Level dropdown | Course dropdown |
| Areas of Interest | Removed |
| Learning Goals textarea | Removed |
| Preferred Schedule | Removed |
| No location fields | State → District → City cascading |
| Purple/Blue gradient | Orange/Pink gradient |
| 7 fields | 7 fields (different ones) |

## 📝 Adding More Locations

To add more states/districts/cities, edit the `locationData` object in `JoinForm.tsx`:

```typescript
const locationData = {
  "NewState": {
    "District1": ["City1", "City2", "City3"],
    "District2": ["CityA", "CityB"],
  },
  // ... existing states
};
```

## 📝 Adding More Courses

To add more courses, edit the `courseOptions` array in `JoinForm.tsx`:

```typescript
const courseOptions = [
  "New Course Name",
  // ... existing courses
];
```

## 🎯 Key Features Summary

✅ **Cascading location dropdowns** (State → District → City)  
✅ **10-digit mobile validation** with pattern enforcement  
✅ **Email format validation** with regex  
✅ **All fields required** with clear validation  
✅ **Loading states** with spinner animation  
✅ **Success screen** with animated checkmark  
✅ **Toast notifications** for all states  
✅ **Auto-close** after successful submission  
✅ **Form reset** when dialog closes  
✅ **Responsive design** for all devices  
✅ **Beautiful UI** with gradient colors and icons  
✅ **Console logging** for development/debugging  
✅ **Ready for API integration**  

## 🐛 Troubleshooting

**Issue:** District dropdown not showing options  
**Solution:** Make sure a state is selected first

**Issue:** City dropdown not showing options  
**Solution:** Make sure both state and district are selected

**Issue:** Mobile number not accepting input  
**Solution:** Only enter numbers (0-9), no spaces or +91

**Issue:** Form not submitting  
**Solution:** Check console for validation errors, ensure all fields are filled

**Issue:** Success screen not showing  
**Solution:** Wait for 2-second loading period

## 📋 Files Modified

- ✅ `src/components/JoinForm.tsx` - Complete rewrite with new form
- ✅ `src/index.css` - Added scale-in animation
- 🆕 `NEW_INQUIRY_FORM_GUIDE.md` - This documentation

## 🚀 Next Steps

1. **Test the form** by clicking "Join Now" in navbar
2. **Try all validation** scenarios
3. **Check console logs** to see submitted data
4. **Add more locations** as needed
5. **Integrate with backend API** when ready
6. **Set up email notifications** for new inquiries
7. **Create admin dashboard** to view submissions

---

## Summary

The new inquiry form is a **complete, production-ready solution** for collecting student inquiries with:

🎓 Training institute specific fields  
📍 Smart cascading location system  
📱 Mobile-first responsive design  
✅ Comprehensive validation  
🎨 Beautiful gradient UI  
⚡ Fast and smooth interactions  

**Ready to use now!** Click "Join Now" to see it in action! 🎉

---

*Last Updated: October 9, 2025*

