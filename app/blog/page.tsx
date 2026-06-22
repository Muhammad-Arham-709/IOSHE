"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading blog posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="bg-[#F4F1EA] min-h-screen">
        <TopBar />
        <Navbar />
        <div className="text-center py-32">Loading posts...</div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#F4F1EA] min-h-screen">
      <TopBar />
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-[#21473E] to-[#18352E] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Insights on environmental assessments, ISO certifications, and OHS training in Pakistan.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-[#EAF5F1] relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#2F6F5F]/20 to-[#21473E]/20 flex items-center justify-center">
                    <span className="text-[#2F6F5F] font-semibold">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#8A9B95] mb-3">{post.date}</div>
                  <h2 className="text-xl font-bold text-[#21473E] mb-2 group-hover:text-[#2F6F5F] transition">
                    {post.title}
                  </h2>
                  <p className="text-[#5D6965]">{post.excerpt}</p>
                  <div className="mt-4 text-[#2F6F5F] font-semibold text-sm">Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}