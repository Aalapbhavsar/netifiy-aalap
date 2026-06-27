'use client';

import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Projects Management</h1>
        <p className="admin-page-desc">Manage your portfolio projects</p>
      </div>

      <div className="admin-card">
        <h3 style={{ marginTop: 0 }}>Project Manager</h3>
        <p style={{ marginBottom: '1rem' }}>
          The comprehensive project management interface has been moved to the main dashboard for a better user experience.
        </p>
        <Link href="/admin/dashboard?tab=projects" className="admin-btn admin-btn-primary">
          Go to Projects Dashboard →
        </Link>
      </div>

      <div className="admin-card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>Project Features</h3>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>Add new projects with title, description, and tech stack</li>
          <li>Upload project images via file input or drag-and-drop</li>
          <li>Add GitHub and live demo links</li>
          <li>Mark projects as featured</li>
          <li>Edit and delete existing projects</li>
          <li>Track project views and engagement</li>
          <li>Categorize projects by type</li>
        </ul>
      </div>
    </div>
  );
}
