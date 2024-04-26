/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jZpC5VcjWi5
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Poll() {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <input
          type="text"
          placeholder="Search poll..."
          className="p-2 mb-4 bg-slate-900 rounded-lg mt-4 mx-auto"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Card className="w-full max-w-lg m-2 p-2">
          <CardHeader>
            <CardTitle className="text-lg">Create a Poll</CardTitle>
            <CardDescription>
              Customize your poll and share it with your audience.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Label className="font-medium" htmlFor="question">
                Question
              </Label>
              <Input
                className="mt-1"
                id="question"
                placeholder="Enter your question"
                required
              />
            </div>
            <div>
              <Label className="font-medium" htmlFor="options">
                Options
              </Label>
              <div className="grid gap-2.5">
                <div className="flex gap-2.5">
                  <Input placeholder="Option 1" />
                  <Button size="sm" variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex gap-2.5">
                  <Input placeholder="Option 2" />
                  <Button size="sm" variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex gap-2.5">
                  <Input placeholder="Option 3" />
                  <Button size="sm" variant="outline">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button type="reset">Reset</Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
        <div className="h-[100vh] overflow-y-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
            <li className="m-2 p-2">
              <Card className="w-full max-w-lg m-2 p-2">
                <CardHeader>
                  <CardTitle className="text-lg">who should we chose</CardTitle>
                  <CardDescription>Chose our new leader.</CardDescription>
                </CardHeader>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
