# AURA 2.0 - College Event Management System

A comprehensive web application for managing college department events with 800+ student registrations and ₹50,000+ in real-time fee collection.

## Features

- **Student Registration**: Complete registration system for multiple events
- **Fee Tracking**: Real-time payment verification with UPI integration
- **Event Scheduling**: Manage 10+ different events with detailed information
- **Data Analytics**: Admin dashboard for data insights and reporting
- **Team Management**: Support for both individual and team-based events
- **Ticket Generation**: Automated ticket generation for verified registrations

## Events Included

1. Bug Auction - ₹150/team
2. Tech Treasure Hunt - ₹200/team
3. Court of Chaos - ₹100/team
4. Treasure Hunt - ₹250/team
5. Prompt Showdown - ₹100/team
6. BGMI - ₹250/team
7. Free Fire - ₹250/team
8. Box Cricket - ₹350/team
9. Project Competition - ₹250/person
10. Talent Utsav - ₹50/person

## Project Structure

```
college-event-management-system/
├── index.html              # Main registration portal
├── admin.html              # Admin dashboard
├── config.js               # Firebase configuration
├── style.css               # Global styles
├── images/
│   ├── bgmi.jpg
│   ├── boxcricket.jpg
│   ├── bugauction.jpg
│   ├── courtroom.jpg
│   ├── freefire.jpg
│   ├── payment_qr.png
│   └── *_qr.jpeg           # Event-specific QR codes
└── README.md
```

## Setup Instructions

### 1. Firebase Configuration
- Update `config.js` with your Firebase credentials
- Create Firestore collection: `registrations`
- Set up Firebase Authentication for admin access

### 2. Payment Integration
- Update UPI ID in `index.html` (line 325)
- Replace QR codes with your payment details
- Test transaction flow

### 3. Deployment
- Deploy to GitHub Pages or static hosting
- Configure Firebase security rules
- Test all features in production

## Usage

### For Students
1. Visit `index.html`
2. Browse events
3. Select an event
4. Fill in registration details
5. Complete UPI payment
6. Receive confirmation

### For Admins
1. Access `admin.html` with secure login
2. View all registrations
3. Filter by event
4. Export to CSV
5. Generate tickets
6. Manage payment verification

## Technologies

- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **Backend**: Firebase Firestore & Authentication
- **Libraries**: EmailJS, html2canvas, Font Awesome

## Statistics

- **Total Registrations**: 800+
- **Total Revenue**: ₹50,000+
- **Events**: 10
- **Prize Pool**: ₹50,000+

## Contact

**Developed by**: Soham Gadekar  
**Collaboration**: LevTech Solutions  
**Website**: https://www.levtechsolution.com/

## License

© 2026 AURA 2.0 - All Rights Reserved
