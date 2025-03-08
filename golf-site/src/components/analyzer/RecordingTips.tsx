import { useState } from "react"
import { FaInfoCircle, FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function RecordingTips() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-blue-50 rounded-xl border border-blue-200 mb-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
      >
        <div className="flex items-center">
          <FaInfoCircle className="text-blue-500 mr-2 h-5 w-5" />
          <span className="font-medium text-blue-900">Tips for recording the perfect golf swing</span>
        </div>
        <div>
          {isOpen ? <FaChevronUp className="h-4 w-4 text-blue-500" /> : <FaChevronDown className="h-4 w-4 text-blue-500" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-sm text-blue-800">
          <ul className="list-disc pl-5 space-y-2">
            <li>Record from face-on (front) or down-the-line (side) angle for best analysis</li>
            <li>Ensure good lighting - record outdoors during daylight if possible</li>
            <li>Keep the camera stable - use a tripod or steady surface</li>
            <li>Position the camera at hip height for optimal angle</li>
            <li>Include your full body and club in the frame</li>
            <li>Capture your complete swing - from setup through follow-through</li>
            <li>Wear contrasting clothing to your background for better visibility</li>
          </ul>
        </div>
      )}
    </div>
  )
}