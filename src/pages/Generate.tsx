import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SoftBackdrop from '../components/SoftBackdrop';
import PreviewPanel from '../components/PreviewPanel';
import { dummyThumbnails } from '../assets/assets';

const Generate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [style, setStyle] = useState('modern');
  const [color, setColor] = useState('pink');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch existing thumbnail data if an ID is provided
  useEffect(() => {
  if (!id) return;

  setLoading(true);

  const thumbnailData = dummyThumbnails.find((t) => String(t._id) === String(id));

  if (!thumbnailData) {
    setError('Thumbnail not found');
    setLoading(false);
    return;
  }

  setTitle(thumbnailData.title);
  setAspectRatio(thumbnailData.aspect_ratio);
  setStyle(thumbnailData.style);
  setColor(thumbnailData.color_scheme);
  setAdditionalDetails(thumbnailData.user_prompt || '');
  setThumbnail(thumbnailData.image_url || null);

  setLoading(false);
}, [id]);


  // Generate new thumbnail
  const handleGenerate = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setThumbnail('generated');
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <SoftBackdrop />
      <div className="pt-24 min-h-screen pb-8">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-5xl font-bold text-white text-center">Generate Thumbnail</h1>
            <p className="text-gray-400 text-center mt-2">Create stunning LinkedIn thumbnails in seconds</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
            {/* Left panel - Input fields */}
            <div className={`space-y-6 ${id ? "pointer-events-none opacity-50" : "pointer-events-auto"}`}>
              <div className="p-8 rounded-2xl bg-white/10 border border-white/20 shadow-xl space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Customize Your Thumbnail</h2>
                  <p className="text-gray-400 mt-1">Fill in the details below to create your thumbnail.</p>
                </div>

                <div className="space-y-5">
                  {/* Title */}
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-white">
                      Title <span className="text-gray-400">({title.length}/100)</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => e.target.value.length <= 100 && setTitle(e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="e.g., 10 Tips for Better Sleep"
                    />
                  </div>

                  {/* Aspect ratio */}
                  <div className="space-y-2">
                    <label htmlFor="aspectRatio" className="block text-sm font-medium text-white">
                      Aspect Ratio
                    </label>
                    <select
                      id="aspectRatio"
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '20px', paddingRight: '32px' }}
                    >
                      <option value="1:1" style={{backgroundColor: '#ec4899', color: 'white'}}>1:1 (Square)</option>
                      <option value="16:9" style={{backgroundColor: '#ec4899', color: 'white'}}>16:9 (Widescreen)</option>
                      <option value="4:5" style={{backgroundColor: '#ec4899', color: 'white'}}>4:5 (Portrait)</option>
                    </select>
                  </div>

                  {/* Style */}
                  <div className="space-y-2">
                    <label htmlFor="style" className="block text-sm font-medium text-white">
                      Style
                    </label>
                    <select
                       id="style"
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '20px', paddingRight: '32px' }}
                    >
                      <option value="modern" style={{backgroundColor: '#ec4899', color: 'white'}}>Modern</option>
                      <option value="minimal" style={{backgroundColor: '#ec4899', color: 'white'}}>Minimal</option>
                      <option value="bold" style={{backgroundColor: '#ec4899', color: 'white'}}>Bold</option>
                    </select>
                  </div>

                  {/* Color scheme */}
                  <div className="space-y-2">
                    <label htmlFor="color" className="block text-sm font-medium text-white">
                      Color Theme
                    </label>
                    <select
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none cursor-pointer"
                      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '20px', paddingRight: '32px' }}
                    >
                      <option value="pink" style={{backgroundColor: '#ec4899', color: 'white'}}>Vibrant</option>
                      <option value="blue" style={{backgroundColor: '#ec4899', color: 'white'}}>Cool</option>
                      <option value="green" style={{backgroundColor: '#ec4899', color: 'white'}}>Fresh</option>
                      <option value="dark" style={{backgroundColor: '#ec4899', color: 'white'}}>Dark</option>
                    </select>
                  </div>

                  {/* Additional prompts */}
                  <div className="space-y-2">
                    <label htmlFor="additionalDetails" className="block text-sm font-medium text-white">
                      Additional Prompts <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="additionalDetails"
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Add extra instructions for the AI..."
                    />
                  </div>
                </div>

                {/* Generate button */}
                {!id && (
                <button
                  onClick={handleGenerate}
                  className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  disabled={loading || !!id || !title.trim()}
                >
                  {loading ? "Generating..." : "Generate Thumbnail"}
                </button>
                )}
              </div>
            </div>

        {/* Right panel - Thumbnail preview */}
           <div className="flex items-center justify-center">
              <div className="p-8 rounded-2xl bg-white/10 border border-white/20 shadow-xl w-full">
                <h2 className="text-xl font-semibold text-white mb-6 text-center">Preview</h2>
                
                <PreviewPanel
                  thumbnail={thumbnail}
                  isLoading={loading}
                  aspectRatio={aspectRatio}
                  onRegenerate={handleGenerate}
                />

                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;
