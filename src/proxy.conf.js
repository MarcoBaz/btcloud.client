const PROXY_CONFIG = [
  {
    context: [
      "/web",
    ],
    target: "https://localhost:7105",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
