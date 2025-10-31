# 🚀 Deployment Guide - Kanjiverse

## Option 1: GitHub + Vercel (Recommended - FREE!)

### Step 1: Upload to GitHub

#### A. Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the instructions

#### B. Create New Repository
1. Click the **"+"** button (top right) → "New repository"
2. Repository name: `kanjiverse` (or any name you like)
3. Description: "JLPT N5 Japanese Learning App"
4. Choose **Public** (free hosting requires public repos)
5. **DON'T** check "Add README" (we already have one)
6. Click **"Create repository"**

#### C. Upload Your Code

**Option 1: Using GitHub Website (Easiest - No Git Required)**
1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL your project files and folders
3. Write commit message: "Initial commit - Kanji Ladder app"
4. Click **"Commit changes"**

**Option 2: Using Git Commands (If you have Git installed)**
```bash
# In your project folder, run these commands:
git init
git add .
git commit -m "Initial commit - Kanjiverse app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kanjiverse.git
git push -u origin main
```

---

### Step 2: Deploy to Vercel

#### A. Create Vercel Account
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest way!)
4. Authorize Vercel to access your GitHub

#### B. Import Your Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your `kanjiverse` repository
3. Click **"Import"**

#### C. Configure & Deploy
1. **Framework Preset**: Should auto-detect as "Vite" ✅
2. **Build Command**: `npm run build` (should be auto-filled)
3. **Output Directory**: `dist` (should be auto-filled)
4. Click **"Deploy"** button

⏳ Wait 1-2 minutes for deployment...

🎉 **Done!** Your app is live!

---

### Step 3: Get Your Free Domain

After deployment, you'll get a FREE domain like:
- `kanjiverse.vercel.app`
- `kanjiverse-xyz123.vercel.app`

#### Optional: Customize Your Free Domain
1. In Vercel, go to your project
2. Click **"Settings"** → **"Domains"**
3. You can edit the subdomain name (if available)
4. Example: Change to `jlpt-n5-kanji.vercel.app`

#### Optional: Use Custom Domain (Paid)
If you want your own domain like `kanjiverse.com`:
1. Buy domain from Namecheap, GoDaddy, etc. (~$10-15/year)
2. In Vercel: **Settings** → **Domains** → **Add**
3. Enter your domain name
4. Follow the DNS configuration instructions

---

## Option 2: Netlify (Alternative - Also FREE!)

### Deploy to Netlify

1. Go to https://netlify.com
2. Click **"Sign up"** → **"GitHub"**
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** → Select your `kanjiverse` repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

Your free domain: `random-name-123.netlify.app`

You can customize it in **Site settings** → **Domain management**

---

## 📱 Share Your App!

Once deployed, you can share your live link:
- `https://kanjiverse.vercel.app`
- Or your custom domain

Anyone can access it from anywhere! 🌍

---

## 🔧 Updating Your App

### If you make changes:

**Via GitHub Website:**
1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Vercel will automatically redeploy! ✨

**Via Git:**
```bash
git add .
git commit -m "Updated feature X"
git push
```
Vercel auto-deploys on every push!

---

## ❓ Troubleshooting

**Build fails?**
- Check that all files uploaded correctly
- Make sure `package.json` is in the root folder

**Page shows 404?**
- Vercel should handle routing automatically with our `vercel.json`

**Images not loading?**
- Unsplash images should work automatically
- Check browser console for errors

---

## 🎉 Congratulations!

Your Kanji Ladder app is now live on the internet!

Share it with:
- Fellow Japanese learners
- Language learning communities
- Your study group
- Social media with #JLPT #JapaneseLearning

---

**Need help?** Check:
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
