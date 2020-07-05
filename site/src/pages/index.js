import React, {useState, useEffect} from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"

function getOS() {
  var platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

const IndexPage = () => {
  const [downloadLink, setDownloadLink] = useState("")

  useEffect(() => {
  fetch(`https://api.github.com/repos/christianpatrick/hitgub/releases/latest`)
    .then(response => response.json())
    .then(resultData => {
      resultData.assets.map(asset => {
        if (asset.name.endsWith('.dmg') && getOS() === "macOS") {
          setDownloadLink(asset.browser_download_url)
        }
        if (asset.name.endsWith('.AppImage') && getOS() === "Linux") {
          setDownloadLink(asset.browser_download_url)
        }
        if (asset.name.endsWith('.exe') && getOS() === "Windows") {
          setDownloadLink(asset.browser_download_url)
        }
      })
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Navigation downloadLink={downloadLink} />
      <Header downloadLink={downloadLink} />
      <Features />
      <Footer />
    </Layout>
  )
}

export default IndexPage
