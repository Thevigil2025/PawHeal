import 'package:flutter/material.dart';

// This is the main screen for the user to create a new account.
class CreateAccPage extends StatelessWidget {
  const CreateAccPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // Empty app bar to maintain the top spacing and background color
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            // Placeholder for navigation back
          },
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 20),
            Text(
              'Create Account',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                    color: Theme.of(context).colorScheme.primary,
                    fontSize: 36,
                    fontWeight: FontWeight.bold,
                  ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 48),
            _buildTextField(context, 'Name', Icons.person_outline),
            const SizedBox(height: 16),
            _buildTextField(context, 'Email', Icons.mail_outline),
            const SizedBox(height: 16),
            _buildTextField(context, 'Password', Icons.lock_outline, obscureText: true),
            const SizedBox(height: 16),
            _buildTextField(context, 'Confirm Password', Icons.lock_outline, obscureText: true),
            const SizedBox(height: 24),
            _buildLegalText(context),
            const SizedBox(height: 32),
            _buildSignUpButton(context),
            const SizedBox(height: 24),
            _buildLoginText(context),
          ],
        ),
      ),
    );
  }

  // A helper method to build the text input fields
  Widget _buildTextField(BuildContext context, String label, IconData icon, {bool obscureText = false}) {
    return TextField(
      obscureText: obscureText,
      decoration: InputDecoration(
        hintText: label,
        prefixIcon: Icon(icon, color: Colors.grey[400]),
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide.none, // No border
        ),
        contentPadding: const EdgeInsets.symmetric(vertical: 16, horizontal: 16),
      ),
    );
  }

  // A helper method to build the legal text links
  Widget _buildLegalText(BuildContext context) {
    return RichText(
      textAlign: TextAlign.center,
      text: TextSpan(
        style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontSize: 12),
        children: [
          const TextSpan(
            text: 'By creating an account, you agree to our ',
            style: TextStyle(color: Colors.grey),
          ),
          TextSpan(
            text: 'Terms of Service',
            style: TextStyle(color: Theme.of(context).colorScheme.primary),
            // This would handle navigation to the Terms of Service page
          ),
          const TextSpan(
            text: ' and acknowledge that you have read our ',
            style: TextStyle(color: Colors.grey),
          ),
          TextSpan(
            text: 'Privacy Policy.',
            style: TextStyle(color: Theme.of(context).colorScheme.primary),
            // This would handle navigation to the Privacy Policy page
          ),
        ],
      ),
    );
  }

  // A helper method to build the sign up button
  Widget _buildSignUpButton(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        // Placeholder for sign up logic
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFFF79273),
        foregroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(vertical: 16),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        elevation: 0,
      ),
      child: const Text(
        'Sign Up',
        style: TextStyle(fontSize: 18),
      ),
    );
  }

  // A helper method to build the login text link
  Widget _buildLoginText(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text(
          'Already have an account? ',
          style: TextStyle(color: Colors.grey),
        ),
        GestureDetector(
          onTap: () {
            // This would handle navigation to the login page
          },
          child: Text(
            'Log in',
            style: TextStyle(
              color: Theme.of(context).colorScheme.primary,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ],
    );
  }
}