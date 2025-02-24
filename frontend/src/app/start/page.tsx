'use client'

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { Upload, Link, File } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { LoadingOverlay } from "@/components/loading-overlay"

interface UploadedFile {
  name: string
  content: string
  uploadDate: string
  source: "file" | "url"
}

export default function StartPage() {
  const router = useRouter()
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dragActive, setDragActive] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles")
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles))
    }
    const collection = localStorage.getItem('postmanCollection')
    if (collection) {
      router.push('/summary')
    } else {
      setIsLoading(false)
    }
  }, [router])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setIsLoading(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        JSON.parse(content) // Validate JSON
        
        setTimeout(() => {
          addNewFile(file.name, content, "file")
          localStorage.setItem('postmanCollection', content)
          setIsLoading(false)
          router.push('/summary')
        }, 3000)
      } catch (error) {
        setIsLoading(false)
        alert("Invalid JSON file")
      }
    }
    reader.readAsText(file)
  }

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsLoading(true)
    try {
      const response = await fetch(url)
      const content = await response.text()
      JSON.parse(content) // Validate JSON

      setTimeout(() => {
        const fileName = url.split("/").pop() || "fetched-json"
        addNewFile(fileName, content, "url")
        localStorage.setItem('postmanCollection', content)
        setUrl("")
        setIsLoading(false)
        router.push('/summary')
      }, 3000)
    } catch (error) {
      setIsLoading(false)
      alert("Failed to fetch or parse JSON from the provided URL")
    }
  }

  const addNewFile = (name: string, content: string, source: "file" | "url") => {
    const newFile: UploadedFile = {
      name,
      content,
      uploadDate: new Date().toISOString(),
      source,
    }
    const updatedFiles = [...files, newFile]
    setFiles(updatedFiles)
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles))
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading && <LoadingOverlay />}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome to NE-ONE Simulate</CardTitle>
          <CardDescription>
            Get started by uploading your Postman collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="file" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="file" className="text-lg">
                <Upload className="w-5 h-5 mr-2" />
                Upload File
              </TabsTrigger>
              <TabsTrigger value="url" className="text-lg">
                <Link className="w-5 h-5 mr-2" />
                Fetch from URL
              </TabsTrigger>
            </TabsList>
            <TabsContent value="file">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  dragActive ? "border-primary bg-primary/10" : "border-gray-300"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2">Drag and drop your Postman collection here, or click to select a file</p>
                <input type="file" id="file-upload" className="hidden" accept=".json" onChange={handleChange} />
                <Button className="mt-4" onClick={() => document.getElementById("file-upload")?.click()}>
                  Select File
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="url">
              <form onSubmit={handleUrlSubmit} className="flex gap-2">
                <Input
                  type="url"
                  placeholder="Enter Postman collection URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Fetch Collection</Button>
              </form>
            </TabsContent>
          </Tabs>
          {files.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Previously Uploaded Files</h2>
              <div className="grid gap-4">
                {files.map((file, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {file.source === "file" ? <File className="mr-2" /> : <Link className="mr-2" />}
                        {file.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Uploaded on: {new Date(file.uploadDate).toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Source: {file.source === "file" ? "File Upload" : "URL Fetch"}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
