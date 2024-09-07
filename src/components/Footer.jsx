import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
<footer className="w-full h-1/12 text-center bg-slate-200 flex flex-col justify-center items-center">
  <div>
   <p>Powered by <a href="https://github.com/x-dr/telegraph-Image" target="_blank">Telegraph-Image</a> &amp; <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a></p>
  </div>
</footer>
  );
}
