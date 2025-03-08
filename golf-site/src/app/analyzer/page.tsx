"use client"

import { useState } from "react"
import Link from "next/link"
import { FaUpload, FaTags, FaPlay, FaPause, FaInfoCircle } from "react-icons/fa"
import UploadError from "@/components/analyzer/UploadError"
import RecordingTips from "@/components/analyzer/RecordingTips"

export default function AnalyzerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [inputTag, setInputTag] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setError(null)
    
    if (file) {
      // Check file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        setError("Video file is too large. Maximum size is 100MB.")
        return
      }
      
      // Check file type
      if (!['video/mp4', 'video/quicktime'].includes(file.type)) {
        setError("Please upload an MP4 or MOV video file.")
        return
      }
      
      setSelectedFile(file)
      
      // Create a preview URL for the video
      const url = URL.createObjectURL(file)
      setPreview(url)
      
      // Get video duration when metadata is loaded
      const video = document.createElement('video')
      video.onloadedmetadata = () => {
        if (video.duration > 30) {
          setError("Video length exceeds 30 seconds. Please upload a shorter clip.")
          // We still keep the file but warn the user
        }
      }
      video.src = url
    }
  }

  // Handle adding a new tag
  const handleAddTag = () => {
    if (inputTag.trim() !== "" && !tags.includes(inputTag.trim())) {
      setTags([...tags, inputTag.trim()])
      setInputTag("")
    }
  }

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  // Handle tag input keypress (add tag on Enter)
  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  // Handle video playback toggle
  const handlePlayToggle = () => {
    const videoElement = document.getElementById("preview-video") as HTMLVideoElement
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause()
      } else {
        videoElement.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Suggested tags for quick selection
  const suggestedTags = [
    "Driver", "Iron", "Wedge", "Putter",
    "Slice", "Hook", "Distance", "Accuracy",
    "Beginner", "Intermediate", "Advanced"
  ]

  // Add suggested tag
  const handleAddSuggestedTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      // Here you would normally upload the file to your server
      console.log({
        file: selectedFile,
        tags,
        description
      })
      
      setIsSubmitting(false)
      // Redirect or show success message
      alert("Swing analysis submitted! We'll analyze your swing and provide feedback soon.")
    }, 2000)
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10">
        <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
          Swing Analyzer
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Upload Your Swing</h1>
        <p className="mt-2 text-lg text-gray-600 max-w-3xl">
          Upload a video of your golf swing (30 seconds max), add relevant tags, and provide a brief description. 
          Our AI will analyze your swing and provide personalized feedback.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {error && <UploadError message={error} onDismiss={() => setError(null)} />}
        <RecordingTips />
        {/* Video Upload Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-black">Video Upload</h2>
          
          {!preview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="flex flex-col items-center">
                <FaUpload className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">Upload a video of your swing (MP4, MOV, up to 30 seconds)</p>
                <input
                  type="file"
                  id="video-upload"
                  accept="video/mp4,video/quicktime"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="video-upload"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
                >
                  Choose Video
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video 
                  id="preview-video"
                  src={preview}
                  className="w-full h-full object-contain"
                  onEnded={() => setIsPlaying(false)}
                />
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80"
                >
                  {isPlaying ? <FaPause className="h-5 w-5" /> : <FaPlay className="h-5 w-5" />}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {selectedFile?.name} ({(selectedFile?.size || 0) / (1024 * 1024) < 1 
                    ? `${Math.round((selectedFile?.size || 0) / 1024)} KB` 
                    : `${((selectedFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB`})
                </p>
                <input
                  type="file"
                  id="video-upload-replace"
                  accept="video/mp4,video/quicktime"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="video-upload-replace"
                  className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer"
                >
                  Replace video
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Tags Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-black">Tags</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaTags className="h-5 w-5 text-gray-400" />
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputTag}
                  onChange={(e) => setInputTag(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  placeholder="Add tags (e.g., driver, iron, putting)"
                  className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:outline-none sm:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={handleAddTag}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Add
              </button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm">
                    <span className="text-emerald-800">{tag}</span>
                    <button 
                      type="button"
                      onClick={() => handleRemoveTag(tag)} 
                      className="ml-2 text-emerald-600 hover:text-emerald-800"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Suggested tags:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleAddSuggestedTag(tag)}
                    disabled={tags.includes(tag)}
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                      tags.includes(tag)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Adding relevant tags helps our AI better understand your swing context.
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-black">Description</h2>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 300))}
              rows={4}
              placeholder="Briefly describe what you're working on (e.g., 'Working on my driver swing, trying to fix my slice')"
              className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:outline-none sm:text-sm"
              maxLength={300}
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              {description.length}/300 characters
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={!selectedFile || isSubmitting || description.trim() === ''}
            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit for Analysis"}
          </button>
          {!selectedFile && (
            <p className="text-sm text-red-500 mt-2">Please upload a video to continue</p>
          )}
          {description.trim() === '' && selectedFile && (
            <p className="text-sm text-red-500 mt-2">Please add a brief description</p>
          )}
        </div>
      </form>
    </main>
  )
}