import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  role?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  submittedAt: string;
  id: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'contact-submissions.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist, ignore error
  }
}

// Read existing submissions
async function readSubmissions(): Promise<ContactFormData[]> {
  try {
    const data = await readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File might not exist yet, return empty array
    return [];
  }
}

// Write submissions to file
async function writeSubmissions(submissions: ContactFormData[]) {
  await ensureDataDirectory();
  await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

// Generate unique ID
function generateId(): string {
  return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, company, message } = body;

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, company, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission: ContactFormData = {
      id: generateId(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      role: body.role?.trim() || '',
      phone: body.phone?.trim() || '',
      projectType: body.projectType || '',
      budget: body.budget || '',
      timeline: body.timeline || '',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Read existing submissions
    const submissions = await readSubmissions();

    // Add new submission
    submissions.push(submission);

    // Write back to file
    await writeSubmissions(submissions);

    // Log submission (optional - for debugging)
    console.log(
      `New contact form submission from ${submission.email} (${submission.company})`
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple endpoint to get submissions count (for admin purposes)
    const submissions = await readSubmissions();

    return NextResponse.json({
      count: submissions.length,
      latest: submissions[submissions.length - 1]?.submittedAt || null,
    });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
