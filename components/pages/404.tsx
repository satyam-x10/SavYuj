'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tetris } from "@/components/component/tetris";
export default function Error404() {
    const [playGame, setPlayGame] = useState(false);
    const handlePlayGame = () => {
        setPlayGame(!playGame);
    }
    return (
        <div>
            <div>{!playGame && <div className="flex flex-col items-center justify-center h-screen">

                <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
                <Button className="mb-4" onClick={handlePlayGame}>Play Bored</Button>

                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    The page you are looking for might have been removed or is temporarily
                    unavailable.
                </p>
                <div className="flex space-x-4">
                    <Link href="/">
                        <Button>Go to Homepage</Button>
                    </Link>
                    <Link href="/">
                        <Button>Contact Support</Button>
                    </Link>
                    <Link href="/">
                        <Button>Explore</Button>
                    </Link>
                    <Button onClick={() => window.history.back()}>Go Back</Button>
                </div>
            </div>}</div>
            <div>
                {playGame && <div className="flex flex-col items-center justify-center h-screen">
                    <Link href="/">
                        <Button>Go to Homepage</Button>
                    </Link>
                </div>}
            </div>
        </div>
    );
}
