import { NextResponse } from 'next/server';

type GeoSeoProfile = {
  companyName: string;
  summary: string;
  geoScore: number;
  seoScore: number;
  localVisibility: string;
  websiteReadiness: string;
  topSignals: string[];
  recommendedActions: string[];
  address: string;
};

const ADDRESS = 'Imminent Singularities, 3F-008, T-Hub, Hyderabad';

function buildStubProfile(companyName: string): GeoSeoProfile {
  const normalized = companyName.trim();
  const seed = normalized.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const geoScore = 68 + (seed % 19);
  const seoScore = 62 + (seed % 23);
  const hasLongName = normalized.length > 14;

  return {
    companyName: normalized,
    summary: `${normalized} shows solid potential for local discovery, but the profile suggests there is room to tighten location consistency, search visibility, and conversion readiness across owned web properties.`,
    geoScore,
    seoScore,
    localVisibility: geoScore > 80 ? 'High' : geoScore > 73 ? 'Moderate' : 'Emerging',
    websiteReadiness: seoScore > 80 ? 'Strong' : seoScore > 72 ? 'Improving' : 'Needs work',
    topSignals: [
      `${normalized} is discoverable for branded search queries in this stubbed model.`,
      hasLongName ? 'Longer brand phrasing may benefit from tighter keyword variants.' : 'Brand naming is compact enough for strong local query matching.',
      `Primary operating address anchored to ${ADDRESS}.`,
    ],
    recommendedActions: [
      'Standardize business name, address, and phone details across all listings.',
      'Publish location-aware landing pages with stronger category and service intent.',
      'Improve review capture, schema markup, and internal linking for local search coverage.',
    ],
    address: ADDRESS,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const companyName = typeof body?.companyName === 'string' ? body.companyName.trim() : '';

    if (!companyName) {
      return NextResponse.json({ error: 'Company name is required.' }, { status: 400 });
    }

    const profile = buildStubProfile(companyName);

    return NextResponse.json({ profile });
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }
}
