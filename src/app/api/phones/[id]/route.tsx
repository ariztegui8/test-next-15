import { NextResponse } from 'next/server';

const url = process.env.API_URL;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    console.log('params', params);

    try {
        const result = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!result.ok) {
            return NextResponse.json({ message: 'Phone not found' }, { status: 404 });
        }

        const phone = await result.json();
        return NextResponse.json({ data: phone });
    } catch (error) {
        console.error('Request failed', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    console.log('params', params);

    try {
        const result = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },

        })

        if (!result.ok) {
            return NextResponse.json({ message: 'Phone not found' }, { status: 404 });
        }

        const phone = await result.json();

        if (result.status === 404) {
            return NextResponse.json(
                { message: 'Phone not found' },
                { status: 404 }
            )
        }
        if (result.status === 405) {
            return NextResponse.json(
                { message: 'Method not allowed' },
                { status: 405 }
            )
        }
        return NextResponse.json({ data: phone });
    } catch (error) {
        console.error('Request failed', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}


export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    console.log('params', params);

    try {
        const body = await request.json();
        const result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify(body)
        })


        const data = result.ok ? await result.json() : null

        if (!data) {
            return NextResponse.json(
                { message: 'Empty response from API' },
                { status: 204 }
            )
        }

        if (result.status === 404) {
            return NextResponse.json(
                { message: 'Phone not found' },
                { status: 404 }
            )
        }
        if (result.status === 405) {
            return NextResponse.json(
                { message: 'Method not allowed' },
                { status: 405 }
            )
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Request failed', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}