import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About GPT-5 Updates</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We are dedicated to providing the latest and most accurate information about GPT-5 
            developments, helping you stay informed about the future of AI technology.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Track GPT-5 development progress</li>
            <li>• Share official announcements</li>
            <li>• Analyze AI industry trends</li>
            <li>• Provide expert insights</li>
          </ul>
        </Card>

        <Card className="p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions or suggestions? Feel free to reach out to us at{' '}
            <a 
              href="mailto:zy892065502@gmail.com" 
              className="text-primary hover:underline"
            >
              zy892065502@gmail.com
            </a>
          </p>
        </Card>
      </div>
    </div>
  )
}