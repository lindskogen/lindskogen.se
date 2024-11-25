export async function GET() {
  return new Response(
    JSON.stringify({
      "GitHub": "https://github.com/lindskogen",
      "Bluesky": "https://bsky.app/profile/jlindsk.bsky.social",
      "Mastodon": "https://mastodon.nu/@jlindsk",
      "LinkedIn": "https://se.linkedin.com/pub/johan-lindskogen/70/652/176/",
      "CV": "https://lindskogen.se/cv"
    }))
}
