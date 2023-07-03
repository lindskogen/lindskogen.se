export async function get () {
  return {
    body: JSON.stringify({
      "GitHub": "https://github.com/lindskogen",
      "Twitter": "https://twitter.com/jlindsk",
      "Mastodon": "https://mastodon.nu/@jlindsk",
      "LinkedIn": "https://se.linkedin.com/pub/johan-lindskogen/70/652/176/",
      "CV": "https://lindskogen.se/cv"
    })
  }
}
