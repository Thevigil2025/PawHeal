import 'package:flutter/material.dart';

// This widget represents the Pet Services Directory page.
class HealthcarePage extends StatelessWidget {
  const HealthcarePage({super.key});

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
      // The body now calls the helper methods to display content
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildHeader(context),
            _buildBody(context),
          ],
        ),
      ),
    );
  }

  // Helper method to build the header section with the title and search bar.
  Widget _buildHeader(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        color: Color(0xFFFFF2EC),
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(30),
          bottomRight: Radius.circular(30),
        ),
      ),
      padding: const EdgeInsets.only(top: 60, left: 24, right: 24, bottom: 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Pet Services Directory',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                  color: Theme.of(context).colorScheme.primary,
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
          ),
          const SizedBox(height: 8),
          Text(
            'Find the best services for your furry friends',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.grey[700],
                ),
          ),
          const SizedBox(height: 24),
          _buildSearchBar(context),
        ],
      ),
    );
  }

  // Helper method to build the search bar with the search icon and button.
  Widget _buildSearchBar(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            spreadRadius: 1,
            blurRadius: 5,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              decoration: InputDecoration(
                prefixIcon: Icon(Icons.search, color: Colors.grey[400]),
                hintText: 'Search for services, locations, or specialties...',
                hintStyle: TextStyle(color: Colors.grey[400]),
                border: InputBorder.none,
                contentPadding:
                    const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              // Placeholder for search functionality
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF79273),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
            ),
            child: const Text('Search'),
          ),
        ],
      ),
    );
  }

  // Helper method to build the main body with category buttons and the list of services.
  Widget _buildBody(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildCategoryButtons(context),
          const SizedBox(height: 24),
          // Placeholder for the list of services. You would replace this with a ListView.builder
          // to dynamically load data from an API.
          _buildServiceCard(context, 'Pawsome Veterinary Clinic',
              '123 Main Street, Anytown',
              'https://placehold.co/600x400/EFEFEF/333333?text=Veterinary+Clinic'),
          const SizedBox(height: 16),
          _buildServiceCard(context, 'Happy Paws Pet Shop',
              '456 Oak Avenue, Anytown',
              'https://placehold.co/600x400/EFEFEF/333333?text=Pet+Shop'),
          const SizedBox(height: 16),
          _buildServiceCard(context, 'Animals First NGO',
              '789 Pine Lane, Anytown',
              'https://placehold.co/600x400/EFEFEF/333333?text=NGO'),
        ],
      ),
    );
  }

  // Helper method to build the category buttons.
  Widget _buildCategoryButtons(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: [
          _buildCategoryButton(context, 'All', isSelected: true),
          _buildCategoryButton(context, 'Veterinarians'),
          _buildCategoryButton(context, 'Pet Shops'),
          _buildCategoryButton(context, 'NGOs'),
        ],
      ),
    );
  }

  // A reusable widget for a single category button.
  Widget _buildCategoryButton(BuildContext context, String text,
      {bool isSelected = false}) {
    return Container(
      margin: const EdgeInsets.only(right: 8),
      child: ElevatedButton(
        onPressed: () {
          // Placeholder for category selection logic
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: isSelected ? const Color(0xFFF79273) : Colors.white,
          foregroundColor: isSelected ? Colors.white : Colors.grey[700],
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
            side: isSelected
                ? BorderSide.none
                : BorderSide(color: Colors.grey.shade300, width: 1),
          ),
          elevation: 0,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        ),
        child: Text(text),
      ),
    );
  }

  // A reusable widget for a single service card.
  Widget _buildServiceCard(
      BuildContext context, String title, String address, String imageUrl) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(16),
              topRight: Radius.circular(16),
            ),
            child: Image.network(
              imageUrl,
              height: 200,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Icon(Icons.location_on_outlined,
                        size: 16, color: Colors.grey[600]),
                    const SizedBox(width: 4),
                    Text(
                      address,
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}