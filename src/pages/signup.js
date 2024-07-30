

import RegisterForm from '@/components/forms/registerForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to YourAppName</h2>
          <p className="text-lg mb-8">A better way to manage your tasks and projects with ease. Sign in to get started!</p>
          <RegisterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
