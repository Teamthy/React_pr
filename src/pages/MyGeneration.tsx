import { useState, useEffect } from "react";
import { dummyThumbnails, type IThumbnail } from "../assets/assets";
import SoftBackdrop from "../components/SoftBackdrop";

const MyGeneration = () => {
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    /*setLoading(true);
    setThumbnails(dummyThumbnails as IThumbnail[]);
    setLoading(true);*/
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
    // ✅ implement actual delete logic later
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
          // ✅ Empty state
          <div className="flex flex-col items-center justify-center text-center py-16">
            <p className="text-gray-400 text-lg">No thumbnails yet</p>
            <p className="text-zinc-400 text-sm mt-2">
              Generate your first thumbnail to see it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumbnails.map((thumb) => (
              <div
                key={thumb._id}
                className="rounded-2xl bg-white/10 border border-white/20 shadow-xl p-4 space-y-4"
              >
                <img
                  src={thumb.image_url}
                  alt={thumb.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-white font-semibold">{thumb.title}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownload(thumb.image_url)}
                    className="px-3 py-1 bg-pink-600 hover:bg-zinc-400 text-white rounded-lg text-sm"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(String(thumb._id))}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;
