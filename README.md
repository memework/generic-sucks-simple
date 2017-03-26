# Generic Sucks
But this time, we're in for a simple version!

# Running

Really simple.

First, you need dependencies. This can be done by installing them from package.json - `npm install` in the code directory.

Then, that's really it. Run `npm start` or `node server.js` to start the web server.

However, this site was designed for [Glitch](https://glitch.com)'s platform and automatically redirects to HTTPS, so you will need a HTTPS frontend (nginx/haproxy with a SSL cert? Cloudflare?) to make this site work not 100%, but at all.

Possible solutions for this:

- haproxy/nginx with SSL
- Glitch
- Netlify
- Cloudflare

If you have any suggestions for a solution or the site or anything here in general, file a issue.

A bug that you know how to fix? Pull request.
