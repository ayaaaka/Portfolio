import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Navbar from '@/components/Navbar';

export default function Component() {
  return (
    <div className="flex flex-col items-center p-4 space-y-14">
      <Navbar />
      <div className="grid gap-4 md:grid-cols-2 w-full">
      <Card className="w-full">
          <CardHeader>
            <CardTitle>frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Next.js</span>
                <span>1年</span>
              </div>
              <div className="flex justify-between">
                <span>React</span>
                <span>2年</span>
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
                <span>PHP</span>
                <span>7年</span>
              </div>
              <div className="flex justify-between">
                <span>Ruby on Rails</span>
                <span>2年</span>
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
              <span>AWS</span>
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
                <span>MySQL</span>
                <span>7年</span>
              </div>
              <div className="flex justify-between">
                <span>Oracle</span>
                <span>3年</span>
              </div>
              <div className="flex justify-between">
                <span>Redshift</span>
                <span>7年</span>
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
                <span>7年</span>
              </div>
              <div className="flex justify-between">
                <span>Typescript</span>
                <span>3年</span>
              </div>
              <div className="flex justify-between">
                <span>cakePHP</span>
                <span>0.5年</span>
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
                <span>Git</span>
                <span>10年</span>
              </div>
              <div className="flex justify-between">
                <span>GitHub</span>
                <span>10年</span>
              </div>
              <div className="flex justify-between">
                <span>GitLab</span>
                <span>7年</span>
              </div>
              <div className="flex justify-between">
                <span>BitBucket</span>
                <span>1年</span>
              </div>
              <div className="flex justify-between">
                <span>Backlog</span>
                <span>3年</span>
              </div>
              <div className="flex justify-between">
                <span>Trello</span>
                <span>2年</span>
              </div>
              <div className="flex justify-between">
                <span>Redmine</span>
                <span>2年</span>
              </div>
              <div className="flex justify-between">
                <span>Redash</span>
                <span>1年</span>
              </div>
              <div className="flex justify-between">
                <span>Slack</span>
                <span>12年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>ADNW</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>GAM</span>
                <span>2年</span>
              </div>
              <div className="flex justify-between">
                <span>GCP</span>
                <span>2年</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Native</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>swift</span>
                <span>2年</span>
              </div>
              <div className="flex justify-between">
                <span>App Store Connect</span>
                <span>5年</span>
              </div>
              <div className="flex justify-between">
                <span>Google Play Console</span>
                <span>5年</span>
              </div>
              <div className="flex justify-between">
                <span>Firebase</span>
                <span>5年</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}