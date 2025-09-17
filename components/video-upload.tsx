"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X, Play } from "lucide-react"

interface VideoFile {
  file: File
  url: string
  title: string
  description: string
}

interface VideoUploadProps {
  onVideosChange: (videos: VideoFile[]) => void
  maxVideos?: number
}

export function VideoUpload({ onVideosChange, maxVideos = 5 }: VideoUploadProps) {
  const [videos, setVideos] = useState<VideoFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])

    files.forEach((file) => {
      if (file.type.startsWith("video/") && videos.length < maxVideos) {
        const url = URL.createObjectURL(file)
        const newVideo: VideoFile = {
          file,
          url,
          title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
          description: "",
        }

        setVideos((prev) => {
          const updated = [...prev, newVideo]
          onVideosChange(updated)
          return updated
        })
      }
    })

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeVideo = (index: number) => {
    setVideos((prev) => {
      // Revoke object URL to prevent memory leaks
      URL.revokeObjectURL(prev[index].url)
      const updated = prev.filter((_, i) => i !== index)
      onVideosChange(updated)
      return updated
    })
  }

  const updateVideoInfo = (index: number, field: "title" | "description", value: string) => {
    setVideos((prev) => {
      const updated = prev.map((video, i) => (i === index ? { ...video, [field]: value } : video))
      onVideosChange(updated)
      return updated
    })
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-card-foreground">Project Videos</CardTitle>
        <p className="text-sm text-muted-foreground">
          Upload videos to showcase your project in action (max {maxVideos} videos)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Button */}
        {videos.length < maxVideos && (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-32 border-2 border-dashed border-muted-foreground/25 hover:border-accent hover:bg-accent/5"
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm font-medium">Click to upload videos</span>
                <span className="text-xs text-muted-foreground">MP4, WebM, MOV up to 100MB each</span>
              </div>
            </Button>
          </div>
        )}

        {/* Video List */}
        {videos.length > 0 && (
          <div className="space-y-4">
            {videos.map((video, index) => (
              <Card key={index} className="bg-muted/30 border-border">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Video Preview */}
                    <div className="relative">
                      <video
                        className="w-full h-32 object-cover rounded-lg bg-muted"
                        poster="/video-thumbnail.png"
                      >
                        <source src={video.url} type={video.file.type} />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white/80" />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 h-6 w-6 p-0"
                        onClick={() => removeVideo(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Video Info */}
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor={`video-title-${index}`} className="text-sm font-medium">
                          Video Title
                        </Label>
                        <Input
                          id={`video-title-${index}`}
                          value={video.title}
                          onChange={(e) => updateVideoInfo(index, "title", e.target.value)}
                          placeholder="Enter video title"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`video-description-${index}`} className="text-sm font-medium">
                          Description
                        </Label>
                        <Textarea
                          id={`video-description-${index}`}
                          value={video.description}
                          onChange={(e) => updateVideoInfo(index, "description", e.target.value)}
                          placeholder="Describe what this video shows"
                          rows={2}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {videos.length >= maxVideos && (
          <p className="text-sm text-muted-foreground text-center">
            Maximum number of videos reached ({maxVideos}/{maxVideos})
          </p>
        )}
      </CardContent>
    </Card>
  )
}
