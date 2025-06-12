import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-base-content">
      {/* Hero Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">About EduVerse 📚</h1>
      <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
        EduVerse is a knowledge-sharing platform built for learners, creators, and explorers. Our goal is to make high-quality learning accessible and community-driven.
      </p>

      {/* Mission & Vision */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
        <p className="text-base-content">
          To empower self-learners by giving them a space to find, share, and explore knowledge on various topics — from web development to AI, from design to productivity.
        </p>
      </div>

      {/* Features / Core Values */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">✨ What Makes Us Different?</h2>
        <ul className="list-disc pl-6 text-base-content space-y-2">
          <li>Community-driven knowledge exchange</li>
          <li>Tag-based article discovery</li>
          <li>Clean UI and distraction-free reading</li>
          <li>Developer and learner focused features</li>
        </ul>
      </div>

      {/* Creator / Team */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Built by Mahin</h2>
        <p className="text-base-content">
          I’m a passionate web developer and lifelong learner from Munshiganj, Bangladesh. I created EduVerse as part of my milestone project to help others learn and grow — just like I’m doing!
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to="/auth/register"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          🚀 Join the Community
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
