# Client Upload Guide

This guide explains how to log in and upload images to the site.

## Access the Admin Login

1. Open the site URL in a browser.
2. Navigate to `/login`.
3. Enter your email address and submit.
4. Check your email for the Supabase magic link.
5. Click the link to sign in.

## Open the Admin Dashboard

Once logged in, you will be redirected to `/admin`.

## Uploading Images

Use the admin dashboard form:

- **Upload Type**: uploads a new `service` card
- **Title**: enter the image or service title
- **Description**: write a short description
- **Image**: choose a local image file
- Click **Upload Image**

## What Happens Next

- The image is uploaded to Supabase Storage.
- A new database row is created in the correct table.
- The image appears on the live site when the page is refreshed.

## Tips for Best Results

- Use a clear title and description.
- Choose JPG or PNG files.

## Troubleshooting

- If the upload fails, refresh the page and try again.
- Make sure your email is the one registered for admin access.
- If you cannot sign in, contact the site administrator.

## Important Notes

- Do not share the admin URL publicly.
- The project owner manages admin access via the Supabase `ADMIN_EMAIL` setting.
- The client only needs to use the `/login` and `/admin` pages to upload images.