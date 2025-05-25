import testimonialsData from '../../data/testimonials.json';

// Tailwind background utility classes
const bgColors = [
  'bg-blue-50 dark:bg-blue-900',
  'bg-green-50 dark:bg-green-900',
  'bg-yellow-50 dark:bg-yellow-900',
  'bg-purple-50 dark:bg-purple-900',
  'bg-pink-50 dark:bg-pink-900',
  'bg-gray-100 dark:bg-gray-800',
  'bg-indigo-50 dark:bg-indigo-900',
];

function getRandomBg() {
  const index = Math.floor(Math.random() * bgColors.length);
  return bgColors[index];
}

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center">
        Testimonials
      </h1>

      {/* 2022 Testimonials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">2022</h2>
        <p className="italic">{testimonialsData["2022"].intro}</p>
        <div className="space-y-6">
          {testimonialsData["2022"].testimonials.map(({ testimonial, name }, idx) => (
            <blockquote
              key={idx}
              className={`p-4 rounded shadow-md ${getRandomBg()} transition duration-300 ease-in-out`}
            >
              <p className="italic text-lg">“{testimonial}”</p>
              <span className="block text-right font-semibold mt-2">— {name}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Earlier Testimonials */}
      <section className="space-y-6 mt-10 pt-8 border-t border-gray-400 dark:border-gray-600">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">2021 & Earlier</h2>
        <div className="space-y-6">
          {testimonialsData["2021 & Earlier"].testimonials.map(({ testimonial, name }, idx) => (
            <blockquote
              key={idx}
              className={`p-4 rounded shadow-md ${getRandomBg()} transition duration-300 ease-in-out`}
            >
              <p className="italic">“{testimonial}”</p>
              <span className="block text-right font-semibold mt-2">— {name}</span>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
