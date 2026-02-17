import { useState, useEffect } from "react";
import { dummyThumbnails, type IThumbnail } from "../assets/assets";
import SoftBackdrop from "../components/SoftBackdrop";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; // ✅ import Link
import { ArrowUpRightIcon } from "lucide-react";

const MyGeneration = () => {
  const navigate = useNavigate();

  const aspectRatioClassMap: Record<string, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    setLoading(true);
    setThumbnails(dummyThumbnails as IThumbnail[]);
    setLoading(false);
  };

  const handleDownload = (image_url: string) => {
    const link = document.createElement("a");
    link.href = image_url;
    link.download = "thumbnail.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id: string) => {
    console.log(`Delete thumbnail with ID: ${id}`);
    setThumbnails((prev) => prev.filter((t) => String(t._id) !== String(id)));
  };

  useEffect(() => {
    fetchThumbnails();
  }, []);

  return (
    <>
      <SoftBackdrop />
      <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-200">My Generations</h1>
          <p className="text-sm text-gray-400 mt-1">
            View and manage your generated thumbnails
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/6 border border-white/10 animate-pulse h-[260px]"
              />
            ))}
            <p className="text-gray-400">Loading your thumbnails...</p>
          </div>
        ) : thumbnails.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <p className="text-gray-400 text-lg">No thumbnails yet</p>
            <p className="text-zinc-400 text-sm mt-2">
              Generate your first thumbnail to see it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumbnails.map((thumb) => {
              const aspectClass =
                aspectRatioClassMap[thumb.aspect_ratio] || "aspect-square";

              return (
                <motion.div
                  key={thumb._id}
                  onClick={() => navigate(`/generate/${thumb._id}`)}
                  className="rounded-2xl bg-white/10 border border-white/20 shadow-xl p-4 space-y-4 cursor-pointer hover:bg-white/20 transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`relative overflow-hidden rounded-t-2xl ${aspectClass} bg-black`}
                  >
                    {thumb.image_url ? (
                      <img
                        src={thumb.image_url}
                        alt={thumb.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        {thumb.isgenerating ? (
                          <p className="text-gray-400">Generating...</p>
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </div>
                    )}

                    {thumb.isgenerating && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <p className="text-white">Generating...</p>
                      </div>
                    )}
                  </div>

                  <h2 className="text-white font-semibold">{thumb.title}</h2>

                  <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-white/8">
                      {thumb.style}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/8">
                      {thumb.color_scheme}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/8">
                      {thumb.aspect_ratio}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">
                    {new Date(thumb.created_at).toDateString()}
                  </p>

                  <div className="flex gap-2 items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(thumb.image_url);
                      }}
                      className="px-3 py-1 bg-pink-600 hover:bg-zinc-400 text-white rounded-lg text-sm"
                    >
                      Download
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(String(thumb._id));
                      }}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm"
                    >
                      Delete
                    </button>
                    {/* ✅ Preview link */}
                    <Link
                      to={`/preview?thumbnail_url=${thumb.image_url}&title=${thumb.title}`}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center"
                    >
                      <ArrowUpRightIcon className="size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-all" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;
