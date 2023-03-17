export async function GET(request: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=${token}` }
    });
}

//you can abstractions on top of the underlying Web APIs to read 
//cookies (NextRequest) and set cookies (NextResponse)

//   import { NextResponse } from 'next/server'
// import { type NextRequest } from 'next/server'

// export async function GET(request: NextRequest) {
//   const token = request.cookies.get('token')
//   const response = NextResponse.next()
//   response.cookies.set('token', token)
//   return response
// }


//to read headers

// import { headers } from 'next/headers';

// export async function GET(request: Request) {
//   const headersList = headers();
//   const referer = headersList.get('referer');

//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'referer': referer }
//   });
// }


//Alternatively, you can use abstractions on top of the underlying Web APIs to read headers

// import { NextResponse } from 'next/server'
// import { type NextRequest } from 'next/server'

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-route-handler', 'hello')

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   })
// }

