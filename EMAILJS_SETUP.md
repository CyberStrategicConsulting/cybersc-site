# EmailJS Setup Instructions

The contact form has been updated to use EmailJS for sending emails directly from the website. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
You have received a new message from your CyberSC website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Services of Interest:
{{services}}

Message:
{{message}}

---
This email was sent from the CyberSC website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Add Your Credentials to App.js

Open `src/App.js` and find the EmailJS configuration (around line 341-345). Replace the placeholder values with your actual credentials:

```javascript
const result = await emailjs.send(
  "YOUR_SERVICE_ID",      // Replace with your Service ID
  "YOUR_TEMPLATE_ID",     // Replace with your Template ID
  templateParams,
  "YOUR_PUBLIC_KEY"       // Replace with your Public Key
)
```

**Example:**
```javascript
const result = await emailjs.send(
  "service_abc123",       // Your Service ID
  "template_xyz789",      // Your Template ID
  templateParams,
  "abcdefghijklmnop"      // Your Public Key
)
```

### Why Hardcode These?

**These are PUBLIC keys that are safe to commit to your repository** because:

✅ **Designed for frontend use** - EmailJS public keys are meant to be exposed in client-side code
✅ **Rate-limited** - EmailJS automatically prevents abuse
✅ **Recipient controlled** - You configure the recipient email in EmailJS dashboard (not in code)
✅ **No security risk** - Worst case: someone spams YOUR inbox (annoying but contained)
✅ **Simpler deployment** - No environment variable configuration needed
✅ **GitHub Pages friendly** - Works perfectly with `npm run deploy`

**Note:** While these will be visible in your Git repository and deployed JavaScript, this is the **correct approach** for EmailJS. Don't use `.env` files as GitHub's secret scanning will flag them unnecessarily.

## Step 6: Test the Form

1. Start your development server:
   ```bash
   npm start
   ```
2. Navigate to the Contact Us section
3. Fill out and submit the form
4. Check your configured email inbox for the test message

**If the form doesn't work:**
- Check browser console (F12) for error messages
- Verify your credentials are correct in `App.js`
- Check EmailJS dashboard for error logs

## Step 7: Deploy to GitHub Pages

Simply run:
```bash
npm run deploy
```

Done! ✅ The contact form will work immediately on your live site.

## Troubleshooting

- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Wrong email format**: Verify your template parameters match the ones sent from the form
- **Quota exceeded**: Free tier allows 200 emails/month. Consider upgrading if needed
- **Environment variables not loading**:
  - Restart dev server after creating/modifying `.env`
  - Ensure variable names start with `REACT_APP_`
  - Check that `.env` is in the root directory (same level as `package.json`)
- **"EmailJS credentials not configured" error**: Your `.env` file is missing or not loaded correctly

## Benefits of This Approach

✅ No backend server required
✅ No email client needed
✅ Professional user experience
✅ Form validation and error handling
✅ Success/error feedback to users
✅ Bilingual support (English/French)
✅ Credentials managed via environment variables (not hardcoded)
✅ Secure development workflow
