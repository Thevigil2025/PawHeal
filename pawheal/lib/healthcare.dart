
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class HealthcarePage extends StatefulWidget {
  const HealthcarePage({super.key});

  @override
  State<HealthcarePage> createState() => _HealthcarePageState();
}

class _HealthcarePageState extends State<HealthcarePage> {
  late GoogleMapController mapController;

  final LatLng _center = const LatLng(40.7128, -74.0060); // NYC coords for demo

  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('PetCare Finder'),
        backgroundColor: Colors.deepOrange.shade100,
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(12.0),
        children: [
          ToggleButtons(
            borderRadius: BorderRadius.circular(12),
            isSelected: [true, false],
            onPressed: (index) {},
            children: const [
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 24),
                child: Text('Veterinarians'),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 24),
                child: Text('NGOs'),
              ),
            ],
          ),
          const SizedBox(height: 16),
          TextField(
            decoration: InputDecoration(
              prefixIcon: const Icon(Icons.search),
              hintText: 'Search by name or service...',
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              filled: true,
              fillColor: Colors.pink.shade50,
            ),
          ),
          const SizedBox(height: 10),
          DropdownButtonFormField<String>(
            items: const [
              DropdownMenuItem(value: "5", child: Text("Within 5 km")),
              DropdownMenuItem(value: "10", child: Text("Within 10 km")),
            ],
            onChanged: (val) {},
            decoration: InputDecoration(
              prefixIcon: const Icon(Icons.location_on),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              filled: true,
              fillColor: Colors.pink.shade50,
            ),
          ),
          const SizedBox(height: 10),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(backgroundColor: Colors.pinkAccent.shade100),
            child: const Text("Find Nearby"),
          ),
          const SizedBox(height: 24),
          const Text("Veterinarians Near You", style: TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          vetCard(),
          const SizedBox(height: 20),
          const Text("Veterinarians Map", style: TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          SizedBox(
            height: 300,
            child: GoogleMap(
              onMapCreated: _onMapCreated,
              initialCameraPosition: CameraPosition(
                target: _center,
                zoom: 12.0,
              ),
              markers: {
                const Marker(markerId: MarkerId("vet1"), position: LatLng(40.7128, -74.0060)),
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget vetCard() {
    return Card(
      elevation: 4,
      margin: const EdgeInsets.symmetric(vertical: 8),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network("https://via.placeholder.com/150", height: 150, width: double.infinity, fit: BoxFit.cover),
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text("Healthy Pets Veterinary Center", style: TextStyle(fontWeight: FontWeight.bold)),
                Text("3.8 km", style: TextStyle(color: Colors.pink)),
              ],
            ),
            const Text("Specialist Veterinary Care", style: TextStyle(color: Colors.pinkAccent)),
            const SizedBox(height: 6),
            Row(children: const [Icon(Icons.star, color: Colors.orange), Text(" 4.2")]),
            const SizedBox(height: 6),
            const Text("📍 789 Whisker Road, Pawtown"),
            const Text("📞 (555) 456-7890"),
            const Text("⏰ 8:00 AM - 8:00 PM"),
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(backgroundColor: Colors.pink.shade100),
              child: const Text("View Details"),
            ),
          ],
        ),
      ),
    );
  }
}
