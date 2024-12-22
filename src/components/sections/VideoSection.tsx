import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See What You Can Achieve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our quick demo to see how our AI-powered calling system automates your inbound and outbound communications inside your business.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div 
            className="aspect-video bg-gray-900 relative cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Replace this with your video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-75 transition-opacity" />
            <Button
              variant="secondary"
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/90 hover:bg-white group-hover:scale-110 transition-transform"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="aspect-video">
              {/* Replace the src with your actual video URL */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoSection;