import Image from "next/image";

export default function GallerySection({ title, subtitle, images }: any) {
  return (
    
    <div className="mt-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21473E]">{title}</h2>
        <p className="mt-3 text-[#5D6965] max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image: any) => (
          <div key={image.id} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-white border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
              <p className="text-sm font-bold">{image.title}</p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
  <Image
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
    className="object-cover"
    // Add these two lines:
    loading="eager"  // Load critical images faster
    onLoadingComplete={(img) => img.classList.add('loaded')}
  />
</div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-[#8A9B95] mt-6 italic">Hover over images to see details</p>
    </div>
    
  );
}