# Admin CMS Dashboard

Your portfolio website now includes a complete Content Management System (CMS) admin dashboard. You can manage all your portfolio content without editing code!

## Accessing the Admin Dashboard

1. Go to `http://localhost:3000/admin/login`
2. Login with your admin credentials:
   - **Username:** `aalap` (or from `ADMIN_USERNAME` env variable)
   - **Password:** `aalap2610` (or from `ADMIN_PASSWORD` env variable)
3. You'll be taken to the admin dashboard

## Admin Features

### 1. **Profile Management** (`/admin/profile`)
Update your profile information and avatar:
- **Upload Profile Image** - Change your profile picture
- **Edit Personal Information** - Name, headline, bio
- **Contact Details** - Email, phone, location
- **Career Stats** - Years of experience, projects completed, clients served
- **Resume Upload** - Upload and manage your resume/CV

### 2. **Skills Management** (`/admin/skills`)
Manage your technical skills:
- **Add Skills** - Add new skills with proficiency levels
- **Organize by Category** - Frontend, Backend, Database, Tools, Other
- **Proficiency Levels** - Beginner, Intermediate, Advanced, Expert
- **Edit & Delete** - Modify existing skills
- **Filter** - View skills by category

### 3. **Experience Management** (`/admin/experience`)
Manage your work experience:
- **Add Positions** - Job title, company, description
- **Date Range** - Start date, end date, mark as current role
- **Descriptions** - Add details about your responsibilities
- **Edit & Delete** - Modify experience entries
- **Sort** - Automatically sorted by date

### 4. **Certifications Management** (`/admin/certifications`)
Manage your professional certifications:
- **Certificate Details** - Title, issuing organization, dates
- **Credentials** - Credential ID and verification links
- **Emoji Icons** - Choose custom emoji for each certification
- **Expiry Dates** - Track certificate validity
- **Edit & Delete** - Update or remove certifications

### 5. **Projects Management** (`/admin/projects`)
Manage your portfolio projects:
- **Project Details** - Title, description, category
- **Images** - Upload project screenshots/thumbnails
- **Tech Stack** - Add technologies used
- **Links** - GitHub and live demo links
- **Featured** - Mark projects as featured
- **Track Views** - Monitor project engagement
- **Edit & Delete** - Update project information

### 6. **Messages** (`/admin/messages`)
View and manage contact form submissions:
- **Inbox** - View all messages from visitors
- **Read/Unread** - Track which messages you've read
- **Filter** - View all, unread, or read messages
- **Details** - View full message content
- **Reply** - Email link for quick replies
- **Delete** - Remove messages

### 7. **Content Management** (`/admin/content`)
Manage website text content:
- **Text Content** - Edit hero titles, descriptions, etc.
- **Organize by Section** - Hero, About, Services, Contact, Footer, General
- **Multiple Languages** - Support for different content versions
- **Descriptions** - Add context for each content item
- **Edit & Delete** - Modify content entries

### 8. **Analytics Dashboard** (`/admin/dashboard`)
View your portfolio analytics:
- **Visitor Stats** - Total visitors, resume downloads
- **Engagement Metrics** - Project views, message count
- **Top Projects** - Most viewed projects ranking
- **Activity Chart** - 14-day activity visualization
- **Unread Messages** - Quick access to new messages

## Key Features

### 🔐 Security
- Secure JWT-based authentication
- Password encryption with bcrypt
- Protected API endpoints
- Admin-only access to sensitive operations

### 📸 File Uploads
- Profile image upload via Cloudinary
- Resume/CV document upload
- Project image uploads
- Drag-and-drop file selection

### 📱 Responsive Design
- Mobile-friendly admin interface
- Works on tablets and desktops
- Touch-friendly buttons and forms
- Optimized for all screen sizes

### ⚡ Real-time Updates
- Changes reflect instantly on the live website
- No rebuild or redeploy needed
- Automatic form validation
- Instant feedback on saves

### 🎨 User-Friendly Interface
- Clean, modern admin panel design
- Intuitive navigation
- One-click operations
- Clear status messages
- Confirmation dialogs for destructive actions

## API Endpoints

All API endpoints are protected and require authentication.

### Profile
- `GET /api/profile` - Get profile
- `PUT /api/profile` - Update profile
- `PUT /api/profile/image` - Update profile image
- `PUT /api/profile/resume` - Update resume

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experiences
- `POST /api/experience` - Create experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Certifications
- `GET /api/certifications` - Get all certifications
- `POST /api/certifications` - Create certification
- `PUT /api/certifications/:id` - Update certification
- `DELETE /api/certifications/:id` - Delete certification

### Content
- `GET /api/content` - Get all content
- `GET /api/content/section/:section` - Get content by section
- `GET /api/content/key/:key` - Get content by key
- `POST /api/content` - Create content
- `PUT /api/content/:id` - Update content
- `DELETE /api/content/:id` - Delete content

### Messages
- `GET /api/contact` - Get all messages
- `PUT /api/contact/:id/read` - Toggle read status
- `DELETE /api/contact/:id` - Delete message
- `POST /api/contact` - Submit new message (public)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## Database Models

### Profile
```
{
  name: String,
  headline: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  profileImage: String (URL),
  resumeUrl: String (URL),
  yearsOfExperience: Number,
  projectsCompleted: Number,
  clientsServed: Number
}
```

### Skill
```
{
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other',
  name: String,
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert',
  order: Number
}
```

### Experience
```
{
  title: String,
  company: String,
  description: String,
  startDate: Date,
  endDate: Date,
  isCurrentRole: Boolean,
  order: Number
}
```

### Certification
```
{
  title: String,
  issuer: String,
  issueDate: Date,
  expiryDate: Date,
  credentialId: String,
  credentialUrl: String (URL),
  emoji: String,
  order: Number
}
```

### Content
```
{
  key: String (unique),
  section: 'Hero' | 'About' | 'Services' | 'Contact' | 'Footer' | 'General',
  value: String,
  description: String
}
```

## Security Best Practices

1. **Change Admin Credentials** - Update `ADMIN_USERNAME` and `ADMIN_PASSWORD` in your `.env` file
2. **Use HTTPS** - Always use HTTPS in production
3. **Keep Tokens Secure** - Admin tokens are stored in localStorage (consider using httpOnly cookies in production)
4. **Validate Input** - All inputs are server-side validated
5. **Rate Limiting** - Implement rate limiting for API endpoints
6. **Environment Variables** - Store sensitive data in environment variables only

## Environment Variables

Create a `.env` file in the server directory:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=aalap
ADMIN_PASSWORD=aalap2610
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Troubleshooting

### Images not uploading?
- Check Cloudinary credentials in `.env`
- Verify upload preset exists in Cloudinary dashboard
- Check file size limits (max 25MB typically)

### API requests returning 401?
- Ensure admin token is valid
- Check localStorage for `adminToken`
- Re-login if token has expired

### Content not updating on live site?
- Clear browser cache
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### Database connection issues?
- Verify MongoDB URI in `.env`
- Check if MongoDB service is running
- Ensure network access to MongoDB instance

## Tips for Best Results

1. **Profile Image** - Use high-quality images (500x500px recommended)
2. **Project Images** - Use consistent dimensions (1200x600px works well)
3. **Descriptions** - Be concise and descriptive
4. **Tech Stack** - List technologies separated by commas
5. **Links** - Ensure GitHub and demo links are correct
6. **Dates** - Use consistent date formats
7. **Emojis** - Choose emojis that represent the certification type

## Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Check server logs for API errors
3. Verify all required environment variables are set
4. Ensure MongoDB is running and accessible
5. Restart both frontend and backend servers

---

**Enjoy managing your portfolio without editing code! 🎉**
