# Local Dev
```powershell
# Install npm - we are using v10.9.2

# Make sure your SSH keys are on the machine you are working with
# Set you github SSH configuration under ~/.ssh/config
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/<github-private-key>

# Clone the repo
git clone git@github.com:CyberStrategicConsulting/cybersc-site.git

# Navigate into the repo
cd cybersc-site

# Install things
npm install --legacy-peer-deps

# Build project locally
npm run build

# Run locally for Dev
npm start dev

# Navigate to website running locally
http://localhost:3000

# ~~~ Make changes and stuff ~~~

# If new libraries are install during dev, make sure to:
npm install --legacy-peer-deps
npm run build # <--- this cannot fail; if it does, it cannot be pushed to prod

# If no failures, push to prod
npm run deploy
```