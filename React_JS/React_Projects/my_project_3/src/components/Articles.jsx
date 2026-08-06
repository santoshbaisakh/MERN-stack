import React from 'react'
import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";

const articles = [
    {
        image: article1,
        title: "Disease detection, check up in the laboratory",
        description:
        "In this case, the role of the health laboratory is very important to doa disease detection..."
    },
    {
        image: article2,
        title: "Herbal medicines that are safe for consumption",
        description: 
        "Herbal medicine is very widely used at this time because of its very good for your health..."
    },
    {
        image: article3,
        title: "Natural care for healthy facial skin",
        description:
        "A healthy lifestyle should start from now and also for your skin health.There are some..."
    },
];

const Articles = () => {
  return (
   <section className="max-w-7xl mx-auto px-6 py-24">
    {/* Heading */}

    <div className="text-center">
        <h2 className="text-5xl font-bold">
            Check out our latest article
        </h2>
        <div className="w-20 h-1 bg-black mx-auto mt-6 rounded-full"></div>
    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                    <h3 className="text-2xl font-bold leading-8">
                        {article.title}
                    </h3>
                    <p className="text-gray-500 mt-5 leading-7">
                        {article.description}
                    </p>
                    <button className="mt-8 text-[#458FF6] font-semibold hover:underline">
                       Read more →
                    </button>
                </div>
            </div>
        ))}
    </div>
    {/* View All Button */}

    <div className="text-center mt-16">
        <button className="border-2 border-[#458FF6] text-[#458FF6] px-10 py-4 rounded-full hover:bg-[#458FF6] hover:text-white duration-300">
            View all
        </button>
    </div>
   </section>
  )
}

export default Articles
