import { Button } from "@/components/ui/button"

export function LoadingOverlay() {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
        <img
          src="dancing_leprechaun.gif"
          alt="Dancing leprechaun"
          className="w-32 h-32 mb-4"
        />
        <p className="text-xl font-semibold animate-pulse">Please wait, while simulation is in progress...</p>
        
        
        <Button>Cancel</Button>
      </div>
    )
  }
  