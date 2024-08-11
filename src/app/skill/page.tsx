import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Navbar from '@/components/Navbar';

export default function Component() {
  return (
    <div className="flex flex-col items-center p-4 space-y-14">
      <Navbar />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full max-w-7xl">
      <Card className="w-full">
          <CardHeader>
            <CardTitle>frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Next.js</span>
                <span>1年</span>
              </div>
              <div className="flex justify-between">
                <span>React</span>
                <span>1年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>backend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>php</span>
                <span>6年</span>
              </div>
              <div className="flex justify-between">
                <span>ruby</span>
                <span>1年</span>
              </div>
              <div className="flex justify-between">
                <span>python</span>
                <span>1年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>infra</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <span>aws</span>
              <span>3年</span>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>DB</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>mysql</span>
                <span>6年</span>
              </div>
              <div className="flex justify-between">
                <span>oracle</span>
                <span>3年</span>
              </div>
              <div className="flex justify-between">
                <span>dynamo</span>
                <span>1年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>JS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>javascript</span>
                <span>9年</span>
              </div>
              <div className="flex justify-between">
                <span>jQuery</span>
                <span>6年</span>
              </div>
              <div className="flex justify-between">
                <span>typescript</span>
                <span>1年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>DB</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>mysql</span>
                <span>6年</span>
              </div>
              <div className="flex justify-between">
                <span>oracle</span>
                <span>3年</span>
              </div>
              <div className="flex justify-between">
                <span>dynamo</span>
                <span>1年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>git</span>
                <span>9年</span>
              </div>
              <div className="flex justify-between">
                <span>github</span>
                <span>9年</span>
              </div>
              <div className="flex justify-between">
                <span>gitlab</span>
                <span>6年</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}