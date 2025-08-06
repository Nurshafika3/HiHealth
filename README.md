# HiHealth - Mobile Health Information App

![HiHealth Logo](src/assets/health.png)

HiHealth is a comprehensive mobile health application built with **Ionic Angular** that provides users with detailed information about common diseases and health conditions. This application serves as a digital health companion, offering symptoms, causes, treatments, and preventive measures for various medical conditions.

## 🚀 Features

### 📱 Core Functionality
- **Disease Information Database**: Comprehensive information about 20+ common health conditions
- **Symptom Checker**: Detailed symptom descriptions for each condition
- **Treatment Solutions**: Medical treatments and lifestyle recommendations
- **Search Functionality**: Quick search to find specific health information
- **Visual Content**: Rich imagery and illustrations for better understanding

### 🏥 Health Conditions Covered
- **Respiratory**: Asthma, Breathing disorders
- **Mental Health**: Depression, OCD
- **Allergies**: Various allergic reactions and treatments
- **Metabolic**: Diabetes, Obesity
- **Cardiovascular**: Hypertension, Heart-related conditions
- **Infectious Diseases**: Dengue, Malaria, Salmonella
- **Organ-specific**: Kidney diseases, Eye problems, Ear conditions
- **Endocrine**: Addison's disease
- **Blood disorders**: Hemophilia
- **Sleep disorders**: Sleep apnea and related conditions
- **Musculoskeletal**: Neck pain, Elbow problems
- **Sensory**: Taste disorders

### 🎯 Key Features
- **Interactive UI**: Smooth slide-based navigation
- **Comprehensive Information**: Each condition includes:
  - What is the condition?
  - Symptoms and signs
  - Treatment options and solutions
  - Prevention tips
- **Search Integration**: Fast search functionality to quickly find information
- **User-Friendly Design**: Clean, medical-grade interface design
- **Offline Access**: Information available without internet connection

## 🛠️ Technology Stack

- **Framework**: Ionic 5 with Angular 10
- **Language**: TypeScript
- **Styling**: SCSS, Ionic Components
- **Platform**: Cross-platform (iOS, Android, Web)
- **Build Tool**: Angular CLI
- **Testing**: Jasmine, Karma, Protractor

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)
- **Ionic CLI**: `npm install -g @ionic/cli`
- **Angular CLI**: `npm install -g @angular/cli`

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nurshafika3/HiHealth.git
   cd HiHealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # For web development
   ionic serve
   
   # Or using npm
   npm start
   ```

4. **Build for production**
   ```bash
   ionic build
   ```

## 📱 Platform-Specific Builds

### Android
```bash
ionic capacitor add android
ionic capacitor run android
```

### iOS
```bash
ionic capacitor add ios
ionic capacitor run ios
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── home/                 # Welcome/onboarding screens
│   ├── health/               # Main health dashboard
│   ├── search/               # Search functionality
│   ├── about/                # About the application
│   ├── faq/                  # Frequently asked questions
│   ├── [condition]/          # Individual condition pages
│   ├── symptom[condition]/   # Symptom information pages
│   ├── solution[condition]/  # Treatment solution pages
│   ├── what[condition]/      # "What is" information pages
│   └── services/             # Shared services
├── assets/                   # Images and static resources
├── theme/                    # Application styling
└── environments/             # Environment configurations
```

## 🎨 Application Flow

1. **Welcome Screen**: Introduction slides explaining app features
2. **Main Dashboard**: Grid of health conditions with visual cards
3. **Condition Details**: Detailed information about specific conditions
4. **Symptom Information**: Comprehensive symptom descriptions
5. **Treatment Solutions**: Medical and lifestyle treatment options
6. **Search**: Quick access to find specific information

## 📖 Usage Guide

### Navigation
- **Home Screen**: Swipe through introduction slides
- **Health Dashboard**: Tap on any condition card to explore
- **Back Navigation**: Use the back button to return to previous screens
- **Menu**: Access About, FAQ, and Reference sections via the side menu
- **Search**: Use the search bar for quick information lookup

### Information Structure
Each health condition follows a consistent structure:
- **Overview**: What the condition is
- **Symptoms**: Detailed symptom descriptions
- **Solutions**: Treatment options and recommendations

## 🤝 Contributing

We welcome contributions to improve HiHealth! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines
- Follow Angular/Ionic coding standards
- Add appropriate comments to your code
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: Nurshafika
- **Project Type**: Final Year Project (FYP)
- **Institution**: [Your Institution Name]

## 📞 Support & Contact

- **GitHub Issues**: [Create an issue](https://github.com/Nurshafika3/HiHealth/issues)
- **Email**: [Your contact email]

## 🙏 Acknowledgments

- Medical information sourced from reputable health organizations
- Ionic Framework team for the excellent mobile development platform
- Angular team for the robust web framework
- All contributors and testers who helped improve this application

## ⚠️ Disclaimer

**Important**: This application is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

---

**Made with ❤️ for better health awareness**
