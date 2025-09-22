# 🚀 Vercel Deployment Guide for GenAI Consulting Website

## 📋 Quick Start Checklist

- [x] ✅ Build errors fixed (TypeScript compilation successful)
- [x] ✅ Vercel configuration created (`vercel.json`)
- [x] ✅ Environment variables template ready (`.env.example`)
- [x] ✅ PWA manifest and service worker configured
- [x] ✅ Security headers configured
- [x] ✅ Performance optimizations in place

---

## 🛠️ Pre-Deployment Setup

### 1. Repository Preparation
```bash
# Ensure all changes are committed
git add .
git commit -m "feat: prepare for Vercel deployment with optimizations"
git push origin main
```

### 2. Environment Variables Setup
Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

**Required Environment Variables for Production:**
- `NEXT_PUBLIC_APP_URL` - Your production domain
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_COMPANY_NAME` - Company name (Stratex AI)

---

## 🌐 Vercel Deployment Steps

### Method 1: Dashboard Deployment (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub/GitLab
   - Select `genai-consulting-website` repository

2. **Configure Project Settings**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Development Command: npm run dev
   ```

3. **Environment Variables**
   Add these in Vercel dashboard → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_CONTACT_EMAIL=contact@stratexai.com
   NEXT_PUBLIC_COMPANY_NAME=Stratex AI
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~3-5 minutes)

### Method 2: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## ⚙️ Configuration Details

### Vercel Settings

**Build & Development**
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

**Functions**
- Contact API timeout: 30 seconds
- Admin APIs timeout: 60 seconds

**Regions**
- Primary: `iad1` (US East)
- Secondary: `sfo1` (US West)

### Security Headers
All security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

---

## 🔧 Post-Deployment Configuration

### 1. Custom Domain Setup
```bash
# Add custom domain in Vercel dashboard
1. Go to Project Settings → Domains
2. Add your domain (e.g., stratexai.com)
3. Configure DNS records as instructed
4. Wait for SSL certificate provisioning
```

### 2. Performance Monitoring
```bash
# Enable Vercel Analytics (optional)
npm i @vercel/analytics
```

### 3. SEO Configuration
```bash
# Verify robots.txt is accessible
curl https://your-domain.com/robots.txt

# Submit sitemap to Google Search Console
https://your-domain.com/sitemap.xml
```

---

## 🧪 Testing Deployment

### Critical Tests After Deployment

1. **Homepage Loading**
   ```bash
   curl -I https://your-domain.vercel.app
   # Should return 200 OK
   ```

2. **API Endpoints**
   ```bash
   # Test contact form API
   curl -X POST https://your-domain.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test"}'
   ```

3. **PWA Functionality**
   - Open dev tools → Application → Service Workers
   - Verify service worker is registered
   - Test offline functionality

4. **Performance Metrics**
   - Run Lighthouse audit
   - Target: 90+ scores across all metrics
   - Check Core Web Vitals

---

## 🚨 Troubleshooting

### Common Issues & Solutions

**Build Failures**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
npm run lint   # Fix linting errors
npm run type-check  # Fix TypeScript errors
```

**Environment Variables Not Working**
```bash
# Ensure variables are prefixed with NEXT_PUBLIC_ for client-side access
# Redeploy after adding new environment variables
```

**404 Errors on Direct Routes**
```bash
# Next.js App Router handles this automatically
# Ensure pages are in correct src/app/ structure
```

**Performance Issues**
```bash
# Enable Turbopack (already configured)
# Check bundle size with ANALYZE=true npm run build
# Optimize images with next/image component
```

---

## 📊 Performance Optimizations

### Already Configured
- ✅ Turbopack for faster builds
- ✅ Dynamic imports for code splitting
- ✅ Image optimization with next/image
- ✅ PWA with service worker
- ✅ Gzip compression enabled
- ✅ Static asset caching

### Additional Optimizations
```javascript
// Bundle analysis (when needed)
ANALYZE=true npm run build

// Lighthouse CI (optional)
npm install -g @lhci/cli
lhci autorun
```

---

## 📈 Monitoring & Analytics

### Vercel Analytics
```bash
# Add to your project (optional)
npm i @vercel/analytics
```

### Google Analytics
Add your GA4 tracking ID to environment variables:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## 🔄 CI/CD Pipeline

### Automatic Deployments
- ✅ **Main branch** → Production deployment
- ✅ **Pull requests** → Preview deployments
- ✅ **Feature branches** → Preview deployments

### Git Workflow
```bash
# Feature development
git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Creates preview deployment automatically

# Production release
git checkout main
git merge feature/new-feature
git push origin main
# Triggers production deployment
```

---

## 🛡️ Security Considerations

### Headers & Policies
- CSP headers configured
- XSS protection enabled
- Frame options set to DENY
- Referrer policy configured

### API Security
- Rate limiting recommended for production
- Input validation on all forms
- HTTPS enforced by default

---

## 📞 Support & Maintenance

### Deployment Status
- **Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Deployment logs:** Available in Vercel dashboard
- **Analytics:** Built-in performance monitoring

### Monitoring Checklist
- [ ] Weekly performance audits
- [ ] Monthly dependency updates
- [ ] Quarterly security reviews
- [ ] Monitor Core Web Vitals

---

## 🎯 Expected Results

After successful deployment:
- **Performance:** Lighthouse score 90+ across all metrics
- **Uptime:** 99.9% availability with Vercel's global CDN
- **Load Times:** <2s initial page load, <1s subsequent navigation
- **SEO Ready:** Full meta tag optimization and sitemap
- **Mobile Optimized:** Responsive design with PWA capabilities
- **Security:** A+ rating on security headers test

---

**🎉 Your GenAI Consulting Website is now ready for Vercel deployment!**

For support, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Project Issues: Check the repository issues tab