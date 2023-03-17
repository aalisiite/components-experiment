import { NextResponse } from "next/server";
import "server-only"; // if this component will be uses on client side, for developer error will be thrown

export async function GET() {
    const res = await fetch('https://api.weatherapi.com/v1/current.json?key=91e5fcfe632b417096e141333231603&q=London&aqi=no', {
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 60 } //Revalidate every 60 seconds
    });
    const data = await res.json();

    return NextResponse.json({ data })
}

