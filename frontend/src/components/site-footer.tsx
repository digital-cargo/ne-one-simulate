import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto text-center">
        <div className="py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Made with ❤ for DigitalCargo. The source code is available on{" "}
            <a
              href={"https://github.com/digital-cargo/ne-one-simulate"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
