import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        title: const Text('MediScan', style: TextStyle(color: Colors.deepPurple, fontWeight: FontWeight.bold)),
        actions: const [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 12),
            child: Center(child: Text('Home', style: TextStyle(color: Colors.black))),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 12),
            child: Center(child: Text('About', style: TextStyle(color: Colors.black))),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 12),
            child: Center(child: Text('Help', style: TextStyle(color: Colors.black))),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text("Analysis Results",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            const Text("Based on the image, we've identified treatment options",
              style: TextStyle(fontSize: 16, color: Colors.grey),
            ),
            const SizedBox(height: 16),

            // Uploaded Image Card
            Card(
              color: const Color(0xFFFEEFEF),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text("Uploaded Image",
                        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black54)),
                    const SizedBox(height: 8),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Image.asset(
                        'assets/cat.jpg', // Replace with your uploaded image path or network image
                        height: 200,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),

            // Detected Condition
            const Text("Detected Condition", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black54)),
            const SizedBox(height: 6),
            const Text("Minor Abrasion",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            const SizedBox(height: 6),
            const Text(
              "Our analysis indicates a minor surface abrasion with slight inflammation. This type of injury typically heals within 7-10 days with proper care.",
              style: TextStyle(fontSize: 15, color: Colors.black87),
            ),
            const SizedBox(height: 16),

            // Warning Message
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: const Color(0xFFFFF3CD),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Text(
                "⚠️ This is an automated analysis and not a medical diagnosis. Consult a healthcare professional for proper medical advice.",
                style: TextStyle(fontSize: 14, color: Colors.black87),
              ),
            ),
            const SizedBox(height: 20),

            // Recommended Treatment
            const Text("Recommended Treatment",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black54)),
            const SizedBox(height: 10),

            // Treatment Tiles
            treatmentTile("Antiseptic", "Betadine Solution", "Clean the affected area twice daily", Icons.local_hospital),
            treatmentTile("Pain Relief", "Ibuprofen 400mg", "Take one tablet every 6-8 hours after meals", Icons.medical_services),
            treatmentTile("Topical Treatment", "Antibiotic Ointment", "Apply a thin layer to the affected area 3 times daily", Icons.healing),

            const SizedBox(height: 24),

            // Scan Another Image Button
            Center(
              child: ElevatedButton.icon(
                icon: const Icon(Icons.arrow_back),
                label: const Text("Scan Another Image"),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFFFB6A3),
                  foregroundColor: Colors.black,
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                ),
                onPressed: () {
                  // You can navigate to upload screen or reset
                  Navigator.pop(context);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget treatmentTile(String type, String title, String desc, IconData icon) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      margin: const EdgeInsets.symmetric(vertical: 6),
      child: ListTile(
        leading: Icon(icon, color: Colors.deepPurple),
        title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(desc),
        trailing: Text(type.toUpperCase(), style: const TextStyle(fontSize: 12, color: Colors.deepPurple)),
      ),
    );
  }
}
