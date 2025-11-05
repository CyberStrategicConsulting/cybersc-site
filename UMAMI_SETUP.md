# Umami Analytics Setup Guide

Complete guide to deploy and integrate Umami analytics for the CyberSC website.

---

## Why Umami?

✅ **Privacy-first** - No cookies, PIPEDA compliant
✅ **Free** - Railway free tier
✅ **Self-hosted** - You own your data
✅ **Open source** - Auditable code
✅ **No consent banner needed** - Fully anonymous

---

## Part 1: Deploy Umami to Railway (5-10 minutes)

### Step 1: Create Railway Account

1. Go to [https://railway.app](https://railway.app)
2. Click **"Login"** in top right
3. Choose **"Sign in with GitHub"**
4. Authorize Railway to access your GitHub account

### Step 2: Deploy Umami Using Template

**Option A: Direct Template Link (Fastest)**
1. Visit: [https://railway.app/template/umami](https://railway.app/template/umami)
2. Click **"Deploy Now"**
3. Railway will automatically create:
   - PostgreSQL database
   - Umami application
   - Required environment variables

**Option B: Template Marketplace**
1. In Railway dashboard, click **"New Project"**
2. Select **"Deploy a Template"**
3. Search for **"Umami"**
4. Click the Umami template
5. Click **"Deploy"**

### Step 3: Monitor Deployment

1. Watch the deployment logs in Railway dashboard
2. Wait 2-3 minutes for build to complete
3. Look for **"Build successful"** and **"Deployment live"** messages

### Step 4: Generate Public Domain

1. In Railway dashboard, click on the **Umami service** (not the database)
2. Go to **Settings** tab
3. Scroll to **Networking** section
4. Click **"Generate Domain"**
5. Railway creates a URL like: `umami-production-xxxx.up.railway.app`
6. **Save this URL** - this is your analytics dashboard!

### Step 5: First Login & Security

1. Open your Umami URL in a browser
2. **Default login credentials:**
   - Username: `admin`
   - Password: `umami`
3. **IMMEDIATELY change the password:**
   - Click the profile icon (top right)
   - Go to **Profile** → **Change Password**
   - Set a strong password
   - Save

---

## Part 2: Configure Umami for Your Website

### Step 1: Add Your Website

1. In Umami dashboard, click **"Settings"** in sidebar
2. Click **"Websites"** tab
3. Click **"+ Add website"** button
4. Fill in the form:
   - **Name:** `CyberSC`
   - **Domain:** `cybersc.ca` (or your GitHub Pages URL if testing)
   - **Enable Share URL:** Leave unchecked (optional)
5. Click **"Save"**

### Step 2: Get Your Tracking Code

1. Your new website appears in the list
2. Click the **"Edit"** button (pencil icon) next to "CyberSC"
3. Click the **"Tracking code"** tab
4. Copy the entire script tag shown

**Example tracking code:**
```html
<script async src="https://umami-production-xxxx.up.railway.app/script.js" data-website-id="abc123-def456-ghi789"></script>
```

**Important:** Your `data-website-id` will be unique - don't use the example above!

---

## Part 3: Add Tracking Script to Your Website

### Step 1: Update index.html

1. Open `public/index.html` in your code editor
2. Find the TODO comment around line 17-18
3. **Replace the commented example** with your actual tracking script

**Before:**
```html
<!-- TODO: Replace with your actual Umami tracking script after deployment -->
<!-- Example: <script async src="https://your-umami-instance.railway.app/script.js" data-website-id="your-website-id"></script> -->
```

**After (with YOUR tracking code):**
```html
<!-- Umami Analytics - Privacy-friendly, PIPEDA compliant, no cookies -->
<script async src="https://umami-production-xxxx.up.railway.app/script.js" data-website-id="abc123-def456-ghi789"></script>
```

### Step 2: Test Locally

1. Start your development server:
   ```bash
   npm start
   ```

2. Open your browser to `http://localhost:3000`

3. Navigate around your site (click different sections)

4. Go back to your Umami dashboard and click on "CyberSC"

5. You should see real-time page views appearing!

### Step 3: Deploy to GitHub Pages

1. Commit your changes:
   ```bash
   git add public/index.html
   git commit -m "Add Umami analytics tracking"
   git push
   ```

2. Deploy to GitHub Pages (your existing process)

3. Visit your live site at `cybersc.ca`

4. Check Umami dashboard - you should see live traffic!

---

## Part 4: Using Your Analytics Dashboard

### Access Your Dashboard

- URL: `https://umami-production-xxxx.up.railway.app`
- Login with your new password

### What You'll See

**Real-time Data:**
- Current visitors
- Page views
- Unique visitors
- Bounce rate
- Average visit time

**Insights:**
- Top pages
- Referrer sources
- Countries/regions
- Browsers & devices
- Operating systems

### Sharing Dashboard (Optional)

If you want to share read-only analytics:
1. Edit website → **Enable Share URL**
2. Copy the share link
3. Anyone with the link can view (but not edit) analytics

---

## Privacy & Compliance

### PIPEDA Compliance ✅

Umami is **fully PIPEDA compliant** because:
- ✅ No cookies stored
- ✅ No personal data collected
- ✅ IP addresses are hashed and anonymized
- ✅ No cross-site tracking
- ✅ Data stored in your database (full control)
- ✅ No third-party data sharing

### No Cookie Banner Required ✅

Because Umami doesn't use cookies or collect personal information, you **do NOT need**:
- Cookie consent banners
- Opt-in mechanisms
- Complex privacy policy additions

### Simple Privacy Policy Addition (Optional)

If you want to mention analytics in your privacy policy, add this simple line:

> "We use Umami Analytics, a privacy-friendly analytics tool that does not use cookies and does not collect personal information, to understand website traffic and improve our services."

---

## Maintenance

### Railway Free Tier Limits

**Free tier includes:**
- 500 hours/month execution time (~20 days)
- 5GB database storage
- 100GB bandwidth

**For a small business site:** This is MORE than enough. Your site would need thousands of daily visitors to exceed these limits.

### Keeping Umami Updated

Railway automatically redeploys when Umami updates. No action needed!

### Database Backups

**Recommended:** Set up periodic backups
1. Railway dashboard → Database service
2. Settings → Backups
3. Enable automated backups (available on paid plans, $5/month)

**OR manually export data:**
1. Umami dashboard → Settings → Export
2. Download JSON/CSV of your analytics data

---

## Troubleshooting

### "No Data Showing" After Installation

**Check:**
1. Script tag is properly added to `public/index.html`
2. Website domain in Umami matches your actual domain
3. Check browser console for errors (F12 → Console)
4. Ensure Railway deployment is "Active" (not sleeping)
5. Try clearing browser cache and revisiting site

### Railway App "Sleeping"

Free tier apps may sleep after inactivity:
- First request after sleep takes 10-20 seconds to wake up
- Analytics still work, just slower initial load
- Upgrade to Hobby plan ($5/month) to prevent sleeping

### Wrong Website Domain

If you set the wrong domain:
1. Settings → Websites → Edit
2. Update the domain field
3. Save

---

## Cost Summary

**Current Setup (Free):**
- Railway free tier: **$0/month**
- Umami (open source): **$0/month**
- **Total: $0/month** ✅

**If you need more resources later:**
- Railway Hobby: **$5/month** (removes sleeping, more resources)

---

## Next Steps After Setup

1. ✅ Deploy Umami to Railway
2. ✅ Add website in dashboard
3. ✅ Copy tracking code
4. ✅ Update `public/index.html` with your tracking code
5. ✅ Test locally (`npm start`)
6. ✅ Deploy to GitHub Pages
7. ✅ Verify analytics are flowing
8. 🎉 Monitor your website traffic!

---

## Support Resources

- **Umami Documentation:** [https://umami.is/docs](https://umami.is/docs)
- **Railway Documentation:** [https://docs.railway.app](https://docs.railway.app)
- **Umami GitHub:** [https://github.com/umami-software/umami](https://github.com/umami-software/umami)
- **Community Support:** [https://github.com/umami-software/umami/discussions](https://github.com/umami-software/umami/discussions)

---

## Security Best Practices for CyberSC

As a cybersecurity firm, here are additional recommendations:

1. **Strong Password:** Use a password manager for your Umami admin password
2. **2FA (Future):** Umami is working on 2FA - enable when available
3. **Regular Updates:** Check for Umami updates monthly
4. **Access Control:** Only share dashboard access with authorized team members
5. **Custom Domain (Optional):** Use `analytics.cybersc.ca` instead of Railway subdomain
   - Add CNAME in your DNS: `analytics.cybersc.ca` → `umami-production-xxxx.up.railway.app`
   - Configure custom domain in Railway settings

---

## Questions?

If you run into any issues during setup, check:
1. Railway deployment logs for errors
2. Browser console (F12) for JavaScript errors
3. Umami GitHub discussions for common issues

Good luck! You now have privacy-friendly, PIPEDA-compliant website analytics. 🎉
