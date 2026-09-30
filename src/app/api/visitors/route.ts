// src/app/api/visitors/route.ts

import { NextResponse } from "next/server";

export async function GET() {

    const projectId = process.env.VERCEL_PROJECT_ID;
    const accessToken = process.env.VERCEL_ACCESS_TOKEN;

    if (!projectId || !accessToken) {
        return NextResponse.json(
            { error: "Missing Vercel environment variables" },
            { status: 500 }
        );
    }

    const response = await fetch(
        `https://api.vercel.com/v1/query/web-analytics/visits/count?projectId=${encodeURIComponent(
            projectId
        )}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 3600 },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        console.error("Vercel API error:", data);

        return NextResponse.json(
            {
                error: "Vercel API request failed",
                details: data,
            },
            { status: response.status }
        );
    }

    return NextResponse.json({ visitors: data.data.visitors, pageviews: data.data.pageviews });
}