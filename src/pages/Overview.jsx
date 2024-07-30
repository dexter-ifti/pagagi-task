import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
    <div className="text-teal-400 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Overview = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to PGAGI's Assistant</h1>
          <p className="text-xl text-gray-400">Your AI-Powered Voice Assistant Platform</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-teal-400 mb-6">About VAPI</h2>
          <p className="text-gray-300 mb-4">
            VAPI is a cutting-edge platform that allows you to create, manage, and deploy AI-powered voice assistants for your applications. Whether you're building a customer service bot, an interactive voice response system, or a voice-controlled application, VAPI provides the tools and flexibility you need.
          </p>
          <p className="text-gray-300">
            With support for multiple languages and voices, advanced natural language processing, and seamless integration options, VAPI empowers you to create voice experiences that engage and delight your users.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Create Campaigns"
            description="Design and launch voice interaction campaigns tailored to your needs."
            icon="🚀"
          />
          <FeatureCard
            title="Multiple Languages"
            description="Support for a wide range of languages to reach a global audience."
            icon="🌐"
          />
          <FeatureCard
            title="Voice Selection"
            description="Choose from a variety of voices to match your brand personality."
            icon="🎙️"
          />
          <FeatureCard
            title="Call Analytics"
            description="Gain insights from call data to improve your voice interactions."
            icon="📊"
          />
          <FeatureCard
            title="Custom Scripts"
            description="Create detailed scripts to guide your AI through conversations."
            icon="📝"
          />
          <FeatureCard
            title="Integration Ready"
            description="Easily integrate VAPI into your existing applications and workflows."
            icon="🔗"
          />
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-teal-400 mb-6">Ready to Get Started?</h2>
          <Link
            to="/create"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out inline-block"
          >
            Create Your First Campaign
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Overview;