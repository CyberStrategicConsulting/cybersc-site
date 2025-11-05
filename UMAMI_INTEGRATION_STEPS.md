# Umami Integration - Quick Steps

You've deployed Umami to Railway. Now follow these steps to connect your website.

---

## Step 1: Access Your Umami Dashboard

1. Go to [railway.app](https://railway.app) and open your Umami project
2. Click on the **`umami`** service (not postgres)
3. Go to **Settings** tab → **Networking** section
4. Click **"Generate Domain"** if you haven't
5. Copy the URL (e.g., `umami-production-xxxx.up.railway.app`)

**This is your analytics dashboard URL!** Bookmark it.

umami-production-495d.up.railway.app

---

## Step 2: Login to Umami

1. Open your Umami URL in browser
2. Login with default credentials:
   - Username: `admin`
   - Password: `umami`
3. **IMMEDIATELY** change password:
   - Click profile icon → Settings → Change Password

---

## Step 3: Add Your Website

1. In Umami dashboard, click **"Settings"** (left sidebar)
2. Click **"Websites"** tab
3. Click **"+ Add website"**
4. Fill in:
   - **Name:** `CyberSC`
   - **Domain:** `cybersc.ca` (or your GitHub Pages URL for testing)
5. Click **"Save"**

---

## Step 4: Get Your Tracking Code

1. After saving, you'll see "CyberSC" in the websites list
2. Click the **Edit** button (pencil icon) or click the website name
3. Look for **"Tracking code"** tab or button
4. Copy the entire script tag shown:

**Example (yours will be different):**
```html
<script async src="https://umami-production-xxxx.up.railway.app/script.js" data-website-id="abc123-def456"></script>
```

---

## Step 5: Add Script to Your Website

1. Open `public/index.html` in your code editor
2. Find line 17-18 (the TODO comment)
3. **Replace:**
   ```html
   <!-- TODO: Replace with your actual Umami tracking script after deployment -->
   <!-- Example: <script async src="https://your-umami-instance.railway.app/script.js" data-website-id="your-website-id"></script> -->
   ```

   **With your actual tracking script:**
   ```html
   <!-- Umami Analytics - Privacy-friendly, PIPEDA compliant, no cookies -->
   <script async src="https://umami-production-xxxx.up.railway.app/script.js" data-website-id="abc123-def456"></script>
   ```

4. Save the file

---

## Step 6: Test Locally

1. Start your dev server:
   ```bash
   npm start
   ```

2. Open `http://localhost:3000` in your browser

3. Navigate around your site (click different sections)

4. Go back to your Umami dashboard

5. Click on **"CyberSC"** website

6. You should see **real-time page views** appearing! 🎉

---

## Step 7: Deploy to Production

1. Commit your changes:
   ```bash
   git add public/index.html
   git commit -m "Add Umami analytics tracking"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Visit your live site at `cybersc.ca`

4. Check Umami dashboard - you should see live traffic!

---

## How to View Your Analytics

### Access Dashboard:
- Go to your Umami URL: `https://umami-production-xxxx.up.railway.app`
- Login with your password
- Click on **"CyberSC"** to see stats

### What You'll See:
- **Real-time visitors** (current users on site)
- **Page views** (total visits)
- **Unique visitors** (individual people)
- **Bounce rate** (people who left immediately)
- **Visit duration** (how long people stay)

### Detailed Insights:
- **Pages** - Which pages are most popular
- **Referrers** - Where visitors came from (Google, social media, etc.)
- **Countries** - Geographic location of visitors
- **Browsers** - Chrome, Firefox, Safari, etc.
- **Devices** - Desktop, mobile, tablet
- **Operating Systems** - Windows, macOS, iOS, Android

### Time Ranges:
- Last 24 hours
- Last 7 days
- Last 30 days
- Custom date range

---

## Troubleshooting

### "Can't access Umami URL"
- Check Railway deployment status (should show "Active")
- Wait 1-2 minutes if just deployed
- Make sure you generated a domain in Railway settings

### "No data showing in Umami"
- Verify tracking script is added to `public/index.html`
- Check script URL matches your Railway domain
- Check `data-website-id` matches your website ID in Umami
- Open browser console (F12) - look for JavaScript errors
- Make sure you're visiting the site (analytics only track actual page visits)

### "Can't login to Umami"
- Default credentials: `admin` / `umami`
- If you changed password and forgot it, check Railway environment variables or redeploy

### "Railway app sleeping"
- Free tier apps sleep after inactivity
- First request takes 10-20 seconds to wake up
- Analytics still work, just slower initial load
- Upgrade to Hobby plan ($5/month) to prevent sleeping

---

## Next Steps

Once analytics are flowing:

1. ✅ Monitor your website traffic daily/weekly
2. ✅ See which pages are most popular
3. ✅ Understand where your visitors come from
4. ✅ Track marketing campaign effectiveness
5. ✅ Make data-driven decisions about your website

---

## Your URLs (Save These!)

**Umami Dashboard:** `https://umami-production-xxxx.up.railway.app` ← Replace with your actual URL
**Your Website:** `https://cybersc.ca`

---

## Need Help?

If you're stuck, check:
1. Railway deployment logs for errors
2. Browser console (F12) for JavaScript errors
3. [Umami Documentation](https://umami.is/docs)
4. [UMAMI_SETUP.md](UMAMI_SETUP.md) for detailed guide

You're almost there! Just need to grab that tracking script from Umami. 🚀
