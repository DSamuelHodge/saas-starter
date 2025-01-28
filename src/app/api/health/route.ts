import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Add any necessary health checks here
    // For example, check database connection, Redis connection, etc.
    
    return NextResponse.json(
      { status: 'healthy', timestamp: new Date().toISOString() },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { status: 'unhealthy', error: errorMessage },
      { status: 500 }
    )
  }
}
