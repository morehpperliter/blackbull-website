# Black Bull Capital Partners — Website

A bold, high-contrast static website for Black Bull Capital Partners.

## File Structure

```
blackbull/
├── index.html          # Main page (all sections)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, scroll reveal, form behavior
└── assets/
    └── logo.png        # Black Bull bull icon logo
```

## Deploying to GitHub Pages

1. **Create a new GitHub repository** (e.g., `blackbull-website`)
2. **Upload all these files** — maintain the same folder structure
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` branch and `/ (root)` folder
6. Click **Save** — your site will be live at `https://yourusername.github.io/blackbull-website/`

## Moving to Production Host

When ready to deploy to `blackbullcapitalpartners.com`:
- Upload all files to the root of your web hosting via FTP/cPanel
- No build step required — this is plain HTML/CSS/JS

## Customizing Content

### Team Section
- Replace placeholder names/bios in `index.html` under the `#team` section
- Add headshot images to `/assets/` and update the `<img>` tags in team cards

### Contact Info
- Update email address in the Contact section
- Add your physical address

### Services
- Edit service titles and descriptions directly in `index.html`

### Colors / Branding
All brand colors are defined as CSS variables at the top of `css/style.css`:
```css
--gold:  #C9A84C;   /* Primary accent */
--black: #0a0a0a;   /* Background */
--white: #f5f2ed;   /* Text */
```

## Contact Form
The form currently shows a success state on submit. To connect it to a real backend:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` tag
- **Netlify Forms**: Add `netlify` attribute to the `<form>` tag if hosting on Netlify
