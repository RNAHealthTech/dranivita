import Image from "next/image";
import { mediaCoverage } from "@/data/mediaCoverage";

export default function MediaCoverage() {
  const item = mediaCoverage[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4b2c2c]">
            Latest Media Coverage
          </h2>
          <p className="mt-3 text-gray-600">
            Expert insights on infectious diseases and public health
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-[350px] md:h-full">
            <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-sm px-4 py-1 rounded-full">
              {item.badge}
            </span>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-sm text-gray-500 mb-2">
              Featured Article &nbsp;•&nbsp; {item.source}
            </p>

            <h3 className="text-4xl font-bold text-[#1F2937] mb-4">
              {item.title}
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              {item.excerpt}
            </p>

            <div className="flex items-center gap-6">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#5b4a4a] text-white font-semibold hover:bg-[#4a3a3a] transition"
              >
                Read Full Article →
              </a>

              <span className="text-sm text-gray-500 flex items-center gap-2">
                ⏱ {item.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Dr. Anivita Aggarwal provides expert commentary on HIV/AIDS treatment
          advances and ongoing challenges
        </p>
      </div>
    </section>
  );
}
