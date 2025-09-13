import 'package:flutter/material.dart';

// This is the first screen for the user to upload an image.
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // The app bar with the logo and navigation links
      appBar: AppBar(
        leading: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Image.asset(
            'assets/logo.png', // Replace with your image path
            height: 32,
            width: 32,
          ),
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.monitor_heart_outlined, color: Color(0xFFF79273)),
            const SizedBox(width: 8),
            Text('PawHeal', style: Theme.of(context).appBarTheme.titleTextStyle),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pushReplacementNamed(context, '/home');
            },
            child: const Text('MediScan'),
          ),
          TextButton(
            onPressed: () {
              Navigator.pushReplacementNamed(context, '/healthcare');
            },
            child: const Text('Healthcare'),
          ),
        ],
      ),
      // The body contains the main content of the page
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 20),
            Text(
              'Injury Assessment',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              "Upload a clear image of your injury, and we'll analyze it to recommend appropriate medications and treatment.",
              style: Theme.of(context).textTheme.bodyLarge,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 32),
            _buildImageUploadCard(context),
            const SizedBox(height: 24),
            _buildSupportedFormats(context), // Fixed: Added the 'context' argument
          ],
        ),
      ),
    );
  }

  // A helper method to build the image upload card UI
  Widget _buildImageUploadCard(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: Theme.of(context).colorScheme.primary.withOpacity(0.5),
          width: 2,
        ),
      ),
      child: Column(
        children: [
          const Icon(
            Icons.cloud_upload_outlined,
            size: 64,
            color: Color(0xFFF79273),
          ),
          const SizedBox(height: 16),
          Text(
            'Drag and drop your image here',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 8),
          Text(
            'or click to browse files',
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {
              // This button navigates to the results screen
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => const AnalysisResultsScreen()),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF79273),
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
            ),
            child: const Text('Select Image'),
          ),
        ],
      ),
    );
  }

  // A helper method to build the supported formats text
  Widget _buildSupportedFormats(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Icon(Icons.image_outlined, color: Color(0xFF777777)),
        const SizedBox(width: 8),
        Text(
          'Supported formats: JPG, PNG, HEIC',
          style: Theme.of(context).textTheme.bodyMedium,
        ),
      ],
    );
  }
}
// End of HomePage class

// -----------------------------------------------------------------------------
// This is the screen that shows the AI analysis results and treatment recommendations.
// Moved to a top-level class definition.
class AnalysisResultsScreen extends StatelessWidget {
  const AnalysisResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.monitor_heart_outlined, color: Color(0xFFF79273)),
            const SizedBox(width: 8),
            Text('MediScan', style: Theme.of(context).appBarTheme.titleTextStyle),
          ],
        ),
        actions: [
          TextButton(onPressed: () {}, child: const Text('Home')),
          TextButton(onPressed: () {}, child: const Text('About')),
          TextButton(onPressed: () {}, child: const Text('Help')),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 20),
            Text(
              'Analysis Results',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              "Based on the image, we've identified treatment options",
              style: Theme.of(context).textTheme.bodyLarge,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 32),
            _buildUploadedImageCard(context),
            const SizedBox(height: 24),
            _buildDetectedConditionCard(context),
            const SizedBox(height: 24),
            _buildRecommendedTreatmentCard(context),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () {
                // This button takes the user back to the upload screen
                Navigator.pop(context);
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFF79273),
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              child: const Text('Scan Another Image'),
            ),
          ],
        ),
      ),
    );
  }

  // A helper method to build the uploaded image card
  Widget _buildUploadedImageCard(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Uploaded Image', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 16),
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.network(
                'https://placehold.co/600x400/EFEFEF/333333?text=Uploaded+Image',
                fit: BoxFit.cover,
              ),
            ),
          ],
        ),
      ),
    );
  }

  // A helper method to build the detected condition card
  Widget _buildDetectedConditionCard(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Detected Condition', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 16),
            Text(
              'Minor Abrasion',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8),
            Text(
              'Our analysis indicates a minor surface abrasion with slight inflammation. This type of injury typically heals within 7-10 days with proper care.',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: const Color(0xFFFFFBEA),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Icon(Icons.info_outline, color: Color(0xFFE5B50A)),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      'This is an automated analysis and not a medical diagnosis. Consult a healthcare professional for proper medical advice.',
                      style: Theme.of(context)
                          .textTheme
                          .bodyMedium
                          ?.copyWith(color: const Color(0xFFE5B50A)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  // A helper method to build the recommended treatment card
  Widget _buildRecommendedTreatmentCard(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Recommended Treatment',
                style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 16),
            _buildTreatmentItem(
              context,
              icon: Icons.local_pharmacy_outlined,
              title: 'ANTISEPTIC',
              subtitle: 'Betadine Solution',
              description: 'Clean the affected area twice daily',
            ),
            const Divider(),
            _buildTreatmentItem(
              context,
              icon: Icons.medical_services_outlined,
              title: 'PAIN RELIEF',
              subtitle: 'Ibuprofen 400mg',
              description: 'Take one tablet every 6-8 hours after meals',
            ),
            const Divider(),
            _buildTreatmentItem(
              context,
              icon: Icons.assignment_outlined,
              title: 'TOPICAL TREATMENT',
              subtitle: 'Antibiotic Ointment',
              description:
                  'Apply a thin layer to the affected area 3 times daily',
            ),
          ],
        ),
      ),
    );
  }

  // A helper method to build an individual treatment item
  Widget _buildTreatmentItem(
    BuildContext context, {
    required IconData icon,
    required String title,
    required String subtitle,
    required String description,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFF79273).withOpacity(0.1),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, color: const Color(0xFFF79273)),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: Theme.of(context).textTheme.bodyMedium),
                const SizedBox(height: 4),
                Text(subtitle, style: Theme.of(context).textTheme.titleLarge),
                const SizedBox(height: 4),
                Text(description, style: Theme.of(context).textTheme.bodyLarge),
              ],
            ),
          ),
        ],
      ),
    );
  }
}