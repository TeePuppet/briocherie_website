<script lang="ts">
const currentYear = new Date().getFullYear();

const footerLogo = "assets/logo/briocherie_logo.svg"
</script>

<footer class="px-6 py-6 font-sans mt-10">
  <div class="footer-wrapper">
    <div class="mb-4">
        <a href="/" class="block mb-4"><img src={footerLogo}/></a>
        <ul class="flex gap-2 mb-4">
            <li class="socialIcon bg-main"><a href="/" class="block"><img src="assets/icons/tiktok.svg"/></a></li>
            <li class="socialIcon bg-main"><a href="/" class="block"><img src="assets/icons/instagram.svg"/></a></li>
            <li class="socialIcon bg-main"><a href="/" class="block"><img src="assets/icons/facebook.svg"/></a></li>
        </ul>
        <p>Brioșerie artizanală care este specializată în realizarea de brioșe delicioase cu diverse arome și oferă creații personalizate pentru a satisface preferințele tale unice de gust.</p>
    </div>
    <div class="copyright-wrapper">
      <span>Copyright &#169; {currentYear}</span>
      <span class="separator">&nbsp;|&nbsp;</span>
      <span>Toate drepturile rezervate.</span>
    </div>
  </div>
</footer>

<style>

</style>
