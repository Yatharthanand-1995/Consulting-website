import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
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

export async function GET(request: NextRequest) {
  try {
    // In a real application, you'd want to add authentication here
    // For now, this is a simple admin endpoint

    const submissions = await readSubmissions();

    // Sort by submission date (newest first)
    const sortedSubmissions = submissions.sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    return NextResponse.json({
      success: true,
      submissions: sortedSubmissions,
      count: submissions.length,
    });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: DELETE endpoint to remove a specific submission
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const submissionId = searchParams.get('id');

    if (!submissionId) {
      return NextResponse.json(
        { error: 'Submission ID is required' },
        { status: 400 }
      );
    }

    const submissions = await readSubmissions();
    const filteredSubmissions = submissions.filter(s => s.id !== submissionId);

    if (submissions.length === filteredSubmissions.length) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    // Write back the filtered submissions
    await writeSubmissions(filteredSubmissions);

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function for writing submissions (imported from main contact route)
async function writeSubmissions(submissions: ContactFormData[]) {
  const { writeFile, mkdir } = await import('fs/promises');

  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }

  await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}
