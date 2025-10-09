import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Engineer at Google",
    image: "SC",
    rating: 5,
    text: "Atkind's courses transformed my career. The hands-on projects and expert instructors gave me the confidence to land my dream job in AI.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Data Scientist",
    image: "MR",
    rating: 5,
    text: "The best investment I've made in my professional development. The curriculum is cutting-edge and directly applicable to real-world scenarios.",
  },
  {
    name: "Emily Watson",
    role: "ML Researcher",
    image: "EW",
    rating: 5,
    text: "Outstanding quality content! The instructors break down complex AI concepts into digestible lessons. Highly recommend for anyone serious about AI.",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    image: "DK",
    rating: 5,
    text: "Atkind gave me the AI skills to build my own startup. The practical approach and supportive community made all the difference.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their careers with Atkind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-8 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
