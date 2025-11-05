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

## Step 5: Update App.js

Open `src/App.js` and replace the placeholders in the `handleSubmit` function (around line 332-336):

```javascript
const result = await emailjs.send(
  "YOUR_SERVICE_ID",    // Replace with your Service ID
  "YOUR_TEMPLATE_ID",   // Replace with your Template ID
  templateParams,
  "YOUR_PUBLIC_KEY"     // Replace with your Public Key
)
```

**Example:**
```javascript
const result = await emailjs.send(
  "service_abc123",
  "template_xyz789",
  templateParams,
  "abcdefghijklmnop"
)
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Navigate to the Contact Us section
3. Fill out and submit the form
4. Check your configured email inbox for the test message

## Security Note

For production, consider moving these credentials to environment variables:
1. Create a `.env` file in the root directory
2. Add:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Update the code to use:
   ```javascript
   const result = await emailjs.send(
     process.env.REACT_APP_EMAILJS_SERVICE_ID,
     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
     templateParams,
     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
   )
   ```

## Troubleshooting

- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Wrong email format**: Verify your template parameters match the ones sent from the form
- **Quota exceeded**: Free tier allows 200 emails/month. Consider upgrading if needed.

## Benefits of This Approach

✅ No backend server required
✅ No email client needed
✅ Professional user experience
✅ Form validation and error handling
✅ Success/error feedback to users
✅ Bilingual support (English/French)
