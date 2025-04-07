import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// @todo 변경 필요
const INTERNAL_NETWORK_URL = 'http://static.hubzum.zumst.com/hubzum';
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

/**
 * 외부에서 접근이 가능한 OpenGraph 이미지를 위해 내부 이미지를 프록시하는 용도로만 사용
 * 플랫폼 정책에 따라 서버 자체적으로 캐싱하지 않고 원본 URL만 제공하는 경우 대비
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Image URL is required', { status: 400 });
  }

  if (!imageUrl.startsWith(INTERNAL_NETWORK_URL)) {
    return new NextResponse('Invalid image URL', { status: 403 });
  }

  try {
    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return new NextResponse('Failed to fetch image', { status: imageResponse.status });
    }

    const contentType = imageResponse.headers.get('content-type');

    if (!contentType || !ALLOWED_MIME_TYPES.includes(contentType)) {
      return new NextResponse('Invalid image type', { status: 415 });
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const eTag = `"${Buffer.from(imageBuffer).reduce((prev, curr) => prev + curr, 0)}"`;

    const ifNoneMatch = req.headers.get('if-none-match');
    if (ifNoneMatch === eTag) {
      return new NextResponse(null, { status: 304 }); // Not Modified
    }

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, must-revalidate',
        ETag: eTag,
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return new NextResponse('Error proxying image', { status: 500 });
  }
}
