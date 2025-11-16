# mindfulwrld.com

A modern, fast, and beautiful blog built with Astro and managed through Decap CMS.

## 🚀 Project Structure

```
mindfulwrld/
├── public/
│   ├── admin/              # Decap CMS admin interface
│   └── images/             # Static images
├── src/
│   ├── components/         # Reusable Astro components
│   ├── content/
│   │   └── blog/           # Blog posts (Markdown)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # Global styles and CSS variables
├── astro.config.mjs        # Astro configuration
├── netlify.toml            # Netlify deployment config
└── package.json
```

## 🎨 Color Palette

- **Primary** (Pink): `#E2689E`
- **Secondary** (Gray): `#7A7A7A`
- **Accent** (Green): `#61CE70`
- **Background**: `#FFDEDE`

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 Content Management

### For Content Editors

1. Go to `https://mindfulwrld.com/admin`
2. Log in with your Netlify Identity credentials
3. Create and edit blog posts through the user-friendly interface
4. See full guide in `EDITOR_GUIDE.md`

### For Developers

Blog posts are stored in `src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Brief description"
author: "mindfulwrld"
pubDate: 2025-01-15T10:00:00.000Z
heroImage: "/images/blog/image.jpg"
tags: ["mindfulness", "meditation"]
---

Your content here...
```

## 🌐 Deployment

### Initial Deployment to Netlify

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Connect to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub → Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. Enable Netlify Identity:
   - Site settings → Identity → Enable Identity
   - Settings → Registration: "Invite only"
   - Services → Git Gateway → Enable
   - Invite content managers via email

4. Connect custom domain:
   - Site settings → Domain management
   - Add custom domain: `mindfulwrld.com`
   - Update DNS at your registrar (HostGator):
     ```
     Type: A
     Name: @
     Value: 75.2.60.5

     Type: CNAME
     Name: www
     Value: [your-site].netlify.app
     ```
   - Enable HTTPS (automatic via Let's Encrypt)

### Automatic Deployments

Once connected, every push to `main` branch automatically:
1. Triggers a build on Netlify
2. Deploys to production
3. Updates the live site (~2 minutes)

## 🔐 CMS Authentication

### Adding Content Managers

1. Netlify Dashboard → Identity → Invite users
2. Enter their email address
3. They'll receive an invitation email
4. They set their password
5. They can now access `/admin` to manage content

### Roles

- **Editor**: Can create, edit, and publish posts
- **Admin**: Full access to settings and users

## 📊 Analytics (Optional)

Add analytics by integrating:

- **Plausible**: Privacy-friendly, lightweight
- **Google Analytics**: Comprehensive tracking
- **Cloudflare Web Analytics**: Free, privacy-first

## 🛠️ Customization

### Updating Colors

Edit `src/styles/variables.css`:

```css
:root {
  --color-primary: #E2689E;
  --color-accent: #61CE70;
  /* ... */
}
```

### Adding Pages

Create new `.astro` files in `src/pages/`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="New Page" description="Description">
  <h1>Your content</h1>
</BaseLayout>
```

### Modifying Components

Components are in `src/components/`. Edit `.astro` files to customize design and functionality.

## 📚 Tech Stack

- **[Astro](https://astro.build)**: Static site generator
- **[Decap CMS](https://decapcms.org)**: Content management
- **[Netlify](https://netlify.com)**: Hosting and deployment
- **[Sharp](https://sharp.pixelplumbingltd.github.io/)**: Image optimization

## 🐛 Troubleshooting

### Build Fails

- Check `npm run build` locally first
- Review Netlify build logs
- Ensure all dependencies are in `package.json`

### CMS Not Loading

- Verify Netlify Identity is enabled
- Check Git Gateway is enabled
- Ensure user is invited and confirmed

### Images Not Showing

- Verify images are in `public/images/blog/`
- Check image paths in frontmatter
- Ensure images are under 10MB

### Content Not Publishing

- Check editorial workflow status
- Ensure post is "Published" not "Draft"
- Wait 2-3 minutes for build to complete

## 📧 Support

- **Content Issues**: See `EDITOR_GUIDE.md`
- **Technical Issues**: Check [Astro Docs](https://docs.astro.build)
- **CMS Issues**: See [Decap CMS Docs](https://decapcms.org/docs)

## 📄 License

© 2025 mindfulwrld. All rights reserved.

---

**Built with 💚 using Astro and Decap CMS**
