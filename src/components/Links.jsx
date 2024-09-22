import React from 'react'

function Links() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <a href="#" className="group block text-center">
              <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/download-c.svg" alt="Downloads" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Downloads</h3>
              <p className="text-sm text-gray-600 mb-3">Get the latest SDKs <br className="hidden sm:inline"/> and beta <br className="hidden sm:inline"/> operating systems <br className="hidden sm:inline"/> for all <br className="hidden sm:inline"/> Apple platforms.</p>
              <p className="text-sm text-blue-500 group-hover:underline">Download resources &gt;</p>
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <a href="#" className="group block text-center">
              <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/documentation-c.svg" alt="Documentation" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-gray-600 mb-3">Browse the latest documentation <br className="hidden sm:inline"/> including API reference, articles, <br className="hidden sm:inline"/> and sample code.</p>
              <p className="text-sm text-blue-500 group-hover:underline">Read documentation &gt;</p>
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <a href="#" className="group block text-center">
              <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/play-c.svg" alt="Videos" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Videos</h3>
              <p className="text-sm text-gray-600 mb-3">Learn about the latest <br className="hidden sm:inline"/> technologies presented at Apple <br className="hidden sm:inline"/> developer events.</p>
              <p className="text-sm text-blue-500 group-hover:underline">Watch videos &gt;</p>
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <a href="#" className="group block text-center">
              <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/forum-c.svg" alt="Forums" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Forums</h3>
              <p className="text-sm text-gray-600 mb-3">Ask questions and discuss <br className="hidden sm:inline"/> development topics with Apple <br className="hidden sm:inline"/> engineers and other developers.</p>
              <p className="text-sm text-blue-500 group-hover:underline">View forums &gt;</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links