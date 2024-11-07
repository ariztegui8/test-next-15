import { NextResponse } from 'next/server';

const url = process.env.API_URL;

export async function GET(request: Request) {
    try {
        if (!url) {
            return NextResponse.json(
                { error: 'API_URL is not defined' },
                { status: 500 }
            )
        }
        const res = await fetch(url, { cache: 'no-store' });
        console.log('res', res);


        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const phones = await res.json();
        console.log('phones', phones);

        return NextResponse.json(phones, { status: 200 });
    } catch (error) {
        console.error('Request failed', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json();
        if (!url) {
            return NextResponse.json(
                { error: 'API_URL is not defined' },
                { status: 500 }
            )
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        console.log('res', res);


        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log('data', data);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Request failed', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}