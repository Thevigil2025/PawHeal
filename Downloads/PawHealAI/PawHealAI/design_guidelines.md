# AI-Powered Stray Animal First-Aid Assistant - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from medical diagnosis apps like Ada Health and veterinary platforms like PetDesk, emphasizing clean, trustworthy interfaces that present critical medical information with clarity and compassion.

## Core Design Principles
- **Trust & Authority**: Medical-grade interface that instills confidence
- **Compassionate Usability**: Gentle, caring tone for distressed animal situations
- **Mobile-First Emergency Use**: Optimized for field use by rescuers
- **Clear Information Hierarchy**: Critical instructions prominently displayed

## Color Palette

### Light Mode
- **Primary**: 46 45% 44% (healing green #2E7D5F)
- **Secondary**: 0 80% 70% (gentle red #FF6B6B for urgency)
- **Background**: 210 40% 98% (clean white #F8F9FA)
- **Text**: 210 29% 24% (professional dark #2C3E50)
- **Accent**: 174 65% 60% (calming teal #4ECDC4)
- **Warning**: 35 90% 68% (soft orange #FFA726)

### Dark Mode
- **Primary**: 46 35% 55% (lighter healing green)
- **Secondary**: 0 65% 75% (softer red)
- **Background**: 210 15% 8% (dark professional)
- **Text**: 210 20% 90% (light readable)
- **Accent**: 174 45% 65% (muted teal)

## Typography
- **Primary Font**: Inter (clean, medical-grade readability)
- **Secondary Font**: Roboto (supporting text, technical information)
- **Sizes**: Large headers (2.5rem), body (1rem), captions (0.875rem)
- **Weights**: Regular (400), Medium (500), Semibold (600)

## Layout System
**Tailwind Spacing**: Primary units of 4, 6, 8, 12, 16 for consistent rhythm
- **Card Spacing**: p-6, m-4
- **Section Gaps**: space-y-8, space-y-12
- **Component Margins**: mb-6, mt-8

## Component Library

### Core Components
- **Image Upload Area**: Large, prominent card with drag-drop styling
- **Analysis Results Cards**: Clean medical report format with injury highlights
- **Instruction Steps**: Numbered, sequential guidance with visual indicators
- **Emergency Contact Cards**: Quick-access veterinarian and shelter information
- **Medicine Recommendation Panels**: Dosage tables with animal size considerations

### Navigation
- **Header**: Minimal, logo + emergency contacts button
- **Bottom Nav**: Upload, History, Contacts, Settings (mobile)
- **Breadcrumbs**: Analysis flow progress indicator

### Forms & Inputs
- **File Upload**: Prominent camera icon with "Take Photo" and "Upload" options
- **Animal Details**: Size selector, species picker
- **Location Input**: For local vet recommendations

## Key Interface Elements

### Photo Analysis Interface
- **Upload Zone**: Large, centered with healing green border
- **Analysis Loading**: Gentle pulse animation with medical cross icon
- **Results Display**: Injury markers overlaid on photo with color-coded severity

### First-Aid Instructions
- **Step Cards**: Clean white cards with numbered steps
- **Visual Aids**: Simple line illustrations for techniques
- **Progress Tracking**: Completed step checkmarks

### Emergency Features
- **Quick Call Buttons**: Large, red secondary color for vet contacts
- **Location Services**: Automatic local resource discovery
- **Offline Mode**: Cached basic first-aid instructions

## Images
### Hero Section
- **Primary Hero**: Compassionate image of person helping injured stray animal (warm, hopeful lighting)
- **Feature Icons**: Medical cross, camera, phone contact icons in healing green
- **Background**: Soft gradient from healing green to calming teal

### Interface Images
- **Placeholder Graphics**: Simple line drawings of dogs and cats for species selection
- **Medical Illustrations**: Clean, veterinary-style diagrams for common injuries
- **Success States**: Gentle illustrations of recovered animals

## Mobile Optimization
- **Touch Targets**: Minimum 44px for all interactive elements
- **Camera Integration**: Native device camera with optimized capture
- **Offline Capability**: Essential first-aid info cached locally
- **Large Text**: Readable in outdoor/emergency conditions

## Accessibility Features
- **High Contrast**: Medical-grade text contrast ratios
- **Screen Reader**: Comprehensive alt text for all medical imagery
- **Voice Output**: Audio playback of critical instructions
- **Large Touch Areas**: Emergency-optimized interaction zones

This design balances medical authority with compassionate usability, ensuring rescuers can quickly and confidently provide aid to injured animals in field conditions.