import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const images = [p1, p2, p3, p4, p5, p6];

const Projects = () => (
  <section id="projects" className="py-16 lg:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground text-center mb-12">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group">
            <img
              src={img}
              alt={`Construction project ${i + 1}`}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#" className="inline-block bg-primary hover:bg-orange-dark text-primary-foreground font-poppins font-semibold px-8 py-3 rounded transition-colors">
          View More
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
