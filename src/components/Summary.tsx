'use client';
import { FaCalendar, FaRocket, FaBrain, FaIndustry } from 'react-icons/fa';

export default function Summary() {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">GPT-5 at a Glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryItem 
          icon={<FaCalendar className="text-pink-400" />}
          title="Potential Release"
          content="Estimates range from December 2024 to Q2 2025, with some predictions as late as December 2025"
        />
        <SummaryItem 
          icon={<FaRocket className="text-pink-400" />}
          title="Key Advancements"
          content="Significantly improved reasoning abilities, more human-like communication, enhanced multimodal capabilities"
        />
        <SummaryItem 
          icon={<FaBrain className="text-pink-400" />}
          title="AI Capabilities"
          content="Potential for PhD-level intelligence, major leap in capabilities comparable to GPT-3 to GPT-4 transition"
        />
        <SummaryItem 
          icon={<FaIndustry className="text-pink-400" />}
          title="Potential Impact"
          content="Transformative changes in AI reasoning and problem-solving across various domains, possibly approaching human-like intelligence"
        />
      </div>
    </div>
  );
}

function SummaryItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-purple-200">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
}
