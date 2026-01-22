# ✅ Quick SEO Verification Checklist

Use this checklist to verify all SEO optimizations are working correctly.

## 🔍 On-Page SEO Verification

### HTML Meta Tags
- [ ] Open `index.html` and verify `lang="en"`
- [ ] Check title tag is in English and under 60 characters
- [ ] Verify meta description is in English and under 160 characters
- [ ] Confirm keywords meta tag includes relevant English terms
- [ ] Check canonical URL is present

### Open Graph Tags
- [ ] Verify og:title is in English
- [ ] Check og:description is in English
- [ ] Confirm og:locale is "en_US"
- [ ] Verify og:image is set correctly

### Twitter Cards
- [ ] Check twitter:title is in English
- [ ] Verify twitter:description is in English
- [ ] Confirm twitter:image is set

### Structured Data
- [ ] Verify Restaurant schema description is in English
- [ ] Check menu section names are in English
- [ ] Confirm address is complete with postal code
- [ ] Verify phone number is +353433340929
- [ ] Check opening hours are correct
- [ ] Verify amenity features are in English

## 📄 Page-Specific SEO

### Home Page
- [ ] SEO title is in English
- [ ] Meta description is in English
- [ ] Keywords are in English
- [ ] All visible text is in English

### Menu Page
- [ ] SEO title: "Menu | Oyama Sushi - Sushi, Ramen, Nigiri & More"
- [ ] Meta description is in English
- [ ] "Show More/Less" buttons are in English
- [ ] All menu items display correctly

### About Page
- [ ] SEO title is in English
- [ ] Meta description is in English
- [ ] Content displays correctly

### Reservations Page
- [ ] SEO title is in English
- [ ] Meta description is in English
- [ ] Form works correctly

## 🗺️ Technical Files

### Sitemap
- [ ] File exists at `/public/sitemap.xml`
- [ ] Contains all 4 main pages (Home, Menu, About, Reservations)
- [ ] URLs are correct
- [ ] Images are referenced

### Robots.txt
- [ ] File exists at `/public/robots.txt`
- [ ] Allows all user agents
- [ ] References sitemap.xml
- [ ] Allows images, CSS, and JS

## 🌐 Browser Testing

### Desktop
- [ ] Open homepage in Chrome
- [ ] Check all meta tags in browser inspector
- [ ] Verify structured data with Google Rich Results Test
- [ ] Test all internal links work
- [ ] Check mobile responsiveness

### Mobile
- [ ] Test on mobile device or emulator
- [ ] Verify touch targets are adequate
- [ ] Check text is readable without zooming
- [ ] Test navigation menu works

## 🛠️ SEO Tools Verification

### Google Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing for main pages
- [ ] Check for crawl errors
- [ ] Verify mobile usability

### Google Rich Results Test
- [ ] Test homepage: https://search.google.com/test/rich-results
- [ ] Verify Restaurant schema is valid
- [ ] Check for any errors or warnings

### PageSpeed Insights
- [ ] Test desktop performance
- [ ] Test mobile performance
- [ ] Check Core Web Vitals
- [ ] Review optimization suggestions

### Schema Markup Validator
- [ ] Test at https://validator.schema.org/
- [ ] Paste structured data from index.html
- [ ] Verify no errors

## 📱 Social Media Preview

### Facebook Debugger
- [ ] Test at https://developers.facebook.com/tools/debug/
- [ ] Enter website URL
- [ ] Verify image, title, and description display correctly
- [ ] Click "Scrape Again" if needed

### Twitter Card Validator
- [ ] Test at https://cards-dev.twitter.com/validator
- [ ] Enter website URL
- [ ] Verify card displays correctly

## 🔗 Link Verification

### Internal Links
- [ ] Home → Menu works
- [ ] Home → About works
- [ ] Home → Reservations works
- [ ] All footer links work
- [ ] All navigation links work

### External Links
- [ ] Google Maps link works
- [ ] Phone number link works (click-to-call)
- [ ] Email link works
- [ ] Social media links work (if present)

## 📊 Analytics Setup

### Google Analytics
- [ ] GA4 tracking code installed (if applicable)
- [ ] Test events are firing
- [ ] Real-time data shows activity

### Google Tag Manager
- [ ] GTM container installed (if applicable)
- [ ] Tags are firing correctly

## 🎯 Keyword Verification

### Primary Keywords
- [ ] "Japanese restaurant" appears in content
- [ ] "sushi" appears multiple times
- [ ] "Longford" appears in content
- [ ] "authentic" appears in content
- [ ] "premium" appears in content

### Location Keywords
- [ ] "Longford" in address
- [ ] "Ireland" in content
- [ ] Geographic coordinates present

## 📝 Content Quality

### Readability
- [ ] Headings are clear and descriptive
- [ ] Paragraphs are concise
- [ ] No spelling errors
- [ ] Grammar is correct

### Images
- [ ] All images have alt text
- [ ] Images are optimized (WebP format)
- [ ] Images load quickly

## 🔒 Security & Trust

### HTTPS
- [ ] Site uses HTTPS (if deployed)
- [ ] No mixed content warnings

### Privacy
- [ ] Privacy policy page exists (if applicable)
- [ ] Cookie consent (if applicable)

## 📈 Performance

### Load Time
- [ ] Homepage loads in under 3 seconds
- [ ] Menu page loads quickly
- [ ] Images are lazy-loaded

### Mobile Performance
- [ ] Site is responsive
- [ ] Touch targets are adequate
- [ ] Text is readable

## ✅ Final Checks

### Build
- [ ] `npm run build` completes without errors
- [ ] No console errors in browser
- [ ] All pages render correctly

### Deployment
- [ ] Site is deployed to production
- [ ] DNS is configured correctly
- [ ] SSL certificate is active

### Monitoring
- [ ] Google Search Console is set up
- [ ] Google Analytics is tracking
- [ ] Regular backups are configured

---

## 🎊 Completion

Once all items are checked:
1. ✅ SEO is fully optimized
2. ✅ Site is ready for launch
3. ✅ Monitoring is in place
4. ✅ Begin content marketing strategy

**Last Updated**: January 2026  
**Status**: Ready for Production
