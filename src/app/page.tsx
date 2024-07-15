/**
 * v0 by Vercel.
 * @see https://v0.dev/t/01ZhSINo4YH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="text-2xl font-bold">ayaka's portfolio</div>
      <div className="flex space-x-2">
        <Button variant="outline">profile</Button>
        <Button variant="default">skill</Button>
        <Button variant="outline">contact</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
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