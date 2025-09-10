import 'package:flutter/material.dart';
import 'package:pawheal/home.dart';
import 'package:pawheal/healthcare.dart';
import 'package:pawheal/createacc.dart';
import 'package:pawheal/login.dart';

void main() {
  runApp(const PawHealApp());
}

class PawHealApp extends StatelessWidget {
  const PawHealApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PawHeal',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const LoginPage(),
        '/home': (context) => const HomePage(),
        '/healthcare': (context) => const HealthcarePage(),
        '/createacc': (context) => const CreateAccPage(),
      },
    );
  }
}

