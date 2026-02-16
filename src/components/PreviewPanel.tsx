import { Loader2Icon, DownloadIcon, RefreshCwIcon } from "lucide-react";

interface PreviewPanelProps {
  thumbnail: string | null;
  isLoading: boolean;
  aspectRatio: string;
  onRegenerate: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ thumbnail, isLoading, aspectRatio, onRegenerate }) => {
  const aspectDimensions: Record<string, { width: number; height: number }> = {
    "1:1": { width: 400, height: 400 },
    "16:9": { width: 600, height: 337 },
    "4:5": { width: 320, height: 400 },
  };

  const dims = aspectDimensions[aspectRatio] || { width: 400, height: 400 };

  // Helper to trigger download
  const handleDownload = () => {
    if (!thumbnail) return;
    const link = document.createElement("a");
    link.href = thumbnail;
    link.download = "thumbnail.png";
    link.click();
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl space-y-4">
      <div
        className="w-full rounded-2xl bg-white/10 border border-white/20 shadow-xl flex items-center justify-center overflow-hidden"
        style={{
          width: `${dims.width}px`,
          height: `${dims.height}px`,
          margin: '0 auto',
        }}
      >
        {/* === Thumbnail available state === */}
        {thumbnail && !isLoading && (
          <img
            src={thumbnail}
            alt="Generated thumbnail"
            className="w-full h-full object-cover rounded-2xl"
          />
        )}

        {/* === Loading state === */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <Loader2Icon className="w-6 h-6 text-white animate-spin" />
            <p className="text-white">Generating thumbnail...</p>
            <p className="text-gray-400 text-sm">This may take a few seconds</p>
          </div>
        )}

        {/* === Empty state (no thumbnail, not loading) === */}
        {!thumbnail && !isLoading && (
          <div className="text-center space-y-3">
            <p className="text-gray-400">Your thumbnail will appear here</p>
            <p className="text-gray-500 text-sm px-4">
              Thumblify transforms your ideas into professional LinkedIn-ready thumbnails faster, cleaner, smarter.
            </p>
          </div>
        )}
      </div>

      {/* === Action buttons (only when thumbnail exists) === */}
      {thumbnail && !isLoading && (
        <div className="flex justify-center gap-4">
          {/* Download button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition font-semibold"
          >
            <DownloadIcon className="w-5 h-5" />
            Download
          </button>

          {/* Regenerate button */}
          <button
            onClick={onRegenerate}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition font-semibold"
          >
            <RefreshCwIcon className="w-5 h-5" />
            Regenerate
          </button>
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
