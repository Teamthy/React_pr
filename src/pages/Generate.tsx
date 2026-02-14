import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SoftBackdrop from '../components/SoftBackdrop';

const Generate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [style, setStyle] = useState('modern');
  const [color, setColor] = useState('pink');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate thumbnail generation
    setTimeout(() => {
      setThumbnail('generated');
      setLoading(false);
    }, 2000);
  };

  const getThumbnailDimensions = () => {
    const ratios = {
      '1:1': { width: 400, height: 400 },
      '16:9': { width: 600, height: 337 },
      '4:5': { width: 320, height: 400 },
    };
    return ratios[aspectRatio as keyof typeof ratios];
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
                  <p className="text-gray-400 mt-1">
                    Fill in the details below to create your thumbnail.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Title input with character count */}
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-white">
                      Title <span className="text-gray-400">({title.length}/100)</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => {
                        if (e.target.value.length <= 100) setTitle(e.target.value);
                      }}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter thumbnail title"
                    />
                  </div>

                  {/* Aspect ratio selection */}
                 const [aspectRatio, setAspectRatio] = useState<AspectRatios>("1:1");

<AspectRatioSelector 
  selectedAspectRatio={aspectRatio} 
  onChange={setAspectRatio} 
/>


                  {/* Style selection */}
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

                  {/* Color selection */}
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
                      <option value="pink" style={{backgroundColor: '#30051a', color: 'white'}}>Pink</option>
                      <option value="blue" style={{backgroundColor: '#30051a', color: 'white'}}>Blue</option>
                      <option value="green" style={{backgroundColor: '#30051a', color: 'white'}}>Green</option>
                      <option value="dark" style={{backgroundColor: '#30051a', color: 'white'}}>Dark</option>
                    </select>
                  </div>

                  {/* Additional details input */}
                  <div className="space-y-2">
                    <label htmlFor="additionalDetails" className="block text-sm font-medium text-white">
                      Additional Details <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="additionalDetails"
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter additional details for the thumbnail"
                    />
                  </div>
                </div>

                {/* Generate button */}
                <button
                  onClick={handleGenerate}
                  className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  disabled={loading || !!id || !title.trim()}
                >
                  {loading ? "Generating..." : "Generate Thumbnail"}
                </button>
              </div>
            </div>

            {/* Right panel - Thumbnail preview */}
            <div className="flex items-center justify-center">
              <div className="p-8 rounded-2xl bg-white/10 border border-white/20 shadow-xl w-full">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Preview</h3>
                {thumbnail ? (
                  <div className="flex justify-center items-center">
                    <div
                      className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-center p-4"
                      style={{
                        width: `${getThumbnailDimensions().width}px`,
                        height: `${getThumbnailDimensions().height}px`,
                      }}
                    >
                      <div className="text-center">
                        <p className="text-lg sm:text-2xl font-bold">{title}</p>
                        {additionalDetails && <p className="text-xs sm:text-sm mt-2 opacity-80">{additionalDetails}</p>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center"
                    style={{
                      width: `${getThumbnailDimensions().width}px`,
                      height: `${getThumbnailDimensions().height}px`,
                      margin: '0 auto',
                    }}
                  >
                    <p className="text-gray-400 text-center">
                      {id ? "Preview disabled" : "Your thumbnail will appear here"}
                    </p>
                  </div>
                )}
                {thumbnail && (
                  <button className="w-full mt-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-semibold">
                    Download
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;
